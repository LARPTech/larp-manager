import React, { useState } from 'react';
import { Card } from '../../components/ui/card';
import { 
  Activity, Map, AlertCircle, 
  BarChart3, Maximize2, Minimize2
} from 'lucide-react';
import TaskProgressChart from './components/TaskProgressChart';

type MapSize = 'small' | 'large';

const DashboardPage = () => {
  const [mapSize, setMapSize] = useState<MapSize>('small');

  const toggleMapSize = () => {
    setMapSize(mapSize === 'small' ? 'large' : 'small');
  };

  const MetricsCard = () => (
    <Card className="p-2 h-full">
      <h3 className="font-semibold text-sm mb-2">Общие метрики</h3>
      <TaskProgressChart />
    </Card>
  );

  const MapCard = () => (
    <Card className="relative flex items-center justify-center h-full">
      <Map className="w-12 h-12 text-gray-400" />
      <button
        onClick={toggleMapSize}
        className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100 transition-colors"
        title="Изменить размер карты"
      >
        {mapSize === 'large' ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
      </button>
    </Card>
  );

  const ChatSection = () => (
    <Card className="p-2 h-full">
      <h3 className="font-semibold text-sm mb-2">Чат мастерской группы</h3>
      <div className="flex items-center justify-center text-xs text-gray-500">
        Чат будет доступен после создания группы
      </div>
    </Card>
  );

  const TasksSection = () => (
    <Card className="p-2 h-full">
      <h3 className="font-semibold text-sm mb-2">Задачи</h3>
      <div className="space-y-1">
        {[
          { task: 'Закрытие заявок', date: '25 янв' },
          { task: 'Совещание', date: '1 фев' },
          { task: 'Взносы', date: '15 фев' },
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center text-xs">
            <span className="truncate mr-2">{item.task}</span>
            <span className="text-gray-500 whitespace-nowrap">{item.date}</span>
          </div>
        ))}
      </div>
    </Card>
  );

  const QuestsSection = () => (
    <Card className="p-2 h-full">
      <h3 className="font-semibold text-sm mb-2">Квесты</h3>
      <div className="flex items-center justify-center h-[calc(100%-2rem)]">
        <BarChart3 className="w-6 h-6 text-gray-400" />
      </div>
    </Card>
  );

  const NotificationsSection = () => (
    <Card className="p-2 h-full">
      <h3 className="font-semibold text-sm mb-2">Уведомления</h3>
      <div className="space-y-1">
        {[
          { text: 'Новая заявка', time: '15 мин' },
          { text: 'Обновление квеста', time: '2 ч' },
          { text: 'Взнос', time: '5 ч' },
        ].map((notification, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
            <div className="min-w-0 flex-1">
              <p className="text-xs truncate">{notification.text}</p>
              <p className="text-xs text-gray-500">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  const ApplicationsSection = () => (
    <Card className="p-2 h-full">
      <h3 className="font-semibold text-sm mb-2">Работа с заявками</h3>
      <div className="flex items-center justify-center h-[calc(100%-2rem)]">
        <AlertCircle className="w-6 h-6 text-gray-400" />
      </div>
    </Card>
  );

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex flex-col p-2">
        {/* Верхняя панель */}
        <header className="flex justify-between items-center h-12">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">
              Игровой проект
            </h1>
            <div className="flex items-center gap-2">
              <select className="bg-transparent border rounded px-2 py-1 text-sm">
                <option>2025</option>
              </select>
              <select className="bg-transparent border rounded px-2 py-1 text-sm">
                <option>Январь</option>
              </select>
            </div>
          </div>
          <button className="p-1 rounded hover:bg-opacity-10 hover:bg-white">
            <Activity className="w-4 h-4" />
          </button>
        </header>

        {/* Основная сетка */}
        <main className="h-[calc(100vh-4rem)] mt-2">
          {mapSize === 'small' ? (
            <div className="h-full grid grid-rows-2 gap-2">
              {/* Верхний ряд: 3 колонки */}
              <div className="grid grid-cols-3 gap-2">
                <MetricsCard />
                <MapCard />
                <ChatSection />
              </div>

              {/* Нижний ряд: 4 колонки */}
              <div className="grid grid-cols-4 gap-2">
                <TasksSection />
                <QuestsSection />
                <ApplicationsSection />
                <NotificationsSection />
              </div>
            </div>
          ) : (
            /* Режим large */
            <div className="h-full grid grid-cols-[1fr_2fr_1fr] gap-2">
              {/* Левая колонка */}
              <div className="grid grid-rows-[2fr_1fr_1fr] gap-2">
                <MetricsCard />
                <TasksSection />
                <QuestsSection />
              </div>

              {/* Центральная карта */}
              <MapCard />

              {/* Правая колонка */}
              <div className="grid grid-rows-[1fr_2fr_1fr] gap-2">
                <ChatSection />
                <NotificationsSection />
                <ApplicationsSection />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;