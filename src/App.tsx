import React from 'react';
import { Typography } from 'antd';
import { OrderStatusContainer, MonitorControllerContainer } from './containers';
import 'antd/dist/antd.css';
import './scss/main.scss';

export default function App(): JSX.Element {
  return (
    <div>
      <header>
        <Typography.Title>Redux Example 01</Typography.Title>
      </header>
      <div>
        <OrderStatusContainer />
        <MonitorControllerContainer />
      </div>
    </div>
  );
}
