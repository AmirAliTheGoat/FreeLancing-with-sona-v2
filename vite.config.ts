import path from 'path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function preloadVazirmatnFontsPlugin(): Plugin {
  return {
    name: 'preload-vazirmatn-fonts',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml(html, ctx) {
      const bundle = ctx.bundle;
      if (!bundle) return html;
      const targets = Object.keys(bundle)
        .filter((fileName) =>
          /assets\/vazirmatn-arabic-(?:400|700)-normal-.*\.woff2$/.test(fileName)
        )
        .sort();
      if (targets.length === 0) return html;

      return {
        html,
        tags: targets.map((fileName) => ({
          tag: 'link',
          attrs: {
            rel: 'preload',
            as: 'font',
            type: 'font/woff2',
            crossorigin: '',
            href: `/${fileName}`,
          },
          injectTo: 'head-prepend' as const,
        })),
      };
    },
  };
}

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  plugins: [react(), preloadVazirmatnFontsPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
