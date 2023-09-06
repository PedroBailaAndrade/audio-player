<script>
	import AudioImage from './AudioImage.svelte';
	import AudioContent from './AudioContent.svelte';
</script>

<div class="audio-card">
	<AudioImage />
	<AudioContent />
</div>

<style>
	.audio-card {
		display: grid;
		gap: 16px;
		grid-template-columns: 140px 412px;
		grid-template-rows: 140px;
		padding: 16px 15px 16px 15px;
	}
</style>
