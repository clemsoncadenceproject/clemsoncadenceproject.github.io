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
						// New Alan Note (10/18/25) added sections for each guide type
						// Place your guide entires under their respective section at your discretion
						// very good alan... >:) -ian
						// also do you know if we can make the right sidebar smaller? kinda chunky
						{ label: 'Guides Hub', slug: 'guides/hub' },
						{
							label: 'Analog',
							collapsed: true,
							items: [
								{ label: 'Virtuoso Palmetto Cluster Startup', slug: 'guides/analog/virtuosostartup' },
								{ label: 'Virtuoso Schematics & Sims', slug: 'guides/analog/virtuososs' },
								{ label: 'DRC & LVS with Pegasus', slug: 'guides/analog/pegasusdrclvs' }
							],
						},
						{
							label: 'Digital',
							collapsed: true,
							items: [
								{ label: 'SystemVerilog Guide', slug: 'guides/digital/systemverilog' }
							],
						},
						{
							label: 'PCB',
							collapsed: true,
							items: [
								{ label: 'Allegro Design Entry Using OrCAD Capture', slug: 'guides/pcb/alcapture' },
								{ label: 'Allegro PCB Editor Basics', slug: 'guides/pcb/allegrobasics' },
								{ label: 'Allegro PCB Editor Intermediate Techniques', slug: 'guides/pcb/allegrointermediate' },
								{ label: 'OrCAD Capture Constraint Manager PCB Flow', slug: 'guides/pcb/constraintmanager' },
								{ label: 'Allegro System Capture Front-to-Back Flow', slug: 'guides/pcb/syscapftb' },
								{ label: 'Allegro Design Entry HDL Basics', slug: 'guides/pcb/hdlbasics' },
								{ label: 'Allegro Design Entry HDL Front-to-Back Flow', slug: 'guides/pcb/hdlftb' }
							],
						},
						{
							label: 'Student Projects',
							collapsed: true,
							items: [
								{ label: 'DC Motor Controller and Test Adapter Board', slug: 'guides/project/dcmotorcontroller'},
								{ label: '32-Bit Computer Processor', slug: 'guides/project/32bitprocessor'}
							],
						},
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