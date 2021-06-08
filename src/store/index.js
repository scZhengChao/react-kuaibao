
import { createStore,compose} from 'redux'
import preloadedState from './state';
import reducer from './reducers/index';
import enhancer from  './middlewares'
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : ()=>{}
let store = createStore(
    reducer,
    preloadedState,
    compose(
        enhancer,
        devToolsExtension
    ),
);
export default store;