<div class="audio-volume">
	<div class="volume-down">
		<img src="./volume-down.svg" alt="volume-down" />
	</div>
	<div class="volume-bar" />
	<div class="volume-up">
		<img src="./volume-up.svg" alt="volume-up" />
	</div>
</div>

<style>
	.audio-volume {
		align-items: center;
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
		background-color: #e2e2e2;
		height: 6px;
		width: 100%;
	}
</style>
