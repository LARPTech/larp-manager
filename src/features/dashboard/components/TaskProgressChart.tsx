// src/features/dashboard/components/TaskProgressChart.tsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Users, FileText, Calendar } from 'lucide-react';

const TaskProgressChart = () => {
  const data = [
    { name: 'Подготовка', value: 100, completed: 70 },
    { name: 'Документы', value: 100, completed: 45 },
    { name: 'Логистика', value: 100, completed: 30 },
    { name: 'Полигон', value: 100, completed: 20 },
  ];

  const COLORS = ['#6366F1', '#10B981', '#3B82F6', '#EC4899'];
  const EMPTY_COLOR = '#E5E7EB';

  const metrics = [
    { label: 'Всего игроков', value: '124/200', icon: Users },
    { label: 'Заявок', value: '15', icon: FileText },
    { label: 'До начала', value: '45 дней', icon: Calendar },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="grid grid-cols-[1fr_auto] gap-4 h-full">
        <div className="space-y-2">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="p-1 rounded bg-primary/10">
                <metric.icon className="w-3 h-3" />
              </div>
              <div className="min-w-0">
                <p className="text-xs truncate">{metric.label}</p>
                <p className="text-sm font-semibold">{metric.value}</p>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <div className="grid grid-cols-2 gap-2">
              {data.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <div className="min-w-0">
                    <p className="text-xs truncate">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.completed}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-32 h-32">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                outerRadius="90%"
                innerRadius="70%"
                fill={EMPTY_COLOR}
                stroke="none"
              />
              <Pie
                data={data}
                dataKey="completed"
                outerRadius="90%"
                innerRadius="70%"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TaskProgressChart;