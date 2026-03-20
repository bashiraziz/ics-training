module.exports = {
  title: 'ICS Training',
  tagline: 'Master the annual incurred cost submission process — reconcile rates, satisfy DCAA, and protect your contracts — at your level.',
  url: 'https://ics-training.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },
  favicon: 'img/favicon.ico',
  organizationName: 'example',
  projectName: 'ics-training',
  themeConfig: {
    footer: {
      style: 'dark',
      copyright: `Built by Bashir Aziz with the help of Claude (Anthropic) and Codex (OpenAI) · ${new Date().getFullYear()}`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        blog: false
      }
    ]
  ]
};
