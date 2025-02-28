// src/components/navigation/Sidebar.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Home,
  GamepadIcon,
  Users,
  FileText,
  Map,
  FolderOpen,
  DollarSign,
  Settings,
} from 'lucide-react';

interface NavItem {
  icon: React.ElementType;
  path: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { icon: Home, path: '/', label: 'Дашборд' },
  { icon: GamepadIcon, path: '/game', label: 'Управление игрой' },
  { icon: Users, path: '/team', label: 'Мастерская группа' },
  { icon: FileText, path: '/applications', label: 'Заявки' },
  { icon: Map, path: '/map', label: 'Карта' },
  { icon: FolderOpen, path: '/documents', label: 'Документы' },
  { icon: DollarSign, path: '/finance', label: 'Финансы' },
  { icon: FolderOpen, path: '/projects', label: 'Проекты' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <div 
      className="fixed left-0 top-0 h-full w-16 flex flex-col items-center py-4"
      style={{ 
        background: theme.colors.card,
        borderRight: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadows.sm
      }}
    >
      {/* Навигационные элементы */}
      <div className="flex-1 w-full">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className="w-full px-3 py-3 cursor-pointer group relative"
              title={item.label}
            >
              {/* Индикатор активного состояния */}
              {isActive && (
                <div 
                  className="absolute left-0 top-0 h-full w-1 rounded-r"
                  style={{ background: theme.colors.primary }}
                />
              )}
              
              {/* Иконка */}
              <div 
                className={`flex items-center justify-center p-2 rounded-lg transition-all duration-200 
                  ${isActive ? 'bg-primary bg-opacity-10' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                <Icon
                  size={20}
                  style={{ 
                    color: isActive 
                      ? theme.colors.primary 
                      : theme.colors.textMuted
                  }}
                  className="transition-colors duration-200"
                />
              </div>

              {/* Всплывающая подсказка */}
              <div className="absolute left-full ml-2 py-1 px-2 rounded bg-gray-900 text-white text-sm 
                            opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                            whitespace-nowrap z-50">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Кнопка настроек внизу */}
      <div 
        onClick={() => navigate('/settings')}
        className="w-full px-3 py-3 cursor-pointer group relative"
        title="Настройки"
      >
        <div className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
          <Settings
            size={20}
            style={{ color: theme.colors.textMuted }}
            className="transition-colors duration-200"
          />
        </div>
        
        {/* Всплывающая подсказка для настроек */}
        <div className="absolute left-full ml-2 py-1 px-2 rounded bg-gray-900 text-white text-sm 
                      opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                      whitespace-nowrap z-50">
          Настройки
        </div>
      </div>
    </div>
  );
};

export default Sidebar;