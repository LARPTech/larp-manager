import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Sidebar from '../navigation/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { theme } = useTheme();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Фиксированный сайдбар */}
      <div className="w-16 flex-shrink-0">
        <Sidebar />
      </div>
      
      {/* Основной контент */}
      <div 
        className="flex-1 overflow-x-hidden overflow-y-auto"
        style={{ background: theme.colors.background }}
      >
        <div className="container mx-auto h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;