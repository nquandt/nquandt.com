<script>
	import Section from './Section.svelte';
		
	import MilwaukeeToolBullets from './jobs/MilwaukeeToolBullets.svx';
	import SecuraBullets from './jobs/SecuraBullets.svx';

	let talkingPoints = [SecuraBullets, MilwaukeeToolBullets];
</script>

<Section title="Experience" leftAlignTitle={true}>
	{#each talkingPoints as point, i}
		<svelte:component this={point} index={i} />
	{/each}
</Section>
