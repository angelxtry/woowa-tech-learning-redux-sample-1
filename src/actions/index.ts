import { createAction } from 'typesafe-actions';

export const SET_CATEGORY = 'category/SET_CATEGORY' as const;
export const setCategoryAction = createAction(SET_CATEGORY)();

export const startMonitoring = createAction(
  // action 이름(속성) 상수 선언이 필요없다.
  // 타입 속성에 넣는다.
  '@command/monitoring/start',
  (resolve) => () => resolve(),
);

export const stopMonitoring = createAction('@command/monitoring/stop', (resolve) => {
  return () => resolve();
});

export const fetchSuccess = createAction('@fetch/success', (resolve) => {
  return () => resolve();
});

export const fetchFailure = createAction('@fetch/failure', (resolve) => {
  return () => resolve();
});
