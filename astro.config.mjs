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
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Setting Up', slug: 'start/setup'},
						{ label: 'Training Courses', slug:'start/training'},
						{ label: 'Ambassador Program', slug: 'start/ambas'}
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
					label: 'More',
					items: [
						{label:'Opportunities', slug: 'other/opport' },
						{label:'Contact Us', slug: 'other/contact'},
						{label:'Credits', slug:'other/credits'}
					]
				},
			],
		}),
	],
});
