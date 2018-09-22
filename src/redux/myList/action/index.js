import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import {CONFIG} from '../../../config/index';
import { topTVPicks,movie,horror,sciFi,comedy } from '../../../config/api';

export function* requestMyList (action) {
  try {
    // const response = yield call(fireAjax, 'POST', CONFIG.URL, {});
    const response = {
      status: 200
    };
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.successMyList());
    } else if (response && response.error === 1) {
      yield put(actions.errorMyList('Could not fetch data.'));
    }
  } catch (e) {
    yield put(actions.errorMyList('Error Occurs !!'));
    console.warn('Some error found in "logingRequest" action\n', e);
  }
}

export function* requestHomeMovies (action) {
  try {
    const response = {
      data: {
        'topTVPicks': topTVPicks,
        'movie': movie,
        'horror': horror,
        'sciFi': sciFi,
        'comedy': comedy
      },
      status: 200
    };
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.successHomeMovies(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.errorHomeMovies('Could not fetch data.'));
    }
  } catch (e) {
    yield put(actions.errorHomeMovies('Error Occurs !!'));
    console.warn('Some error found in "logingRequest" action\n', e);
  }
}