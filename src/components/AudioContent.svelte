<script>
	import AudioText from './AudioText.svelte';
	import AudioProgressBar from './AudioProgressBar.svelte';
	import AudioControls from './AudioControls.svelte';
</script>

<div class="audio-content">
	<div class="content">
		<AudioText />
		<AudioControls />
	</div>
	<AudioProgressBar />
</div>

<style>
	.audio-content {
		display: grid;
		gap: 31px;
		grid-template-columns: 100%;
		grid-template-rows: 40px 69px;
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: start;
	}
</style>
