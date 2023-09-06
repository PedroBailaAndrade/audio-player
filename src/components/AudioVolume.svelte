<script>
	import { audioVolume } from '../lib/audioStore';
</script>

<div class="audio-volume">
	<div class="volume-down">
		<img src="./volume-down.svg" alt="volume-down" />
	</div>
	<div class="volume-bar">
		<div class="grey" />
		<div class="black" style="--volume-percentage: {$audioVolume * 100}%" />
		<input bind:value={$audioVolume} type="range" min="0" max="1" step="0.01" />
	</div>
	<div class="volume-up">
		<img src="./volume-up.svg" alt="volume-up" />
	</div>
</div>

<style>
	.audio-volume {
		align-items: center;
		background-color: #f8f8f8;
		border-top: 1px solid #e8e8e8;
		display: grid;
		gap: 12px;
		grid-template-rows: 16px;
		grid-template-columns: 15px 1fr 22px;
		padding: 15px 16px 16px;
	}

	.volume-down,
	.volume-up {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.volume-down,
	.volume-down img,
	.volume-up,
	.volume-up img {
		height: 16px;
	}

	.volume-bar {
		height: 6px;
		position: relative;
	}

	.grey,
	.black,
	input[type='range'] {
		border-radius: 999px;
		height: 6px;
		left: 0;
		position: absolute;
		top: 0;
	}
	.grey {
		background-color: #e2e2e2;
		width: 100%;
	}

	.black {
		background-color: #171717;
		width: var(--volume-percentage);
	}

	input[type='range'] {
		background: transparent;
		cursor: pointer;
		display: block;
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
