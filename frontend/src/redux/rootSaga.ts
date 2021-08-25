import { sagas as resumeSagas } from './resume';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    resumeSagas()
  ])
}
