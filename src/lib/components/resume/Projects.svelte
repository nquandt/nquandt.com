<script>
    import Section from "$lib/components/resume/Section.svelte";
    import GithubSvg from "$lib/components/svg/GithubSVG.svelte";

    import NQuandtProject from './projects/nquandtcom.svx';
    import quandtendpoints from './projects/quandtendpoints.svx';
    import mcmaster from './projects/mcmasteraddin.svx';
	// import parallel from './projects/parallelgcc.svx';

	//let talkingPoints = [NQuandtProject, JensenBullets, UnitedToolBullets];
</script>

<Section title="Projects" icon={GithubSvg} leftAlignTitle={true}>
    <svelte:component this={NQuandtProject}/>
    <svelte:component this={quandtendpoints}/>
    <svelte:component this={mcmaster}/>
    <!-- <svelte:component this={parallel}/>     -->
</Section>