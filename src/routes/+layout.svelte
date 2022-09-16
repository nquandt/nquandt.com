<script>
	import '../styles.css';
	// import { siteDescription } from '$lib/config';
	import { isMenuOpen } from '$lib/assets/js/store';
</script>

<div class="layout" class:open={$isMenuOpen}>
	<main id="main" tabindex="-1">
		<flex class="absolute h-screen w-screen textPrimary z-0">
			<slot />
		</flex>
	</main>
</div>
