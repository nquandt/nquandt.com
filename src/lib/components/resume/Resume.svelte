<script>
	export let config;

	import { fade } from 'svelte/transition';

	import Favorites from '$lib/components/resume/Favorites.svelte';
	import Skills2 from '$lib/components/resume/Skills2.svelte';
	import Exprience from '$lib/components/resume/Exprience.svelte';
	import ResumeHeaders from '$lib/components/resume/ResumeHeaders.svelte';
	import TwoThirdsColumns from '$lib/components/TwoThirdsColumns.svelte';
	import Summary from '$lib/components/resume/Summary.svelte';
	import Education from '$lib/components/resume/Education.svelte';
	import Projects from '$lib/components/resume/Projects.svelte';


</script>

<svelte:head>
	<title>Quandt | Resum&eacute;</title>
</svelte:head>

<section
	transition:fade
	class="absolute bgPrimary flex flex-col items-center w-full md:p-12 p-3 md:pb-12 pb-32 overflow-auto print:overflow-y-hidden h-[calc(100vh-100px)] print:h-full"
>
	<div class="border-[1px]">
		<div id="section-to-print" class="">
			<div class="flex w-full justify-center print:aspect-[17/22] print:overflow-hidden">
				<div class="flex flex-col max-w-[900px]">
					<ResumeHeaders {...config} />
					<TwoThirdsColumns>
						<span slot="column-one" class="flex flex-col gap-6 print:gap-4">
							<Summary {...config} />
							<Education />							
							<!-- <Strengths />								 -->
							<Skills2 />
							<Favorites />
						</span>
						<span slot="column-two" class="flex flex-col gap-6 print:gap-4">
							<Exprience />
							<Projects />							
						</span>
					</TwoThirdsColumns>
				</div>
			</div>
		</div>
	</div>
</section>
