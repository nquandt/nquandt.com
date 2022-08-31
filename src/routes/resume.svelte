<script>
	import { variables } from '$lib/variables';
	import Header from '$lib/components/Header.svelte';
    import HeaderIcon from '$lib/components/resume/HeaderIcon.svelte';
	import Section from '$lib/components/resume/Section.svelte';
	import Strengths from '$lib/components/resume/Strengths.svelte';
	import Favorites from '$lib/components/resume/Favorites.svelte';
	import TalkingPoint from '$lib/components/resume/TalkingPoint.svelte';

	import GithubSvg from '$lib/components/svg/GithubSVG.svelte';
    import EmailSvg from '$lib/components/svg/EmailSVG.svelte';
    import PhoneSvg from '$lib/components/svg/PhoneSVG.svelte';
    import LocationSvg from '$lib/components/svg/LocationSVG.svelte';
import Skills from '$lib/components/resume/Skills.svelte';
import Exprience from '$lib/components/resume/Exprience.svelte';
import HomeSvg from '$lib/components/svg/HomeSVG.svelte';
import WebSvg from '$lib/components/svg/WebSVG.svelte';
</script>

<svelte:head>
	<title>Quandt | Resum&eacute;</title>
</svelte:head>

<div class="w-full h-screen">
	<Header />
	<div class="flex flex-col w-full items-center md:p-12 p-3 md:pb-12 pb-32 overflow-y-scroll h-[calc(100vh-100px)]">
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
										<HeaderIcon text="https://www.nquandt.com" glyph={WebSvg}/>
										<HeaderIcon text="https://www.github.com/nquandt" glyph={GithubSvg}/>
										<HeaderIcon text="Tempe, AZ" glyph={HomeSvg}/>
                                        <!-- <HeaderIcon text="{variables.phone}" glyph={PhoneSvg}/>
                                        <HeaderIcon text="{variables.email}" glyph={EmailSvg}/> -->
									</div>
								</div>
							</div>
						</div>
						<div class="px-6 gap-6 py-6 flex md:flex-nowrap flex-wrap">
							<div class="md:w-1/3 flex flex-col gap-6 print:gap-4">
								<Section title="Summary">
									<div class="print:text-sm">
										Full-Stack Developer, with an affinity for object-oriented development and algorithms, in pursuit of learning, collaboration, community, and continuous professional growth.
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
								<Favorites />
								<!-- <Strengths />								 -->
								<Skills />																
							</div>
							<div class="md:w-2/3 flex flex-col gap-6">
								<Exprience></Exprience>
								<Section title="Projects" icon={GithubSvg} leftAlignTitle={true}>
									<TalkingPoint
										title="nquandt.com"
										company="https://github.com/nquandt/nquandt.com" 
										date="Current">
										<ul>
										<li>
											All of the code for my website is available on github.
										</li>										
										<li>
											I'm utilizing svelte as an FE framework, and vite for building as SSG.
										</li>
									</ul>
									</TalkingPoint>
									<TalkingPoint
										title="Quandt.Endpoints"
										company="https://github.com/nquandt/Quandt/tree/master/src/Endpoints/Endpoints/src" 
										date="Current">
										<ul>
										<li>
											This is an opinionated implementation of endpoints for Minimal API (.NET 6), where one route equates to one file (endpoint).
										</li>
										<li>
											It intends to abstract the registration process of <span class="font-mono">app.MapMethod(...)</span> by utilizing a standard pattern for an "Endpoint".
										</li>
										<li>
											This utilizes a new C# feature, static abstract generics to create a fluent api for creating endpoints for various needs.
										</li>
										<li>
											The endpoints provide full dependency resolution via typical constructor injection.
										</li>										
										<li>
											Serialization is abstracted by allowing a user to inject an <span class="font-mono">IJsonSerializer</span> via dependency injection to handle inbound and outbound serialization.
										</li>
										<li>
											A <a href="https://github.com/nquandt/Quandt/tree/master/example/NET6">.NET 6 example project</a> utilizing this package is available on github under the "examples" folder.
										</li>
										</ul>
									</TalkingPoint>
									<TalkingPoint
										title="McMaster Addin For Inventor | C#"
										company="https://github.com/nquandt/mafi"
										date="December 2019"
										class="print:hidden"
									>
									<ul>
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
									</ul>
									</TalkingPoint>
									<TalkingPoint
										title="Parallel Functions | C (gcc)"
										company="https://github.com/nquandt/parallel-functions"
										date="April 2021"
									 class="print:hidden">
									 <ul>
									<li>Parallel implementations of mathematical functions taken over a set
									of values.</li>
									<li>Optimized for <span class="font-mono">WORD</span> sized values.</li>
									<li>Example <span class="font-mono">>_: setgcd 42 91 77 140</span><span class="pl-8">output: <span class="font-mono">7</span></span></li>
								</ul>
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
