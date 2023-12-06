<script lang="ts">
import type OpenAi from "openai"
	import { Declaration } from "postcss";
	import { SSE } from "sse.js";

let query: string = ""
let answer: string = ""
let loading: boolean = false
let chatMessages: OpenAi.ChatCompletionMessageParam[] = []
let scrollToDiv: HTMLDivElement

function scrollToBottom(){
    setTimeout(function () {
        scrollToDiv.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }, 100)
}
const handleSubmit = async()=>{
    loading = true
    chatMessages = [...chatMessages, {role: "user", content: query}]

    const eventSource = new SSE("/api/chat", {
        headers: {
            "Content-Type": "application/json",
        },
        payload: JSON.stringify({messages:chatMessages})
    })

    query = ""

    eventSource.addEventListener("error", handleError)

    eventSource.addEventListener("message", (e)=>{
        scrollToBottom()
        try {
            loading = false
            if(e.data === '[DONE]'){
                chatMessages = [...chatMessages, {role: "assistant", content: answer}]
                answer = ""
                return
            }

            const completionResponse = JSON.parse(e.data)
            const delta = completionResponse.choices[0].delta

            if(delta.content){
                answer = (answer ?? "") + delta.content
            }
        } catch (error) {
            handleError(error)
        }
    })

    function handleError<T>(err: T){
        loading = false
        query = ""
        answer = ""
        console.error(err)
    }
}
</script>

<div class="h-[500px] w-[600px] overflow-y-auto">
    <div class="container">
        {#each chatMessages as message}
        <div role="tooltip" class="is-top is-right px-2 my-5">
            {message.content}
        </div>
        {/each}
        {#if answer}
        <div role="tooltip" class="is-top is-left px-2 my-5">
            {answer}
        </div>
        {/if}
        {#if loading}
        <div>
            <p>loading...</p>
        </div>
        {/if}
    </div>
    <div class="object-bottom">
        <form on:submit|preventDefault={()=> handleSubmit()}>
            <textarea class="w-full" name="" id="" bind:value={query} cols="30" rows="7"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
    <div bind:this={scrollToDiv}></div>

</div>