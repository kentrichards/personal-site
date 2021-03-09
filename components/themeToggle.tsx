import { useState, useEffect } from 'react'

import SunIcon from './sunIcon'
import MoonIcon from './moonIcon'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    localStorage.setItem('theme', darkMode ? 'light' : 'dark')
    document.documentElement.classList.toggle('dark')
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setDarkMode(theme === 'dark')
  }, [])

  return (
    <button
      className="icon"
      onClick={toggleTheme}
      id="theme-toggle"
      title="Toggle the site's theme"
    >
      {darkMode ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

export default ThemeToggle
