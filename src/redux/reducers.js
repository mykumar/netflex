import {combineReducers} from 'redux';

import myList from './myList/reducer/index';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    myList: myList,
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
