import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import './DarkModeToggle.css'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="darkModeToggle">
      <div data-testid="toggle-element" className="dark-mode__toggle">
        <div style={{cursor:'pointer'}} onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}/>
      </div>
    </nav>
  );
};

export { DarkModeToggle };
