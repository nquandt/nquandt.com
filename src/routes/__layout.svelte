<script context="module">
	export const load = async ({ url }) => {
		return {
			props: { path: url.pathname }
		};
	};
</script>
<script>
	import '../styles.css';
	// import { siteDescription } from '$lib/config';
	import {  currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { fade } from 'svelte/transition';

	const transitionIn = { delay: 300, duration: 200 };
	const transitionOut = { duration: 200 };

	export let path;
	let refresh = '';

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: if (path) {
		if (($currentPage == '/' && path != '/') || ($currentPage != '/' && path == '/')) {
			refresh = path;
		}		
		currentPage.set(path);
	}
</script>
<div class="layout" class:open={$isMenuOpen}>
	{#key refresh}
			<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
				<div class="flex absolute justify-center items-center h-screen w-screen">
					<slot />
				</div>
			</main>
	{/key}
</div>