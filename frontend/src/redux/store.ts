import configureStore from './configureStore';
import { persistStore } from 'redux-persist';

const store = configureStore();
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store, persistor };
