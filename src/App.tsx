import * as React from 'react';
import { Typography } from 'antd';
import { MonitorControllerContainer, OrderStatusContainer } from './containers';
import 'antd/dist/antd.css';
import './scss/main.scss';

export default function App(): JSX.Element {
  return (
    <div>
      <header>
        <Typography.Title>React & TS Boilerplate</Typography.Title>
      </header>
      <main>
        <div>
          <OrderStatusContainer />
          <MonitorControllerContainer />
        </div>
      </main>
    </div>
  );
}
