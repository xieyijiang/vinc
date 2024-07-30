import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons()
  ],
  theme: {
    colors: {
      light: {
        background: '#ffffff',
        text: '#000000'
      },
      dark: {
        background: '#18181C',
        text: '#ffffff'
      }
    }
  },
  rules: [
    // [/^theme-(light|dark)$/, ([, m], { theme }) => {
    //   const colors = theme.colors[m];
    //   return {
    //     'background-color': colors?.background,
    //     color: colors?.text,
    //   };
    // }],
    // [/^m-(\d)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
    // [/^mt-(\d+)$/, ([, d]) => ({ 'margin-top': `${d / 4}rem` })]
  ],
})