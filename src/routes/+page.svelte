<script>
	import MainNav from '$lib/components/MainNav.svelte';
	import { send, receive } from '$lib/crossfadenav';
	// export let ReadMe;
</script>

<svelte:head>
	<title>Quandt</title>
</svelte:head>

<flex class="h-full w-full bgPrimary z-[-1]">
<flexc class="absolute pb-16 gap-4">
	<div
		in:receive={{ key: 'title' }}
		out:send={{ key: 'title' }}
		class="flex justify-center text-5xl z-50"
	>
		Quandt
	</div>
	<MainNav />
</flexc>
</flex>