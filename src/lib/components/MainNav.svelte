<script>
	import { navItems } from '$lib/config';
	import { isMenuOpen } from '$lib/assets/js/store';
	import NavItem from './NavItem.svelte';
	// import HamburgerMenuButton from './HamburgerMenuButton.svelte'
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav flex" class:open={$isMenuOpen}>
	<div class="flex gap-4">
		{#each navItems as page}
			<NavItem href={page.route}>
				{@html page.title}
			</NavItem>
		{/each}
	</div>
	<!-- <HamburgerMenuButton closeOnly="true" /> -->
</nav>
