<script lang="ts">
    export let text = "Hello world"
    export let src = "https://i.chzbgr.com/full/9784437760/h01FE6466/hamster"
</script>

<div style="width:600px;" class="container">
    <div class="flex justify-center py-5">
        <div class="wordart rainbow"><span class="text">{text}</span></div>
    </div>
    <img style="width:600px; height:500px;" src={src} alt="">
    <slot></slot>
    <button class="w-full">Check it out</button>
</div>
