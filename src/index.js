import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// Redux Feature
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
//const store = createStore(rootReducer);
//console.log('store.getState()', store.getState());
//store.subscribe(() => console.log('store', store.getState()));

// Redux Persistance
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer);
const persistor = persistStore(store)
store.subscribe( () => console.log('store',store.getState()))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
    
serviceWorker.unregister();
