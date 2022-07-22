<script context="module">
	export const load = async ({ url }) => {
		return {
			props: { path: url.pathname }
		};
	};
</script>
<script>
	import '../styles.css';
	import { siteDescription } from '$lib/config';
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { fade } from 'svelte/transition';

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	export let path;
	let blog = false;

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: if (path) {
		if (path.startsWith('/blog')) {
			if (!$currentPage.startsWith('/blog')){
				blog = true;
			}			
		} else {
			blog = false;
		}
		currentPage.set(path);
	}
</script>
<div class="layout" class:open={$isMenuOpen}>
	{#key blog}
			<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
				<div class="flex justify-center items-center h-screen ">
					<slot />
				</div>
			</main>
	{/key}
</div>