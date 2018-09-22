import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  myList: {
    data:       [],
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  homeMovies: {
    data:     {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  }
};

const requestMyList = (state, action) => update(state, {
  myList: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const successMyList = (state, action) => update(state, {
  myList: {
    data:       {$set: action.payload || state.myList.data},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Login success'}
  }
});
const errorMyList = (state, action) => update(state, {
  myList: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});

const requestHomeMovies = (state, action) => update(state, {
  homeMovies: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});


const successHomeMovies = (state, action) => update(state, {
  homeMovies: {
    data:       {$set: action.payload || state.homeMovies.data},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Login success'}
  }
});

const errorHomeMovies = (state, action) => update(state, {
  homeMovies: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});

export default handleActions({
  [constants.REQUEST_MY_LIST]: requestMyList,
  [constants.SUCCESS_MY_LIST]: successMyList,
  [constants.ERROR_MY_LIST]:   errorMyList,
  [constants.REQUEST_HOME_MOVIES]: requestHomeMovies,
  [constants.SUCCESS_HOME_MOVIES]: successHomeMovies,
  [constants.ERROR_HOME_MOVIES]: errorHomeMovies,
}, initialState);
