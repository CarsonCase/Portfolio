import { OPENAI_KEY } from '$env/static/private'
import type {RequestHandler} from '@sveltejs/kit'
import type OpenAi from "openai"
import {getTokens} from "$lib/tokenizer"
import {json} from "@sveltejs/kit"
import type {Config} from "@sveltejs/adapter-vercel";

export const config:Config={
    runtime: "edge"
}

// async function readFileAsString(filePath: string): Promise<string> {
//   try {
//     const content = await fetch("prompt.txt");
//     console.log(prompt);
//     return content as unknown as Promise<string>;
//   } catch (error) {
//     console.error(`Error reading file: ${error.message}`);
//     throw error;
//   }
// }

const moderationURL = "https://api.openai.com/v1/moderations"
const openAiURL = "https://api.openai.com/v1/chat/completions"

export const POST: RequestHandler = async({request}) => {

    try{
        if(!OPENAI_KEY){
            throw new Error("OPENAI_KEY env variable not found")
        }

        const requestData = await request.json()

        if (!requestData){
            throw new Error("No request data")
        }

        const reqMessages: OpenAi.ChatCompletionMessageParam[] = requestData.messages

        if (!reqMessages){
            throw new Error("No messages provided")
        }

        let tokenCount = 0

        reqMessages.forEach((message)=>{
            const tokens = getTokens(message.content as string)
            tokenCount += tokens
        })

        const moderationRes = await fetch(moderationURL, {
            headers:{
                'Content-Type': "application/json",
                Authorization: `Bearer ${OPENAI_KEY}`,
            },
            method: 'POST',
            body: JSON.stringify({
                input: reqMessages[reqMessages.length - 1].content
            })
        })

        if(!moderationRes.ok) {
            const err = await moderationRes.json()
            throw new Error(err.error.message)
        }

        const moderationData = await moderationRes.json()
        const [results] = moderationData.results

        if (results.flagged){
            throw new Error("Query flagged by openAi")
        }

        tokenCount += getTokens(prompt)

        if(tokenCount >= 4000){
            throw new Error("Token count too large")
        }

        const messages: OpenAi.ChatCompletionMessageParam[] = [
            { role: 'system', content: prompt },
            ...reqMessages
        ]

        const chatRequestOpts: OpenAi.ChatCompletionCreateParams = {
            model: 'gpt-3.5-turbo',
            messages,
            temperature: 0.9,
            stream: true
        }

        const chatResponse = await fetch(openAiURL, {
            headers:{
                Authorization: `Bearer ${OPENAI_KEY}`,
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(chatRequestOpts)
        })

        if(!chatResponse.ok){
            const err = await chatResponse.json()
            throw new Error(err.error.message)
        }

        return new Response(chatResponse.body, {
            headers:{
                "Content-Type": "text/event-stream"
            }
        })

        
    }
    catch (err) {
        console.error(err)
        return json({error: 'There was an error processing the request'}, {status: 500})
    }
    
}
