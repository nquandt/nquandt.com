<script>
	import Section from './Section.svelte';
    	
	let skills = [
		{
			display: '.NET',
			value: 6,
			details: ['Dependency Injection / IoC', 'SOLID', 'Core vs. Framework', 'ASP.NET']
		},
		{
			display: 'JS/HTML/CSS',
			value: 6,
			details: ['Node vs. Browser', 'Async await, promises, and the event loop']
		},
		{
			display: 'Svelte, Vue, React',
			value: 5,
			details: ['Bundling / Splitting', 'Build Process', 'SSG / SSR', 'Rollup']
		},
		{
			display: 'Azure Services',
			value: 3,
			details: [
				'AKS',
				'App Gateway',
				'RBAC',
				'Key Vault',
				'Subscription vs. Resource Group',
				'Network Security Groups',
				'Azure Container Registry'
			]
		},
		{
			display: 'Kubernetes',
			value: 4,
			details: [
				'Helm',
				'Nginx, Ingress, Reverse Proxy',
				'Service vs. Deployment',
				'Pod vs. Container',
				'Replica Sets',
				'Health Checks',
				'Secrets',
				'Container Registry'
			]
		},
		{
			display: 'Git/DevOps',
			value: 5,
			details: [
				'Pipelines',
				'Releases',
				'Repositories',
				'GitFlow',
				'Merge Conflict Resolution',
				'Git CLI'
			]
		},
		{
			display: 'Sitecore',
			value: 4,
			details: [
				'Sitecore 10.0',
				'JSS',
				'Microservice seperated architecture',
				'Rendering Host vs CD vs CM'
			]
		},		
		{
			display: 'Solr',
			value: 3,
			details: ['Admin API', 'SearchStax', 'Cores/Collections/Shards']
		},
		{
			display: 'Python',
			value: 3,
			details: ['pandas', 'numpy']
		},
		{
			display: 'C',
			value: 3,
			details: ['GCC', 'PInvoke from .NET']
		},
		{
			display: 'Agile',
			value: 4
		},
	];

	function fill(value) {
		switch (value) {
			case 1:
				return 'before:w-1/6';
			case 2:
				return 'before:w-1/3';
			case 3:
				return 'before:w-1/2';
			case 4:
				return 'before:w-2/3';
			case 5:
				return 'before:w-5/6';
			case 6:
				return 'before:w-full';
			default:
				return '';
		}
	}

	let tips = [];
	let detailDiv = null;
    let divTimeout = null;
	function onEnter(e, skill) {
        clearTimeout(divTimeout);		
		if (skill?.details) {
			tips = skill.details || [];
			detailDiv.style.top = e.target.offsetTop + e.target.offsetHeight / 2 + 'px';			
			delete detailDiv.dataset.state;
		}
	}

	function onLeave(skill) {
        divTimeout = setTimeout(() => {
            detailDiv.dataset.state = 'opaque';
        }, 400);	
	}
</script>

<Section title="Technical Skills">
	<div class="relative flex flex-col">
		<div
			data-state="opaque"
			bind:this={detailDiv}
			on:mouseenter={(e) => onEnter(e)}
			on:mouseleave={(e) => onLeave(e)}
			class="hidden absolute z-10 md:flex flex-col left-full -translate-y-1/2 p-4 transition-top-opacity opacity-100 duration-[.4s]"
		>
			<div class="relative p-2 bg-white rounded-md border-2 border-gray-300 after:content-[''] after:absolute after:top-1/2 after:left-0 after:-translate-x-full after:-translate-y-1/2 after:border-[12px] after:border-r-white after:border-l-transparent after:border-y-transparent before:content-[''] before:absolute before:top-1/2 before:left-0 before:-translate-x-full before:-translate-y-1/2 before:border-[15px] before:border-r-gray-300 before:border-l-transparent before:border-y-transparent">
				{#each tips as tip}
					<div class="whitespace-nowrap">{tip}</div>
				{/each}
			</div>
		</div>
		{#each skills as skill, i}
			<div>
				<div
					on:mouseenter={(e) => onEnter(e, skill)}
					on:mouseleave={(e) => onLeave(e, skill)}
					class="flex justify-between items-center py-1"
				>
					<div class="text-sm print:text-xs">{skill.display}</div>
					<div
						class="relative h-3 w-1/2 rounded-full bg-gray-200 before:content-[''] {i % 2 == 0
							? 'before:bg-gray-600'
							: 'before:bg-gray-400'} before:absolute before:left-0 before:top-0 before:bottom-0 {fill(
							skill.value
						)} before:rounded-full"
					/>
				</div>
			</div>
		{/each}
	</div>
</Section>
