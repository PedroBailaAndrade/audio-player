<script>
	import AudioCard from './AudioCard.svelte';
	import AudioVolume from './AudioVolume.svelte';
</script>

<div class="audio-player-card">
	<AudioCard />
	<AudioVolume />
</div>

<style>
	.audio-player-card {
		border-radius: 16px;
		box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.06);
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 172px 48px;
		height: 220px;
		width: 600px;
	}
</style>
