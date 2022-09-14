<script>
	import MainNav from './MainNav.svelte';
	import NavItem from './NavItem.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '$lib/config';
	import { send, receive } from '$lib/crossfadenav';
</script>

<header class="flex justify-center gap-4 text-white items-center h-[100px] z-10 print:hidden">
	<!-- <a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
    Skip to main content
  </a> -->

	<div in:receive={{ key: 'title' }} out:send={{ key: 'title' }}>
		<NavItem href="/">{siteTitle}</NavItem>
	</div>

	<!-- <HamburgerMenuButton /> -->
	<MainNav />
</header>
