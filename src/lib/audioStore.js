import { writable } from 'svelte/store';

export const audioData = writable([
	{
		title: 'Falconer',
		artist: 'Southern Roots Boogie',
		audioSrc: '/Falconer-Southern Roots Boogie.mp3',
		imageSrc: '/Falconer-Southern Roots Boogie.png',
		duration: 94
	},
	{
		title: 'Ofer Koren',
		artist: 'Sax Party',
		audioSrc: '/Ofer Koren-Sax Party.mp3',
		imageSrc: '/Ofer Koren-Sax Party.png',
		duration: 164
	},
	{
		title: 'Raw',
		artist: 'Nonsense',
		audioSrc: '/Raw-Nonsense.mp3',
		imageSrc: '/Raw-Nonsense.png',
		duration: 204
	}
]);

export const audioIndex = writable(0);
export const audioIsPaused = writable(true);
export const audioIsRepeat = writable(false);
export const audioCurrentTime = writable(0);
export const audioDuration = writable(0);
export const audioVolume = writable(0.2);
export const audioFile = writable('');
export const audioEnded = writable(false);

export const audioPlayer = writable();

export const formatTime = (time) => {
	if (isNaN(time)) return '0:00';
	const newTime = parseFloat(time);

	const minutes = Math.floor(newTime / 60);
	const seconds = Math.floor(newTime % 60);

	if (minutes < 0) {
		return '0:00';
	}

	return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};
