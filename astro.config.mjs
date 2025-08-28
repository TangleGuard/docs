// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TangleGuard Docs',
  		plugins: [
        starlightThemeNova({
          nav: [
            { label: 'Website', href: 'https://tangleguard.com' },
            { label: 'Download', href: 'https://tangleguard.com/download' },
          ],
        }),
      ],
			sidebar: [
				{
					label: 'Introduction',
					autogenerate: { directory: 'welcome' },
				},
				{
					label: 'Core Features',
					autogenerate: { directory: 'features' },
				},
				{
					label: 'Getting started',
					autogenerate: { directory: 'start' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guide' },
				  collapsed: true,
				},
			],
			social: [
				{
					icon: "linkedin",
					label: "LinkedIn",
					href: "https://www.linkedin.com/in/jan-arends-1a83b8217/",
				},
				{
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/TangleGuard',
        },
			],
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://plausible.io/js/script.js',
						'data-domain': "docs.tangleguard.com",
						defer: true,
					},
				}
			],
			// components: {
			// 	Hero: './src/components/hero.astro',
			// },
		}),
	],
});
