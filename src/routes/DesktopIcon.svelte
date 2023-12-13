<script lang="ts">
    import Window from "./Window.svelte";
    import {base} from "$app/paths";

    const PATH = "assets/icons/"
    export let src = "Windows 7 Folder.png"
    export let display = false
    export let text = "My Folder"
    console.log(PATH+src)
</script>

<style>
    .outlined-text {
      color: white;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }
</style>

<div on:click={function(){display=true}} class="p-5 flex">
    <div>
        <img src={PATH+src} alt="">
        <p class="outlined-text text-center text-md">{text}</p>
    </div>
</div>

{#if display}
    <Window text={text} onClose={function(){display=false}}>
        <slot></slot>
    </Window>
{/if}
