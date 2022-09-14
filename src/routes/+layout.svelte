<script>
	import '../styles.css';
	// import { siteDescription } from '$lib/config';
	import { isMenuOpen } from '$lib/assets/js/store';
	import { browser } from '$app/environment';

	let dark = (browser && __theme) || 'light';

	function onClick() {				
		let theme = __theme == 'light' ? 'dark' : 'light';
		__setColors(theme);
		localStorage.setItem("__theme", theme);		
		dark = theme;
	}
</script>

<div class="layout" class:open={$isMenuOpen}>
	<flex class="absolute right-0 top-0 w-[100px] h-[100px] z-50">
		<button on:click={onClick} class="px-6 h-[40px] primaryColor rounded-md textAccent z-50 cursor-pointer">{dark == 'light' ? 'dark' : 'light'}</button>
	</flex>
	<main id="main" tabindex="-1">
		<flex class="absolute h-screen w-screen textPrimary z-0">
			<slot />
		</flex>
	</main>
</div>
