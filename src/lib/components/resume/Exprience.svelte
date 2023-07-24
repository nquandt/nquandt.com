<script>
	import Section from './Section.svelte';
		
	import MilwaukeeToolBullets from './jobs/MilwaukeeToolBullets.svx';
	import JensenBullets from './jobs/JensenBullets.svx';

	let talkingPoints = [MilwaukeeToolBullets, JensenBullets];
</script>

<Section title="Experience" leftAlignTitle={true}>
	{#each talkingPoints as point, i}
		<svelte:component this={point} index={i} />
	{/each}
</Section>
