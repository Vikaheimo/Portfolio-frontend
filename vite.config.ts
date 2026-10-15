import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [
        sveltekit({
            adapter: adapter({
                pages: 'public',
                assets: 'public',
                fallback: 'index.html',
                precompress: false,
                strict: true
            }),
            preprocess: vitePreprocess(),
            alias: {
                $lib: 'src/lib'
            }
        })
    ],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
