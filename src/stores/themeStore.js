import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  let storedTheme = localStorage.getItem('theme')
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const osTheme = ref(mediaQuery.matches ? 'dark' : 'light')
  const customTheme = ref(storedTheme ? storedTheme : 'auto')
  const currentTheme = ref(customTheme.value === 'auto' ? osTheme.value : customTheme.value)

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme)
  }

  function handleThemeChange(e) {
    const newTheme = e.matches ? 'dark' : 'light'
    osTheme.value = newTheme
    if (customTheme.value === 'auto') {
      currentTheme.value = newTheme
      applyTheme(newTheme)
    }
  }

  function run() {
    mediaQuery.addEventListener('change', handleThemeChange)
    applyTheme(currentTheme.value)
  }

  function stop() {
    mediaQuery.removeEventListener('change', handleThemeChange)
  }

  /**
   * @function setTheme
   * @param {string} theme - light | dark | auto
   */
  function setTheme(theme) {
    localStorage.setItem('theme', theme)
    customTheme.value = theme
    currentTheme.value = theme === 'auto' ? osTheme.value : customTheme.value
    applyTheme(currentTheme.value)
  }

  return { customTheme, currentTheme, run, stop, setTheme, }
});