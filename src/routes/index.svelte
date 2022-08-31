<script>
	import MainNav from '$lib/components/MainNav.svelte';
	import {send, receive} from '$lib/crossfadenav';
	// export let ReadMe;
</script>

<svelte:head>
	<title>Quandt</title>
</svelte:head>

<div class="flex flex-col justify-center items-center pb-16 gap-4">
	<div in:receive={{key: "title"}} out:send={{key: "title"}} class="flex justify-center text-5xl">Quandt</div>
	<MainNav />
</div>