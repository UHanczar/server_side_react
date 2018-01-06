import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';

import reducers from '../reducers';

const axiosInstance = axios.create({
  baseURL: '/api'
});


const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance), logger));

export default store;
