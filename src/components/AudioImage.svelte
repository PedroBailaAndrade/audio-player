<script>
	import { audioIndex, audioData } from '../lib/audioStore';
	import AudioStateButton from './AudioStateButton.svelte';
</script>

<div class="audio-img">
	<img src={$audioData[$audioIndex].imageSrc} alt="audio-image" />
	<AudioStateButton />
</div>

<style>
	.audio-img {
		align-items: center;
		display: flex;
		justify-content: center;
		position: relative;
	}

	img {
		border-radius: 4px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
