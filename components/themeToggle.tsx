import { useState, useEffect } from 'react'

import SunIcon from './sunIcon'
import MoonIcon from './moonIcon'

type ThemeOptions = 'light' | 'dark' | undefined

const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeOptions>(undefined)

  const toggleTheme = () => {
    let newValue: 'light' | 'dark'
    if (theme === 'light') {
      newValue = 'dark'
    } else {
      newValue = 'light'
    }

    setTheme(newValue)
    localStorage.setItem('theme', newValue)
    document.documentElement.classList.toggle('dark')
  }

  useEffect(() => {
    const theme = localStorage.theme
    setTheme(theme ?? 'light')
  }, [])

  if (!theme) {
    return null
  }

  return (
    <button
      className="icon"
      onClick={toggleTheme}
      id="theme-toggle"
      title="Toggle the site's theme"
    >
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default ThemeToggle
