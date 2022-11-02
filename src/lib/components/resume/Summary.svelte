<script>
	export let summary;

	import Section from '$lib/components/resume/Section.svelte';
</script>

<Section title="Summary">
	<div class="print:text-sm">
		{summary}
	</div>
</Section>
