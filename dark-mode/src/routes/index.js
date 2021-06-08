import React from 'react';
import Home from './App';
import { ThemeContext } from '../common/context/ThemeContext';

// Use something like react-router-dom to manage multiple pages/routes

export default function HomeApp() {
  const [theme, toggleTheme] = React.useState('light');

  return (
    <ThemeContext.Provider value={{toggle: toggleTheme, theme}}>
      <Home />
    </ThemeContext.Provider>
  );
};
