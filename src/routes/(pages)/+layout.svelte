<script>
	import Header from '$lib/components/Header.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="absolute w-full h-screen">
	<Header />
	<span class="w-full" transition:fade>
		<div class="bg-gray-800 absolute w-full h-[100px] top-0 left-0 z-[-1]" />
		<slot />
	</span>
</div>
