<script>
	import { audioCurrentTime, formatTime, audioIndex, audioData } from '../lib/audioStore';

	let elapsedPercentage;
	const getElapsedPercentage = (current, duration) => {
		elapsedPercentage = (current / duration) * 100;
		if (elapsedPercentage > 99.5) {
			elapsedPercentage = 99.5;
		}
	};

	$: $audioCurrentTime, getElapsedPercentage($audioCurrentTime, $audioData[$audioIndex].duration);
</script>

<div class="audio-progress-bar">
	<div class="audio-wave">
		<div class="grey" />
		<div class="black" style="--elapsed-time-percentage: {elapsedPercentage}%" />
		<img class="waves" src="/progress-bar.svg" alt="progress bar" />
		<input
			bind:value={$audioCurrentTime}
			type="range"
			min="0"
			max={$audioData[$audioIndex].duration}
			step="0.01"
		/>
	</div>
	<div class="audio-timer">
		<p class="time-passed">{formatTime($audioCurrentTime)}</p>
		<p class="time-to-finish">
			-{formatTime(parseFloat($audioData[$audioIndex].duration) - parseFloat($audioCurrentTime))}
		</p>
	</div>
</div>

<style>
	.audio-progress-bar {
		display: grid;
		gap: 8px;
		grid-template-columns: 100%;
		grid-template-rows: 48px 13px;
	}

	.audio-timer {
		color: #858585;
		display: flex;
		font-size: 11px;
		font-weight: 500;
		justify-content: space-between;
		line-height: 13px;
	}

	.audio-wave {
		height: 48px;
		position: relative;
	}

	.grey,
	.black,
	.waves,
	input[type='range'] {
		position: absolute;
		top: 0;
		left: 0;
	}

	.grey {
		height: 48px;
		width: 100%;
		background-color: #dbdbdb;
	}

	.black {
		height: 48px;
		width: var(--elapsed-time-percentage);
		background-color: #171717;
	}

	.waves {
		width: 100%;
	}

	input[type='range'] {
		background: transparent;
		cursor: pointer;
		display: block;
		height: 48px;
		outline: 0;
		width: 100%;
		-moz-appearance: none;
		-webkit-appearance: none;
	}

	input[type='range']::-webkit-slider-thumb {
		opacity: 0;
	}

	input[type='range']::-moz-range-thumb {
		opacity: 0;
	}
</style>
