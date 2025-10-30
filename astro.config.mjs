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
						{ label: 'Ambassador Program', slug: 'start/ambassador'}
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Guides Hub', slug: 'guides/hub' },
						{ label: 'SystemVerilog Guide', slug: 'guides/systemverilog' },
						{ label: 'Allegro Design Entry Using OrCAD Capture', slug: 'guides/alcapture' },
						{ label: 'Allegro Design Entry HDL Front-to-Back Flow', slug: 'guides/hdlftb' },
						{ label: "Allegro Design Entry HDL Basics", slug: 'guides/hdlbasics' }
					],
				},
				{
					label: 'More',
					items: [
						{label:'Contacts & Resources', slug: 'other/resource'},
						{label:'Opportunities', slug: 'other/opport' },
						{label:'Credits', slug:'other/credits'}
					]
				},
			],
		}),
	],
});
