import { applyMiddleware, compose, createStore, Middleware, StoreEnhancer } from 'redux';

import persistedReducer from './persistedReducer';

export default function configureStore(preloadedState = {}) {
  const middlewares: Middleware[] = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: StoreEnhancer = compose(...enhancers);

  const store = createStore(persistedReducer, preloadedState, composedEnhancers);

  return store
}
