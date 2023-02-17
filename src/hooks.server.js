import { minify } from 'html-minifier';
import { building } from '$app/environment';

const minification_options = {
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: false,
	removeAttributeQuotes: true,
	removeComments: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true
};

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event);

	if (building && response.headers.get('content-type') === 'text/html') {
		return new Response(minify(await response.text(), minification_options), {
			status: response.status,
			headers: response.headers
		});
	}

	return response;
}
