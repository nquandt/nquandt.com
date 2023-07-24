import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or  used as pages)
	extensions: ['.svelte', '.md', '.svx'],

	preprocess: [
		preprocess({
			postcss: true,
			// scss: {
			// 	includePaths: ['theme']				
			// },
		}),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.svx', '.md'],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
				[rehypeExternalLinks, { target: '_blank' }]
			]
		})
	],

	kit: {
		inlineStyleThreshold: 8192,
		adapter: adapter()
	}
};

export default config;
