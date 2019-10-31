import { all } from 'redux-saga/effects';

import Cart from './cart/saga';

export default function* rootSaga() {
  return yield all([Cart]);
}
