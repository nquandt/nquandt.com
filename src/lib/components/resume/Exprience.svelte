<script>
	import Section from './Section.svelte';
		
	import MilwaukeeToolBullets from './jobs/MilwaukeeToolBullets.svx';
	import ConsultingBullets from './jobs/ConsultingBullets.svx';

	let talkingPoints = [MilwaukeeToolBullets, ConsultingBullets];
</script>

<Section title="Experience" leftAlignTitle={true}>
	{#each talkingPoints as point, i}
		<svelte:component this={point} index={i} />
	{/each}
</Section>
