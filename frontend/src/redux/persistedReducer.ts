import { persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import entityReducer from './entityReducer';

import { types } from './experience-item';


const DateTransform = createTransform(
  (inboundState: types.ExperienceItemState, key) => {
    return inboundState;
  },
  (outboundState: types.ExperienceItemState, key) => {
    try {
      const byIdState = outboundState.byId;
      const allIds = Object.keys(byIdState);
      const newByIdState: types.ExperienceItemByIdState = {};
      for (const id of allIds) {
        let startDate = null;
        let endDate = null;
        if (byIdState[id].startDate != null) {
          startDate = new Date(byIdState[id].startDate);
        }
        if (byIdState[id].endDate != null) {
          endDate = new Date(byIdState[id].endDate);
        }
        newByIdState[id] = {
          ...byIdState[id],
          startDate,
          endDate,
        }
      }
      const newState = {
        ...outboundState,
        byId: newByIdState
      }
      return newState;
    } catch (e) {
      console.log('transform err:', e.toString());
    }
  },
  { whitelist: ['experienceItem'] }
);

const persistConfig = {
  key: 'root',
  storage,
  transforms: [DateTransform]
}

export default persistReducer(persistConfig, entityReducer);
