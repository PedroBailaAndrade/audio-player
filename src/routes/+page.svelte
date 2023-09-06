<script>
	import AudioPlayer from '../components/AudioPlayer.svelte';
	import AudioPlayerCard from '../components/AudioPlayerCard.svelte';
</script>

<section>
	<AudioPlayerCard />
	<AudioPlayer />
</section>

<style>
	@font-face {
		font-family: SFPro;
		src: url('/fonts/sf-pro-text-regular.woff');
		font-weight: 400;
	}

	@font-face {
		font-family: SFPro;
		src: url('/fonts/sf-pro-text-medium.woff');
		font-weight: 500;
	}

	@font-face {
		font-family: SFPro;
		src: url('/fonts/sf-pro-text-bold.woff');
		font-weight: 700;
	}

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
</style>
