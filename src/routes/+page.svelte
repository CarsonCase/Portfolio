<script lang="ts">
    import GalleryWindowContent from "./GalleryWindowContent.svelte"
    import DesktopIcon from "./DesktopIcon.svelte";
    import AiChatWindowContent from "./AIChatWindowContent.svelte";
    import MenuBar from "./MenuBar.svelte";

    let contactMenuDisplay: boolean = false;

	$: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0

</script>
  <div class="flex">
    <div class="h-screen w-screen" style="background-image: url('https://wallpapers.com/images/hd/windows-10-default-k4s3pap71thyjavb.jpg');">
        {#if innerWidth >= 1000}
        <DesktopIcon display={true} text="About Me" src="Windows 7 Information.png">
            <div class="w-[800px]">
                <div class="grid grid-cols-2">
                    <div>
                        <p class="text-6xl">Hello!</p>
                        <p class="text-3xl">I'm Carson Case, a passionate software engineer</p>
                        <p class="text-3xl">specializing in</p> 
                        <p class="text-4xl">Blockchain and Fintech development</p>
                    </div>
                

                    <div class="flex justify-center">
                        <img class="h-[300px]" src="../../static/Headshot.jpg" alt="">
                    </div>

                </div>

                <div>
                    <div class="py-2">
                        <MenuBar></MenuBar>
                    </div>
                    <div class="text-lg h-[200px] overflow-y-auto">
                        <p>👋 Welcome to my digital space, where creativity meets functionality.</p>                        
                        <p class="py-5">💻 As a blockchain enthusiast, my expertise lies in crafting Smart Contracts using Solidity, Hardhat, Foundry and many more tools. However, I'm not confined to just one realm; I'm a seasoned full-stack developer proficient in languages like Javascript/Typescript, Python, and Golang.</p>
                        <p class="py-5">🔍 Click on each project's desktop icon to reveal a gallery window, complete with a live link, screenshot, and detailed description. Whether it's blockchain smart contracts or dynamic frontend interfaces, you'll find a diverse showcase of my skills and creativity.</p>
                        <p class="py-5">🤖 Wish we could talk right here, right now? Click AI Chat to do the next best thing and have a conversation with an AI prompted on my projects, resume and personality!</p>
                        <p class="py-5">📞 Ready to discuss how we can collaborate on the next big thing? Let's connect! Book a call with me through Calendly and let's bring your ideas to life.</p>
                        <p class="py-5">Find my Calendly at Contact > Socials > Calendly (or just click <a href="https://calendly.com/carsonpcase/30min" target="_blank">here</a> if you want to be boring.</p>
                        <p class="py-6 text-xl">Let's build the future together!</p>
                    </div>
                </div>
            <div>

        </DesktopIcon>

        <DesktopIcon text="Contact" src="Windows 7 Contacts.png">
            {#if contactMenuDisplay}
                <div class="absolute">
                    <ul role="menu" style="width: 200px">
                        <li role="menuitem" tabindex="0" aria-haspopup="true">
                            Social Media
                            <ul role="menu">
                            <li role="menuitem"><a href="https://github.com/CarsonCase" target="_blank">Github</a></li>
                            <li role="menuitem"><a href="https://twitter.com/SolContractADay" target="_blank">Twitter</a></li>
                            <li role="menuitem"><a href="https://www.linkedin.com/in/carson-p-case/" target="_blank">Linkedin</a></li>
                            </ul>
                        </li>
                        <li role="menuitem"><a href="mailto:carsonpcase@gmail.com">Email</a></li>
                        <li role="menuitem"><a href="https://calendly.com/carsonpcase/30min" target="_blank">Calendly</a></li>
                        <li role="menuitem"><a on:click={()=>{contactMenuDisplay=false}}>Close</a></li>
                        </ul>
                    </div>
                {/if}
            <img src="https://i.gifer.com/origin/81/819e6ef27c2f13b211813f61ee68b201_w200.gif" alt="">
            <button class="w-full" on:click={()=>{contactMenuDisplay=true}} >Socials</button>
        </DesktopIcon>

        <DesktopIcon text="Capybara" src="Windows 7 Cyan Check.png">
            <GalleryWindowContent text="I love Capybaras!">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem ducimus recusandae commodi, vero culpa praesentium labore. Mollitia perferendis aut cumque hic, pariatur maxime, minima iusto odio, ratione dignissimos cupiditate.
            </GalleryWindowContent>
        </DesktopIcon>

        <DesktopIcon text="AI Chat" src="Windows 7 Connect to Internet.png">
            <AiChatWindowContent></AiChatWindowContent>
        </DesktopIcon>
        {:else}
        <div class="flex flex-col text-center">
            <h1>Please access this site on desktop</h1>
            <p>I know, mobile is great. But this site has a really cool gimmick that's much better on a larger screen</p>
        </div>
        {/if}
      
    </div>
  </div>

  <svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight/>
