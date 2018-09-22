import {createAction} from 'redux-actions';
import * as constants from './constants';

export const requestMyList = createAction(constants.REQUEST_MY_LIST);
export const successMyList = createAction(constants.SUCCESS_MY_LIST);
export const errorMyList = createAction(constants.ERROR_MY_LIST);

export const requestHomeMovies = createAction(constants.REQUEST_HOME_MOVIES);
export const successHomeMovies = createAction(constants.SUCCESS_HOME_MOVIES);
export const errorHomeMovies = createAction(constants.ERROR_HOME_MOVIES);

