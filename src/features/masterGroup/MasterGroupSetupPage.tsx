// src/features/masterGroup/MasterGroupSetupPage.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const MasterGroupSetupPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Создание мастерской группы</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Форма создания мастерской группы</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MasterGroupSetupPage;