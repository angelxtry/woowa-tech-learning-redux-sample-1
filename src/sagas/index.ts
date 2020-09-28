import { all, delay, fork, ForkEffect, put, race, take } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import * as Actions from '../actions';

function* monitoringWorkflow() {
  while (true) {
    yield take(getType(Actions.startMonitoring));

    let loop = true;

    while (loop) {
      yield all([put({ type: getType(Actions.fetchSuccess) }), put({ type: getType(Actions.fetchFailure) })]);

      const { stopped } = yield race({
        waiting: delay(200),
        stopped: take(getType(Actions.stopMonitoring)),
      });

      if (stopped) {
        loop = false;
      }
    }
  }
}

export default function* monitoringWorkflowSaga(): Generator<ForkEffect<void>, void, unknown> {
  yield fork(monitoringWorkflow);
}
