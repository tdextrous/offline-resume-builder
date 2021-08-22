import { combineReducers } from 'redux';

import { reducers as contactReducer } from './contact-item';
import { reducers as experienceContentReducer } from './experience-content';
import { reducers as experienceItemReducer } from './experience-item';
import { reducers as experienceSectionReducer } from './experience-section';
import { reducers as resumeReducer } from './resume';
import { reducers as userReducer } from './user';

const entityReducer = combineReducers({
  contactItem: contactReducer,
  experienceContent: experienceContentReducer,
  experienceItem: experienceItemReducer,
  experienceSection: experienceSectionReducer,
  resume: resumeReducer,
  user: userReducer
})

export default entityReducer;
