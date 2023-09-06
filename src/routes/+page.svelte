<script>
	import AudioPlayerCard from '../components/AudioPlayerCard.svelte';
</script>

<section>
	<AudioPlayerCard />
</section>

<style>
	:global(body) {
		align-items: center;
		background-color: #f8f8f8;
		display: flex;
		font-family: SFPro;
		font-weight: 400;
		height: 80vh;
		justify-content: center;
		width: 100vw;
	}

	:global(*) {
		margin: 0;
		padding: 0;
	}

	@font-face {
		font-family: SFPro;
		src: url(./sf-pro-text-regular.woff);
		font-weight: 400;
	}
	@font-face {
		font-family: SFPro;
		src: url(./sf-pro-text-medium.woff);
		font-weight: 500;
	}
	@font-face {
		font-family: SFPro;
		src: url(./sf-pro-text-bold.woff);
		font-weight: 700;
	}
</style>
