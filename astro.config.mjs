// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://clemsoncadenceproject.github.io',
	integrations: [
		starlight({
			title: '',
			logo: {
				src: './src/assets/Clemson_Cadence Logo.png'
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Setting Up', slug: 'start/setup'},
						{ label: 'Training Courses', slug:'start/training'}
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
						{ label: 'SystemVerilog Guide', slug: 'guides/systemverilog' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
