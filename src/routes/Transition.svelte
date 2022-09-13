<script>
	import { fade } from 'svelte/transition';
	export let refresh;

	const transitionIn = { delay: 300, duration: 200 };
	const transitionOut = { duration: 200 };
</script>

{#key refresh}
	<slot />
{/key}
