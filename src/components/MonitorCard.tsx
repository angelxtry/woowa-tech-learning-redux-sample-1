import React from 'react';
import { Card } from 'antd';

interface MonitorCardProps {
  children: React.ReactNode;
}

export function MonitorCard({ children }: MonitorCardProps): JSX.Element {
  return (
    <Card
      bordered={false}
      bodyStyle={{
        background: '#fff',
        padding: '24px',
      }}
    >
      <div className="wrapper">{children}</div>
    </Card>
  );
}
