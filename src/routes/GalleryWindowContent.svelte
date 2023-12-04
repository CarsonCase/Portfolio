<script lang="ts">
    export let text = "Hello world"
    export let src = "https://i.chzbgr.com/full/9784437760/h01FE6466/hamster"
</script>

<style>
.wordart {
  font-family: Arial, sans-serif;
  font-size: 4em;
  font-weight: bold;
  position: relative;
  z-index: 1;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

.wordart.rainbow {
  transform: scale(1, 1.5);
  -webkit-transform: scale(1, 1.5);
  -moz-transform: scale(1, 1.5);
  -o-transform: scale(1, 1.5);
  -ms-transform: scale(1, 1.5);
}

.wordart.rainbow .text {
  background: red; 
  background: -webkit-linear-gradient(left, #b306a9, #ef2667, #f42e2c, #ffa509, #fdfc00, #55ac2f, #0b13fd, #a804af);
  background: -o-linear-gradient(left, #b306a9, #ef2667, #f42e2c, #ffa509, #fdfc00, #55ac2f, #0b13fd, #a804af);
  background: -moz-linear-gradient(left, #b306a9, #ef2667, #f42e2c, #ffa509, #fdfc00, #55ac2f, #0b13fd, #a804af);
  background: linear-gradient(to right, #b306a9, #ef2667, #f42e2c, #ffa509, #fdfc00, #55ac2f, #0b13fd, #a804af); 
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


</style>
<div style="width:600px;" class="container">
    <div class="flex justify-center py-5">
        <div class="wordart rainbow"><span class="text">{text}</span></div>
    </div>
    <img style="width:600px; height:500px;" src={src} alt="">
    <slot></slot>
    <button class="w-full">Check it out</button>
</div>
