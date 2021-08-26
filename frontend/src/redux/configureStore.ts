import { applyMiddleware, compose, createStore, Middleware, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';

import rootReducer from './rootReducer';


export default function configureStore(preloadedState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares: Middleware[] = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: StoreEnhancer = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  // Important: run saga middleware after store is created.
  sagaMiddleware.run(rootSaga);

  return store
}
