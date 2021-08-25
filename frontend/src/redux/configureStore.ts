import { applyMiddleware, compose, createStore, Middleware, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';

import persistedReducer from './persistedReducer';


export default function configureStore(preloadedState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares: Middleware[] = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: StoreEnhancer = compose(...enhancers);

  const store = createStore(persistedReducer, preloadedState, composedEnhancers);

  // I guess you have to run the saga middleware AFTER the store is created??
  sagaMiddleware.run(rootSaga);

  return store
}
