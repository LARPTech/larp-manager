// src/features/dashboard/components/MapSection.tsx
import React from 'react';
import { Card } from '../../../components/ui/card';
import { useTheme } from '../../../contexts/ThemeContext';
import { Map } from 'lucide-react';

const MapSection = () => {
  const { theme } = useTheme();

  return (
    <Card className="h-[500px] relative backdrop-blur-sm flex items-center justify-center"
      style={{ 
        background: theme.colors.card,
        boxShadow: theme.shadows.lg
      }}>
      <div className="text-center">
        <Map size={48} className="mx-auto mb-4" style={{ color: theme.colors.textMuted }} />
        <p style={{ color: theme.colors.textMuted }}>Карта полигона (в разработке)</p>
      </div>
    </Card>
  );
};

// src/features/dashboard/components/MetricsSection.tsx
const MetricsSection = () => {
  const { theme } = useTheme();
  
  const metrics = [
    { label: 'Игроков', value: '45/100' },
    { label: 'Заявок', value: '15' },
    { label: 'До игры', value: '45 дней' }
  ];

  return (
    <div className="space-y-4">
      {metrics.map((metric, index) => (
        <Card key={index} 
          className="backdrop-blur-sm"
          style={{ 
            background: theme.colors.card,
            boxShadow: theme.shadows.md
          }}>
          <div className="p-4">
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>{metric.label}</p>
            <p className="text-2xl font-bold" style={{ color: theme.colors.text }}>{metric.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

// src/features/dashboard/components/ChatSection.tsx
const ChatSection = () => {
  const { theme } = useTheme();

  return (
    <Card 
      className="h-[500px] backdrop-blur-sm flex flex-col"
      style={{ 
        background: theme.colors.card,
        boxShadow: theme.shadows.md
      }}>
      <div className="p-4 border-b" style={{ borderColor: theme.colors.border }}>
        <h3 className="font-semibold" style={{ color: theme.colors.text }}>Чат мастерской группы</h3>
      </div>
      <div className="flex-1 p-4">
        <p className="text-center" style={{ color: theme.colors.textMuted }}>
          Чат будет доступен после создания мастерской группы
        </p>
      </div>
    </Card>
  );
};

// src/features/dashboard/components/ApplicationsSection.tsx
const ApplicationsSection = () => {
  const { theme } = useTheme();

  return (
    <Card 
      className="backdrop-blur-sm"
      style={{ 
        background: theme.colors.card,
        boxShadow: theme.shadows.md
      }}>
      <div className="p-4">
        <h3 className="font-semibold mb-4" style={{ color: theme.colors.text }}>Последние заявки</h3>
        <p className="text-center" style={{ color: theme.colors.textMuted }}>
          Нет активных заявок
        </p>
      </div>
    </Card>
  );
};

export { MapSection, MetricsSection, ChatSection, ApplicationsSection };