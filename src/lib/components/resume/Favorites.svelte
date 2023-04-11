<script>
	import Section from './Section.svelte';
	let favorites = [
		{
			display: 'ReadableExpressions',
			url: 'https://github.com/agileobjects/ReadableExpressions',
			description: 'Convert Linq Expressions to readable c# code.',
			ecosystem: '.NET'
		},
		{
			display: 'NUglify',
			url: 'https://github.com/trullock/NUglify',
			description: 'A JS, CSS, and HTML minifier for .NET.',
			ecosystem: '.NET',
			class: 'print:hidden'
		},
		{
			display: 'YARP',
			url: 'https://github.com/microsoft/reverse-proxy',
			description: 'A reverse-proxy in C#',
			ecosystem: '.NET',			
		},
		{
			display: 'Astro',
			url: 'https://astro.build/',
			description: 'A new framework for building SSG and SSR sites with various FE frameworks.',
			ecosystem: 'The Edge',
			class: 'print:hidden'
		},
		{
			display: 'Svelte',
			url: 'https://github.com/sveltejs/svelte',
			description: 'My FE framework of choice. ',
			ecosystem: 'Javascript',
			class: 'print:hidden'
		},
		{
			display: 'Rollup',
			url: 'https://github.com/rollup/rollup',
			description: 'An all purpose bundler for TS and JS.',
			ecosystem: 'Javascript'
		}
	];
</script>

<Section title="Favorites">
	{#each favorites as fav}
		<div class={fav.class}>
			<div class="flex justify-between">
				<a class="textPrimary" href={fav.url} target="_blank">
					<div class="text-md print:text-sm">{fav.display}</div>
				</a>
				<div class="text-sm print:text-xs textSecondary">{fav.ecosystem}</div>
			</div>
			<div class="text-sm print:text-xs">{fav.description}</div>
		</div>
	{/each}
</Section>
