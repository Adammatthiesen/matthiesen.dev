import { defineEcConfig } from 'astro-expressive-code'
import { spectreDark } from './src/ec-theme.js';

export default defineEcConfig({
    themes: [spectreDark]
});