import { createAction } from 'typesafe-actions';

export const startMonitoring = createAction('@command/monitoring/start')();
export const stopMonitoring = createAction('@command/monitoring/stop')();
export const fetchSuccess = createAction('@fetch/success')();
export const fetchFailure = createAction('@fetch/failure')();
