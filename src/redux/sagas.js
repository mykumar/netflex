import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';

import { requestMyList, requestHomeMovies } from './myList/action/';

export function* watchActions () {
  yield takeLatest(constants.REQUEST_MY_LIST, requestMyList);
  yield takeLatest(constants.REQUEST_HOME_MOVIES, requestHomeMovies);
}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
