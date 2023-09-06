<div class="audio-progress-bar">
	<div class="audio-wave" />
	<div class="audio-timer">
		<p class="time-passed">2:48</p>
		<p class="time-to-finish">-6:49</p>
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
		background-color: bisque;
	}
</style>
