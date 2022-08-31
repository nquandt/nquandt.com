<script>
	export {clazz as class};
	let clazz = null;
	export let title;
	export let date;
	export let company;
</script>

<div class="flex flex-col w-full {clazz}">
	<div class="flex justify-between item">
		<div class="flex flex-col">
			<div class="text-xl font-bold">{title}</div>
            {#if company.startsWith('https://')}
            <a href={company} class="underline hover:text-blue-500 transition-colors" target="_blank">
                <div class="text-md font-semibold">{company}</div>
            </a>
            {:else}
			<div class="text-md font-semibold">{company}</div>
            {/if}
		</div>
		<div class="text-gray-400">{date}</div>
	</div>
	<div class="w-full my-2">
		<ul class="list-list text-sm print:text-xs">
			<slot />
		</ul>
	</div>
</div>
