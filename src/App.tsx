// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './components/layouts/MainLayout';
import DashboardPage from './features/dashboard/DashboardPage';
import MasterGroupSetupPage from './features/masterGroup/MasterGroupSetupPage';
import SettingsPage from './features/settings/SettingsPage';
import ProjectsPage from './features/projects/ProjectsPage';
import NewProjectPage from './features/projects/NewProjectPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/master-group-setup" element={<MasterGroupSetupPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/new" element={<NewProjectPage />} />
            {/* Здесь будут добавляться новые маршруты */}
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;