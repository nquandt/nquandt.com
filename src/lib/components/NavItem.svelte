<script>
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import {send, receive} from '$lib/crossfadenav';
	export let href;

	$: isCurrentPage = $currentPage.startsWith(href);

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false);
		}
	};
</script>

<div in:receive={{key: href}} out:send={{key: href}}>
	<a
		{href}
		on:click={maybeCloseMenu}
		aria-current={isCurrentPage ? 'page' : false}
	>
  <div class="flex justify-center items-center w-[100px] h-[40px] bg-slate-600 rounded-md text-white">
		<slot />
  </div>
	</a>
</div>
