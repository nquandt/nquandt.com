<script>
	import Section from './Section.svelte';
	import TalkingPoint from './TalkingPoint.svelte';

	let talkingPoints = [
        {
			title: 'Senior Software Engineer',
			company: 'Milwaukee Tool Inc.',
			date: 'August 2021 - Present',
			bullets: [
				'Developing enterprise level solutions through the use of Kubernetes, .NET, Svelte, and Sitecore.'
			]
		},
		{
			title: 'Sales Analyst',
			company: 'Jensen Equipment Inc.',
			date: 'January 2019 - August 2021',
			bullets: [
				'Maintain product data and costs for thousands of records in ERP software from vendors such as Snap-On, Ridgid, Milwaukee, etc.',
				'Analyze ecommerce seller fees and shipping costs to set competitive retail prices to increase sales while maximizing profitability.',
				'Design and implement an interface for SQL Database using C# to replace old interface and export vendor, customer, and item records for migration to a new ERP system.',
				'Implement Amazon REST API(Amazon MWS) resources in order to improve inventory management and order analysis.'
			]
		},
		{
			title: 'CAD/CNC Programmer',
			company: 'United Tool Llc.',
			date: 'September 2018 - August 2021',
			bullets: [
				'Design and create tooling to manufacture customer parts for both rapid prototyping and large production run items.',
				'Program, setup, and operate CNC Vertical Mills and CNC Turning Centers to produce parts per customer specification.',
				"Perform inspection of manufactured parts, following dimension and tolerances from customer's detailed drawing."
			]
		}
	];
</script>

<Section title="Experience" leftAlignTitle={true}>
	{#each talkingPoints as point}
		<TalkingPoint title={point.title} company={point.company} date={point.date}>
			{#each point.bullets as bullet}
				<li>{bullet}</li>
			{/each}
		</TalkingPoint>
	{/each}	
</Section>
