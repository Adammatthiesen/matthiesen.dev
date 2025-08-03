import { defineEcConfig } from 'astro-expressive-code'
import ecTwoSlash from "expressive-code-twoslash";
import { spectreDark } from './src/ec-theme.js';
import ts from 'typescript';

export default defineEcConfig({
    themes: [spectreDark],
    plugins: [ecTwoSlash({
		compilerOptions: {
			moduleResolution: ts.ModuleResolutionKind.Bundler,
			target: ts.ScriptTarget.ESNext,
			module: ts.ModuleKind.ESNext,
			lib: ['esnext', 'dom'],
		},
    })],
});