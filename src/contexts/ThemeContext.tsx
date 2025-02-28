// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Тема Modern
const modernTheme = {
  name: 'modern',
  colors: {
    primary: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
    secondary: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
    background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
    card: 'rgba(255, 255, 255, 0.9)',
    text: '#1F2937',
    textMuted: '#6B7280',
    border: 'rgba(229, 231, 235, 1)'
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
  },
  animations: {
    button: 'transform 0.1s ease-in-out',
    card: 'all 0.2s ease-in-out',
  }
};

// Темная тема
const darkTheme = {
  name: 'dark',
  colors: {
    primary: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
    secondary: 'linear-gradient(135deg, #059669 0%, #2563EB 100%)',
    background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
    card: 'rgba(31, 41, 55, 0.95)',
    text: '#F9FAFB',
    textMuted: '#9CA3AF',
    border: 'rgba(55, 65, 81, 1)'
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.2)',
    md: '0 4px 6px rgba(0,0,0,0.3)',
    lg: '0 10px 15px rgba(0,0,0,0.3)',
  },
  animations: modernTheme.animations
};

export type Theme = typeof modernTheme;

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: modernTheme,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(modernTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const themes = {
  modern: modernTheme,
  dark: darkTheme,
};