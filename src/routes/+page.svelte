<script lang="ts">
    import GalleryWindowContent from "./GalleryWindowContent.svelte"
    import DesktopIcon from "./DesktopIcon.svelte";
    import AiChatWindowContent from "./AIChatWindowContent.svelte";

    let socialsMenuDisplay: boolean = false;
    function setSocialMenuDisplayTrue(){
        socialsMenuDisplay = true;
    }
</script>

<style>
    .window-subheader{
        font: 16pt Segoe UI,SegoeUI,Noto Sans,sans-serif;
    }

</style>
  
  <div class="flex">
    <div class="h-screen w-screen" style="background-image: url('https://wallpapers.com/images/hd/windows-10-default-k4s3pap71thyjavb.jpg');">
        <DesktopIcon display={true} text="About Me" src="Windows 7 Information.png">
            <h1 class="window-header">Carson Case</h1>
            <h2 class="window-subheader">Blockchain/FullStack Developer</h2>
            <div class="">
                <p>Welcome to my portfolio! The desktop icons here represent each of my portfolio projects and other menu items.</p>
                <p>Drag around the windows and position them wherever you like, clicking folders to open, and X's to close</p>
            </div>
        </DesktopIcon>

        <DesktopIcon text="Socials" src="Windows 7 Contacts.png">
            {#if socialsMenuDisplay}
                <div class="absolute">
                    <ul role="menu" style="width: 200px">
                        <li role="menuitem" tabindex="0" aria-haspopup="true">
                            Social Media
                            <ul role="menu">
                            <li role="menuitem"><a href="#menu">Github</a></li>
                            <li role="menuitem"><a href="#menu">Twitter</a></li>
                            <li role="menuitem"><a href="#menu">Linkedin</a></li>
                            </ul>
                        </li>
                        <li role="menuitem"><a href="carsonpcase@gmail.com">Email</a></li>
                        <li role="menuitem"><a href="#menu">Portfolio Page</a></li>
                        <li role="menuitem"><a on:click={()=>{socialsMenuDisplay=false}}>Close</a></li>
                        </ul>
                    </div>
                {/if}
            <img src="https://i.gifer.com/origin/81/819e6ef27c2f13b211813f61ee68b201_w200.gif" alt="">
            <button class="w-full" on:click={()=>{socialsMenuDisplay=true}} >Socials</button>
        </DesktopIcon>

        <DesktopIcon text="Capybara" src="Windows 7 Cyan Check.png">
            <GalleryWindowContent text="I love Capybaras!">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem ducimus recusandae commodi, vero culpa praesentium labore. Mollitia perferendis aut cumque hic, pariatur maxime, minima iusto odio, ratione dignissimos cupiditate.
            </GalleryWindowContent>
        </DesktopIcon>

        <DesktopIcon text="AI Chat", src="Windows 7 Connect to Internet.png">
            <AiChatWindowContent></AiChatWindowContent>
        </DesktopIcon>
    </div>
  </div>