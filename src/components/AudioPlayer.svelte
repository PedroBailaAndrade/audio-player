<script>
	import {
		audioPlayer,
		audioData,
		audioIndex,
		audioVolume,
		audioIsPaused,
		audioCurrentTime,
		audioEnded
	} from '../lib/audioStore';
</script>

<div class="audio-player">
	<audio
		bind:this={$audioPlayer}
		bind:volume={$audioVolume}
		bind:paused={$audioIsPaused}
		bind:currentTime={$audioCurrentTime}
		bind:ended={$audioEnded}
		src={$audioData[$audioIndex].audioSrc}
		autoplay
		preload="metadata"
	/>
</div>
