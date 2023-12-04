<link rel="stylesheet" href="https://unpkg.com/7.css">

<script lang="ts">
	import {onMount} from "svelte";

	onMount(function() {
		left = (Math.random()*(innerWidth - (1/6 * innerWidth)))/2;
		top = (Math.random()*innerHeight)/2;
	})

	$: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0

	export let text = "";
	export let onClose = function(){};


	let left = 0;
	let top = 0;

	let moving = false;
	let windowElement:HTMLElement | null;

	function onMouseDown() {
		moving = true;
	}
	
	function onMouseMove(e) {
		if (moving) {
			if(windowElement){
				left = Math.max(0, Math.min(left + e.movementX, innerWidth - windowElement?.clientWidth));
				top = Math.max(0, Math.min(top + e.movementY, innerHeight - windowElement?.clientHeight));
			}
		}
	}
	
	function onMouseUp() {
		moving = false;
	}
	
</script>
<style>
	.draggable {
		user-select: none;
		cursor: move;
		border: solid 1px gray;
		position: absolute;
	}
</style>

<section bind:this={windowElement} on:mousedown={onMouseDown} style="left: {left}px; top: {top}px;" class="draggable">

    <div class="window active" style="">
        <div class="title-bar">
          <div class="title-bar-text">{text}</div>
          <div class="title-bar-controls">
            <button on:click={onClose()} aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body has-space">
            <slot></slot>
        </div>
      </div></section>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
