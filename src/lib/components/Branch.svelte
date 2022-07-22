<script>
	export let branch;

	let open = 0;

    function openPost(e){
        console.log(branch.name);
    }
</script>

<div class="flex flex-col">
	<div class="flex items-center">
        <div class="w-4 cursor-pointer">
            {#if branch.children?.length}
                <div on:click={() => (open ^= 1)} class="flex w-full justify-center">{open ? '-' : '+'}</div>
            {/if}
        </div>
        {#if branch.slug}
		    <a class="italic" href="/blog/{branch.slug}">{branch.name}</a>
        {:else}
            <div>{branch.name}</div>
        {/if}
	</div>
	<div class="pl-4">
		{#if open}
			{#each branch.children as child}
				<svelte:self branch={child} />
			{/each}
		{/if}
	</div>
</div>
