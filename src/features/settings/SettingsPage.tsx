// src/features/settings/SettingsPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { useTheme, themes } from '../../contexts/ThemeContext';
import { Button } from '../../components/ui/button';
import { Moon, Sun, ArrowLeft } from 'lucide-react';

const SettingsPage = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  return (
    <div 
      className="min-h-screen p-8"
      style={{ background: theme.colors.background }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header с кнопкой назад */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="hover:bg-opacity-10"
            style={{ color: theme.colors.text }}
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="ml-2">Назад</span>
          </Button>
          <div>
            <h1 
              className="text-3xl font-bold"
              style={{ color: theme.colors.text }}
            >
              Настройки
            </h1>
            <p style={{ color: theme.colors.textMuted }}>
              Персонализация платформы
            </p>
          </div>
        </div>

        <Card 
          className="overflow-hidden"
          style={{ 
            background: theme.colors.card,
            boxShadow: theme.shadows.md,
            transition: theme.animations.card
          }}
        >
          <CardHeader>
            <CardTitle style={{ color: theme.colors.text }}>
              Внешний вид
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{ color: theme.colors.text }}
                >
                  Тема
                </h3>
                <div className="flex gap-4">
                  <Button
                    variant={theme.name === 'modern' ? 'default' : 'outline'}
                    onClick={() => setTheme(themes.modern)}
                    className="w-32"
                  >
                    <Sun className="mr-2 h-4 w-4" />
                    Светлая
                  </Button>
                  <Button
                    variant={theme.name === 'dark' ? 'default' : 'outline'}
                    onClick={() => setTheme(themes.dark)}
                    className="w-32"
                  >
                    <Moon className="mr-2 h-4 w-4" />
                    Темная
                  </Button>
                </div>
              </div>

              {/* Опциональные секции настроек */}
              <div>
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{ color: theme.colors.text }}
                >
                  Уведомления
                </h3>
                <div className="space-y-2">
                  <p style={{ color: theme.colors.textMuted }}>
                    Настройки уведомлений будут доступны в следующих обновлениях
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;