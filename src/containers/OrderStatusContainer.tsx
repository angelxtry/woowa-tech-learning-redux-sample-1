import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../types';
import { MonitorCard, Counter } from '../components';

export function OrderStatusContainer(): JSX.Element {
  const [errorRate, setErrorRate] = React.useState(0);
  const { success, failure } = useSelector((state: StoreState) => state);

  React.useEffect(() => {
    const calculatedErrorRate = failure > 0 ? Number(((failure / success) * 100).toFixed(2)) : 0;
    setErrorRate(calculatedErrorRate);
  }, [success, failure]);

  return (
    <MonitorCard>
      <Counter title="Success" count={success} />
      <Counter title="Failure" count={failure} color="red" />
      <Counter title="Error Rate" count={errorRate} unit="%" />
    </MonitorCard>
  );
}
