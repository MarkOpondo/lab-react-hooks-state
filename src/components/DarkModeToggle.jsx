import React from 'react'

const DarkModeToggle = ({ toggleTheme, theme }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={toggleTheme}>Toggle {theme === "dark" ? "light" : "dark" } Mode {/* TODO: Update this text from Dark to Light dynamically */}</button>
  )
}

export default DarkModeToggle
