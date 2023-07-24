<script>
	export let firstName;
	export let lastName;
	export let github;
	export let website;
	export let location;

	import { Divider } from 'svelte-materialify';

	import HomeSvg from '$lib/components/svg/HomeSVG.svelte';
	import WebSvg from '$lib/components/svg/WebSVG.svelte';
	import HeaderIcon from '$lib/components/resume/HeaderIcon.svelte';
	import GithubSvg from '$lib/components/svg/GithubSVG.svelte';
	import EmailSvg from '$lib/components/svg/EmailSVG.svelte';
	import PhoneSvg from '$lib/components/svg/PhoneSVG.svelte';
	import LocationSvg from '$lib/components/svg/LocationSVG.svelte';
</script>

<div class="relative flex-shrink-0 overflow-hidden border-b-2 border-gray-300">
	<div class="top-0 left-0 w-full h-full flex justify-center items-center absolute">
		<picture class="w-full h-full opacityDuller">
			<source media="(max-width: 768px)" srcset="/resume-780w.webp" />
			<source media="(max-width: 1400px)" srcset="/resume-1400w.webp" />
			<source media="(max-width: 1920px)" srcset="/resume-1920w.webp" />
			<source media="(min-width: 1921px)" srcset="/resume-3840w.webp" />
			<img
				class="object-cover w-full h-full opacity-60"
				src="/resume-3840w.webp"
				alt="header background"
			/>
		</picture>
	</div>
	<div class="relative flex w-full justify-center md:px-8 py-8 print:py-4">
		<div
			class="print:hidden flex md:flex-row flex-col w-full items-center md:justify-between md:border-x-[1px] border-gray-400 md:px-4"
		>
			<div class="flex flex-col gap-2 py-4 justify-between md:items-start items-center">
				<div class="text-3xl uppercase tracking-[.3em] textSecondary font-semibold">
					{firstName}
				</div>
				<div class="text-5xl uppercase tracking-[.4em] font-bold">{lastName}</div>
			</div>
			<div
				class="flex flex-col items-end justify-between textSecondary fillSecondary font-semibold py-4"
			>
				<HeaderIcon text="https://www.{website}" glyph={WebSvg} />
				<HeaderIcon text="https://www.github.com/{github}" glyph={GithubSvg} />
				<HeaderIcon text={location} glyph={HomeSvg} />
				<!-- <HeaderIcon text="{variables.phone}" glyph={PhoneSvg}/>
                    <HeaderIcon text="{variables.email}" glyph={EmailSvg}/> -->
			</div>
		</div>
		<div
			class="hidden print:flex flex-col w-full items-center md:justify-between md:border-x-[1px] border-gray-400 md:px-4"
		>
			<div class="flex flex-col gap-2 py-2 justify-between items-center">
				<div class="text-3xl uppercase tracking-[.3em] textSecondary font-semibold">
					{firstName}
					{lastName}
				</div>
			</div>
			<div class="flex items-center gap-4 justify-between textSecondary fillSecondary font-semibold py-2">
				<a href="https://www.{website}">{website}</a>
				<Divider vertical />
				<a href="https://www.github.com/{github}">github.com/{github}</a>
				<Divider vertical />
				{location}
				<!-- <HeaderIcon text="{variables.phone}" glyph={PhoneSvg}/>
                    <HeaderIcon text="{variables.email}" glyph={EmailSvg}/> -->
			</div>
		</div>
	</div>
</div>
