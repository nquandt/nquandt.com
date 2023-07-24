<script>
	export { clazz as class };
	let clazz = '';
	export let title;
	export let date;
	export let company;
	export let url;
	export let index;
	export let print;
</script>

<div class="flex flex-col w-full {clazz} {print ? '' : 'print:hidden'}">
	<div class="flex justify-between item">
		<div class="flex flex-col">
			{#if company.startsWith('https://')}
				<a class="textPrimary" href={company} target="_blank">
					<div class="text-xl font-bold">{title}</div>
				</a>
			{:else}
				<div class="text-xl font-bold">{title}</div>
				{#if url}
					<a class="textPrimary" href={url} target="_blank">
						<div class="text-md font-semibold">{company}</div>
					</a>
				{:else}
					<div class="text-md font-semibold">{company}</div>
				{/if}
			{/if}
		</div>
		<div class="textSecondary text-end">{date}</div>
	</div>
	<div class="w-full pt-2">
		<slot />
	</div>
</div>
