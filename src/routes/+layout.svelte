<script>
	import '../styles.css';
	// import { siteDescription } from '$lib/config';
	import { isMenuOpen } from '$lib/assets/js/store';
</script>

<div class="layout" class:open={$isMenuOpen}>
	<main id="main" tabindex="-1">
		<div class="flex absolute justify-center items-center h-screen w-screen">
			<slot />
		</div>
	</main>
</div>
