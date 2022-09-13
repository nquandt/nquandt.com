<script>
	import Section from './Section.svelte';
	import TalkingPoint from './TalkingPoint.svelte';
	import MilwaukeeToolBullets from './jobs/MilwaukeeToolBullets.svx';
	import JensenBullets from './jobs/JensenBullets.svx';
	import UnitedToolBullets from './jobs/UnitedToolBullets.svx';

	let talkingPoints = [MilwaukeeToolBullets, JensenBullets, UnitedToolBullets];
</script>

<Section title="Experience" leftAlignTitle={true}>
	{#each talkingPoints as point, i}
		<svelte:component this={point} index={i} />
	{/each}
</Section>
