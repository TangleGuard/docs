// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// import starlightThemeNova from "starlight-theme-nova";
import starlightThemeGalaxy from 'starlight-theme-galaxy'
import mermaid from "astro-mermaid";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "TangleGuard Docs",
      plugins: [
        //   starlightThemeNova({
        //     nav: [
        //       { label: "Website", href: "https://tangleguard.com" },
        //       { label: "Download", href: "https://tangleguard.com/download" },
        //     ],
        //   }),
        starlightThemeGalaxy(),
        starlightImageZoom(),
      ],
      sidebar: [
        {
          label: "Introduction",
          autogenerate: { directory: "welcome" },
        },
        {
          label: "Key Features",
          autogenerate: { directory: "features" },
        },
        {
          label: "Apps",
          autogenerate: { directory: "apps" },
        },
        {
          label: "Scanner",
          autogenerate: { directory: "scanner" },
        },
        {
          label: "Legal",
          autogenerate: { directory: "legal" },
        },
      ],
      social: [
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/jan-arends-1a83b8217/",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/TangleGuard",
        },
        {
          icon: "youtube",
          label: "YouTube",
          href: "https://www.youtube.com/@TangleGuard",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/eNcMDmm6CK",
        },
      ],
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://plausible.io/js/script.js",
            "data-domain": "docs.tangleguard.com",
            defer: true,
          },
        },
      ],
      customCss: ["./src/styles/custom.css"],
      // components: {
      // 	Hero: './src/components/hero.astro',
      // },
    }),
    mermaid(),
  ],
});
