<script>
	import { audioIndex, audioData } from '../lib/audioStore';
</script>

<div class="audio-text">
	<p class="audio-title">{$audioData[$audioIndex].title}</p>
	<p class="artist-name">{$audioData[$audioIndex].artist}</p>
</div>

<style>
	.audio-text {
		display: grid;
		gap: 4px;
		grid-template-columns: 308px;
		grid-template-rows: 20px 20px;
	}

	.artist-name,
	.audio-title {
		font-size: 18px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.artist-name {
		color: #858585;
		font-weight: 400;
	}

	.audio-title {
		color: #171717;
		font-weight: 700;
	}
</style>
