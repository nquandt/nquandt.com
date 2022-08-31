<script>
	import { variables } from '$lib/variables';
	import Header from '$lib/components/Header.svelte';
    import HeaderIcon from '$lib/components/resume/HeaderIcon.svelte';
	import Section from '$lib/components/resume/Section.svelte';
	import Strengths from '$lib/components/resume/Strengths.svelte';
	import TalkingPoint from '$lib/components/resume/TalkingPoint.svelte';

    import EmailSvg from '$lib/components/svg/EmailSVG.svelte';
    import PhoneSvg from '$lib/components/svg/PhoneSVG.svelte';
    import LocationSvg from '$lib/components/svg/LocationSVG.svelte';
import Skills from '$lib/components/resume/Skills.svelte';
import Exprience from '$lib/components/resume/Exprience.svelte';
</script>

<svelte:head>
	<title>Quandt | Resum&eacute;</title>
</svelte:head>

<div class="w-full h-screen">
	<Header />
	<div class="flex flex-col w-full items-center md:p-12 p-3 overflow-y-scroll h-[calc(100vh-100px)]">
		<div class="border-[1px]">
			<div id="section-to-print" class="">
				<div class="flex w-full justify-center print:aspect-[17/22] print:overflow-hidden">
					<div class="flex flex-col max-w-[900px]">
						<div class="relative flex-shrink-0 overflow-hidden border-b-2 border-gray-300">
							<div class="top-0 left-0 w-full h-full flex justify-center items-center absolute">
								<picture class="w-full h-full">
									<source media="(max-width: 768px)" srcset="/resume-780w.webp">
									<source media="(max-width: 1400px)" srcset="/resume-1400w.webp">
									<source media="(max-width: 1920px)" srcset="/resume-1920w.webp">
									<source media="(min-width: 1921px)" srcset="/resume-3840w.webp">
									<img class="object-cover w-full h-full opacity-60" src="/resume-3840w.webp" alt="header background" />
								</picture>
							</div>
							<div class="relative flex w-full justify-center md:px-8 py-8">
								<div class="flex md:flex-row flex-col w-full items-center md:justify-between md:border-x-[1px] border-gray-400 md:px-4">
									<div class="flex flex-col gap-2 py-4 justify-between md:items-start items-center">
										<div class="text-3xl uppercase tracking-[.3em] text-gray-400 font-semibold">
											Nicholas
										</div>
										<div class="text-5xl uppercase tracking-[.4em] font-bold">Quandt</div>
									</div>
									<div class="flex flex-col items-end justify-between text-gray-400 fill-gray-400 font-semibold py-4">
										<HeaderIcon text="Tempe, AZ" glyph={EmailSvg}/>
                                        <HeaderIcon text="{variables.phone}" glyph={PhoneSvg}/>
                                        <HeaderIcon text="{variables.email}" glyph={LocationSvg}/>										
									</div>
								</div>
							</div>
						</div>
						<div class="px-4 gap-4 py-4 flex md:flex-nowrap flex-wrap">
							<div class="md:w-1/3 flex flex-col gap-4 print:justify-between">
								<Section title="Profile">
									<div class="print:text-xs">
										Master's student and aspiring software developer in pursuit of professional
										experience to apply knowledge in both computational and mathematical sciences
										with an interest in back-end and algorithm development.
									</div>
								</Section>
								<Section title="Eductation">
									<div class="flex flex-col">
										<div class="print:text-sm font-bold">Marquette University</div>
										<div class="print:text-xs text-sm text-gray-400">Milwaukee, WI USA</div>
										<div class="print:text-xs text-sm">2021 / M.S. in Computer Science</div>
										<div class="print:text-xs text-sm">2019 / B.S. in Mathematics</div>
									</div>
								</Section>
								<Strengths />
								<Skills />								
							</div>
							<div class="md:w-2/3 flex flex-col">
								<Exprience></Exprience>
								<Section title="Projects" leftAlignTitle={true}>
									<TalkingPoint
										title="McMaster Addin For Inventor | C#"
										company="https://github.com/nquandt/mafi"
										date="December 2019"
									>
										<li>Interop Add-In for Autodesk Inventor developed with C#.</li>
										<li>
											Implements CEFSharp to embed a chromium based browser for both user
											interaction and headless methods.
										</li>
										<li>
											Utilizes chromium's ability to bidirectionally invoke commands in the parent
											C# application from page-level javascript. Script injection is used to link
											commands between the webpage and application.
										</li>
										<li>Primary UI utilizes XAML WinForms.</li>
										<li>
											Embedded assemblies are used to minimize number of files needed to install.
											These are loaded into memory at runtime to maintain version correctness.
										</li>
									</TalkingPoint>
									<TalkingPoint
										title="Parallel Functions | C (gcc)"
										company="https://github.com/nquandt/parallel-functions"
										date="April 2021"
									 class="print:hidden">
									<li>Parallel implementations of mathematical functions taken over a set
									of values.</li>
									<li>Optimized for <span class="font-mono">WORD</span> sized values.</li>
									<li>Example <span class="font-mono">>_: setgcd 42 91 77 140</span><span class="pl-8">output: <span class="font-mono">7</span></span></li>
									</TalkingPoint>
								</Section>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
