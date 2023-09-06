<script>
	import { audioIsPaused } from '../lib/audioStore';
</script>

<div
	class="audio-state-button"
	on:click={() => ($audioIsPaused = !$audioIsPaused)}
	on:keydown={() => ($audioIsPaused = !$audioIsPaused)}
	role="button"
	tabindex="0"
>
	{#if !$audioIsPaused}
		<img src="./pause.svg" alt="pause" />
	{:else}
		<img src="./play.svg" alt="play" />
	{/if}
</div>

<style>
	.audio-state-button {
		align-items: center;
		background-color: rgba(23, 23, 23, 0.8);
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		height: 48px;
		justify-content: center;
		width: 48px;
		z-index: 1;
	}
</style>
