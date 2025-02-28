import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { useTheme } from '../../contexts/ThemeContext';

const NewProjectPage = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen p-4">
      <Card style={{ background: theme.colors.card }}>
        <CardHeader>
          <CardTitle style={{ color: theme.colors.text }}>
            Создание нового проекта
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p style={{ color: theme.colors.textMuted }}>
            Здесь будет размещен опросник для создания проекта
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewProjectPage;