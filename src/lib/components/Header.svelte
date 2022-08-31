<script>
  import MainNav from './MainNav.svelte'
  import NavItem from './NavItem.svelte'
  import HamburgerMenuButton from './HamburgerMenuButton.svelte'
  import { siteTitle } from '$lib/config'
  import {send, receive} from '$lib/crossfadenav';

  const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>


<header class="flex justify-center gap-4 bg-gray-800 text-white items-center h-[100px]">
  <!-- <a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
    Skip to main content
  </a> -->
  
  <div in:receive={{key: "title"}} out:send={{key: "title"}}>
    <NavItem href="/">{siteTitle}</NavItem>
  </div>
  
  
  <!-- <HamburgerMenuButton /> -->
  <MainNav />

</header>