// Inspired by https://www.joshwcomeau.com/react/dark-mode/
// Sets the user's theme immediately based on their saved settings
// or their system theme. This script is injected into the NextJS
// client bundle and runs before anything else, preventing the
// screen from flickering when the React app hydrates.
const SetThemeImmediatelyScript = () => {
  const codeToRunOnClient = `(function () {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('theme')
      const hasPersistedPreference =
        typeof persistedColorPreference === 'string'

      // If the user has explicitly chosen light or dark,
      // let's use it. Otherwise, this value will be null.
      if (hasPersistedPreference) {
        return persistedColorPreference
      }

      // If they haven't been explicit, let's check the media query.
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      const hasMediaQueryPreference = typeof mql.matches === 'boolean'

      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light'
      }

      // If they are using a browser/OS that doesn't support
      // color themes, let's default to 'light'.
      return 'light'
    }

    const colorMode = getInitialColorMode()

    const root = document.documentElement

    // Add our theme class to <html /> and persist the choice in localStorage.
    if (colorMode === 'dark') {
      root.classList.add(colorMode)
    }
    
    localStorage.setItem('theme', colorMode)
  })()`

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

export { SetThemeImmediatelyScript }
