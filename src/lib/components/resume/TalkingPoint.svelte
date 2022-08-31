<script>
	export {clazz as class};
	let clazz = '';
	export let title;
	export let date;
	export let company;
	export let url;
	export let index;
</script>

<div class="flex flex-col w-full {clazz}">
	<div class="flex justify-between item">
		<div class="flex flex-col">
			
            {#if company.startsWith('https://')}
            <a href={company} target="_blank">
                <div class="text-xl font-bold">{title}</div>
            </a>
            {:else}
			<div class="text-xl font-bold">{title}</div>
			{#if url}
			<a href={url}  target="_blank">
				<div class="text-md font-semibold">{company}</div>
			</a>
			{:else}
			<div class="text-md font-semibold">{company}</div>
			{/if}
            {/if}
		</div>
		<div class="text-gray-400 text-end">{date}</div>
	</div>	
	<div class="w-full my-2 {index >= 1 ? "print:hidden" : ""}">		
		<slot />		
	</div>
</div>
