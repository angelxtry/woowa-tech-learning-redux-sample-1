import { fork, all, take, race, delay, put, ForkEffect } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import * as Actions from '../actions';

function* monitoringWorkflow() {
  while (true) {
    yield take(getType(Actions.startMonitoring));

    let loop = true;

    while (loop) {
      yield all([put({ type: getType(Actions.fetchSuccess) }), put({ type: getType(Actions.fetchFailure) })]);

      const { stoped } = yield race({
        waitting: delay(200),
        stoped: take(getType(Actions.stopMonitoring)),
      });

      if (stoped) {
        loop = false;
      }
    }
  }
}

export default function* monitoringWorkflowiSaga(): Generator<ForkEffect<void>, void, unknown> {
  yield fork(monitoringWorkflow);
}
