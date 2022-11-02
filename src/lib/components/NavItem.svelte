<script>
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { send, receive } from '$lib/crossfadenav';
	export let href;

	$: isCurrentPage = $currentPage.startsWith(href);

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false);
		}
	};
</script>

<div in:receive={{ key: href }} out:send={{ key: href }}>
	<a
		class="textPrimary"
		{href}
		on:click={maybeCloseMenu}
		aria-current={isCurrentPage ? 'page' : false}
	>
		<flex class="px-4 h-[40px] primaryColor rounded-md textAccent z-50">
			<slot />
		</flex>
	</a>
</div>
