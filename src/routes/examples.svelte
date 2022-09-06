<script>
	import Header from '$lib/components/Header.svelte';
	import { getFavorites } from '$lib/assets/js/getFavorites.js';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let favoritePromise = null;

	onMount(() => {
		favoritePromise = getFavorites();
	});
</script>

<svelte:head>
	<title>Examples | Quandt</title>
</svelte:head>

<div class="w-full h-screen">
	<Header />
	<div class="flex flex-col justify-center items-center p-16">
		<div>
			This page only exists to show an example of using an Azure Function as an API for a sveltkit
			SSG application.
		</div>
		<div class="flex justify-center p-8 gap-4">
			<div class="flex w-1/2">
				If you open the network tab in dev tools, and hard refresh, you will see a fetch request to
				"GenericCatalogApi". This api exists in my project as an Azure Function, with a connection
				to a Storage Account table. Similarily you could host any api on a server or serverless and
				point at that instead. I've explicitly used svelte's `onMount` function to ensure this code
				will only be executed client-side. During compilation for SSR/SSG the svelte compiler
				actually tree-shakes any code within this method, i.e. it doesn't even exist as far as the
				@adapter-static is concerned.
			</div>
			<div class="flex flex-col items-center w-1/2 border-2 py-20">
				{#if favoritePromise}
					{#await favoritePromise}
						<div out:fade>LOADING</div>
					{:then favorites}
						<div in:fade>
							{#each favorites as fav}
								<div>{fav.name}</div>
							{/each}
						</div>
					{:catch}
						<div>Error</div>
					{/await}
				{/if}
			</div>
		</div>
	</div>
</div>
