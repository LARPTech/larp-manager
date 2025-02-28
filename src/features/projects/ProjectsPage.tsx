import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const projectSections = [
    {
      title: 'Активные проекты',
      projects: [
        { id: 1, name: 'S.T.A.L.K.E.R: Зов Припяти', date: '1 марта 2025' },
      ]
    },
    {
      title: 'Планируемые проекты',
      projects: [
        { id: 2, name: 'Ведьмак: Дикая Охота', date: '15 мая 2025' },
      ]
    },
    {
      title: 'Завершённые проекты',
      projects: [
        { id: 3, name: 'Метро 2033', date: '10 января 2025' },
      ]
    }
  ];

  return (
    <div className="min-h-screen p-4">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold" style={{ color: theme.colors.text }}>
          Проекты
        </h1>
        <Button
          onClick={() => navigate('/projects/new')}
          style={{ background: theme.colors.primary }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Создать новый проект
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {projectSections.map((section, index) => (
          <Card key={index} style={{ background: theme.colors.card }}>
            <CardHeader>
              <CardTitle style={{ color: theme.colors.text }}>
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {section.projects.length > 0 ? (
                <div className="space-y-2">
                  {section.projects.map(project => (
                    <div
                      key={project.id}
                      className="p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                      style={{ borderBottom: `1px solid ${theme.colors.border}` }}
                    >
                      <div style={{ color: theme.colors.text }}>
                        {project.name}
                      </div>
                      <div className="text-sm" style={{ color: theme.colors.textMuted }}>
                        {project.date}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4" style={{ color: theme.colors.textMuted }}>
                  Нет проектов
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;