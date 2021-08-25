// Import dotenv for .env variable loading
//import dotenv from 'dotenv';
//dotenv.config();

// Rest of app
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './src/App';


/* FontAwesome Icon imports */
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faChevronRight,
    faAddressBook,
    faFileAlt,
    faUser,
    faPen,
    faTrashAlt,
    faPlus,
    faTimes,
    faCircleNotch,
    faCheckSquare
} from '@fortawesome/free-solid-svg-icons';
import {
    faSquare
} from '@fortawesome/free-regular-svg-icons';

library.add(
    faChevronRight,
    faAddressBook,
    faFileAlt,
    faUser,
    faPen,
    faTrashAlt,
    faPlus,
    faTimes,
    faCircleNotch,
    faCheckSquare,
    faSquare
);


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
