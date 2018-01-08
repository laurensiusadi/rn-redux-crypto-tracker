import { Platform } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const composeEnhancers = composeWithDevTools({
    realtime: true,
    hostname: '192.168.100.28',
    port: 8000
 });

const Store = createStore(
    RootReducer,
    composeEnhancers(
        middleware,
    )
);

export default Store;