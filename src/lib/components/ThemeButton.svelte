<script>
	import { send, receive } from '$lib/crossfadenav';
	import LightSvg from './svg/LightSVG.svelte';
	import DarkSvg from './svg/DarkSVG.svelte';
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';

	let dark = (browser && __theme) || 'light';

	function onClick() {
		let theme = __theme == 'light' ? 'dark' : 'light';
		__setColors(theme);
		localStorage.setItem('__theme', theme);
		dark = theme;
	}
</script>

<flex
	in:receive={{ key: 'theme' }}
	out:send={{ key: 'theme' }}
	on:click={onClick}
	class="w-[40px] h-[40px] primaryColor rounded-md textAccent cursor-pointer fill-white z-50"
>
	<div transition:fade>
		<svelte:component this={dark == 'light' ? DarkSvg : LightSvg} />
	</div></flex
>
