<script>
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';

	export let href;

	$: isCurrentPage = $currentPage.startsWith(href);

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false);
		}
	};
</script>

<div>
	<a
		{href}
		on:click={maybeCloseMenu}
		aria-current={isCurrentPage ? 'page' : false}
	>
  <div class="flex justify-center items-center w-[80px] h-[80px] bg-slate-300">
		<slot />
  </div>
	</a>
</div>
