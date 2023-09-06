<script>
	import { audioIndex, audioData, audioEnded } from '../lib/audioStore';

	const previousAudio = () => {
		if ($audioIndex > 0) {
			$audioIndex -= 1;
		} else {
			$audioIndex = $audioData.length - 1;
		}
	};

	const nextAudio = () => {
		if ($audioIndex < $audioData.length - 1) {
			$audioIndex += 1;
		} else {
			$audioIndex = 0;
		}
	};

	const shuffle = () => {
		const max = $audioData.length - 1;
		const min = 0;
		$audioIndex = Math.floor(Math.random() * (max - min + 1)) + min;
	};

	$: if ($audioEnded) {
		nextAudio();
	}
</script>

<div class="audio-controls">
	<div
		class="previous"
		on:click={() => previousAudio()}
		on:keydown={() => previousAudio()}
		role="button"
		tabindex="0"
	>
		<img src="./previous.svg" alt="previous" />
	</div>
	<div
		class="next"
		on:click={() => nextAudio()}
		on:keydown={() => nextAudio()}
		role="button"
		tabindex="0"
	>
		<img src="./next.svg" alt="next" />
	</div>
	<div
		class="shuffle"
		on:click={() => shuffle()}
		on:keydown={() => shuffle()}
		role="button"
		tabindex="0"
	>
		<img src="./shuffle.svg" alt="shuffle" />
	</div>
</div>

<style>
	.audio-controls {
		display: flex;
		gap: 12px;
	}

	.audio-controls div {
		cursor: pointer;
	}
</style>
