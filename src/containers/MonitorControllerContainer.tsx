import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlayButton } from 'components';
import { StoreState } from '../types';
import { startMonitoring, stopMonitoring } from '../actions';

export const MonitorControllerContainer = (): JSX.Element => {
  const { monitoring } = useSelector((state: StoreState) => state);
  const dispatch = useDispatch();
  const onStart = () => dispatch(startMonitoring());
  const onStop = () => dispatch(stopMonitoring());

  return (
    <div>
      <PlayButton monitoring={monitoring} onPlay={onStart} onPause={onStop} />
    </div>
  );
};
