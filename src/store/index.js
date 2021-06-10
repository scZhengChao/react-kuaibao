
import { createStore,compose} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import preloadedState from './preloadedState';
import reducer from './reducers/index';
import enhancer from  './middlewares'

const persistConfig = {
    key: 'root',
    storage,  //AsyncStorage  react-native
    whitelist:['detail'],
    blacklist:['list'],
    timeout: null,
}
const persistedReducer = persistReducer(persistConfig, reducer)
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (next:any)=>next
export const  store = createStore(
    persistedReducer,
    preloadedState,
    compose(
        enhancer, devToolsExtension
    )
);
export const persistor = persistStore(store)
