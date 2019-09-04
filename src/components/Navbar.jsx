import React, { useState } from 'react'
import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false)

  const [toggleDarkMode, storedValue, setValue] = useDarkMode()

  const toggleMode = e => {
    e.preventDefault()
    toggleDarkMode()
  }
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={storedValue === 'true' ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  )
}

export default Navbar
