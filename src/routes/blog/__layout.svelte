<script context="module">
	export const load = async ({ fetch }) => {
		const postRes = await fetch(`/api/posts.json`)
		const { posts } = await postRes.json()

    // const totalRes = await fetch(`/api/posts/count.json`)
    // const { total } = await totalRes.json()

		return {
			props: { posts }
		}
	}
</script>

<script>
	export let posts;
	//export let total;
	import Header from '$lib/components/Header.svelte';
	import Tree from '$lib/components/Tree.svelte';
	import { fade } from 'svelte/transition';
	import { currentPage } from '$lib/assets/js/store';
	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	let path;
	$: path = $currentPage;


	let tree = {};
	function refresh() {
	    tree = {};
			for (let i of posts) {
				console.log(i);
				for (let c of i.categories) {
					if (!(c in tree)) {
						tree[c] = {
							name: c,
							children: []
						};
					}

					tree[c].children.push({
						name: i.title,
						slug: i.slug
						// children: [
						// 	{
						// 		name:"child"
						// 	},
						// 	{
						// 		name:"child2"
						// 	}
						// ]
					});
				}
			}
	}
	refresh();
</script>


<div class="h-full w-full">
	<Header />
	<Tree {tree}>
		{#key path}
			<div class="flex h-screen" in:fade={transitionIn} out:fade={transitionOut}>
				<slot />
			</div>
		{/key}
	</Tree>
</div>