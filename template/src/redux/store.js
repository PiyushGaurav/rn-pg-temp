import reducer from './reducers';
import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

export default configureStore({reducer, middleware: [logger]});
