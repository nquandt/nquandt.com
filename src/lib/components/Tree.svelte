

<script>
	export let tree;
	tree ||= {};
	import Branch from '$lib/components/Branch.svelte';
	import { fly, fade } from 'svelte/transition';

	const transitionIn = { x: -200, delay: 150, duration: 150 };
	const transitionOut = { x: -200, duration: 100 };

	
</script>

<div class="flex h-screen " in:fly={transitionIn} out:fly={transitionOut}>
	<div class="left-container min-w-[400px] bg-slate-400 h-full">
		{#each Object.values(tree) as branch}
			<Branch {branch}/>
		{/each}
	</div>

	<div class="content-container bg-slate-50 h-full w-full">
		<slot />
	</div>
</div>
