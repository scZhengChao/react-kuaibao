
import './App.css';
import {
    Switch,
    Route ,
    Redirect,
} from 'react-router-dom';
import Loadding from './components/loadding/loadding';

import loadable from 'react-loadable';
const Home = loadable({loader: () => import('./pages/login'), loading: Loadding })
const List = loadable({loader: () => import('./pages/list'), loading: Loadding })
function App() {
  return (
    <div className="App">
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/list' component={List} />

                <Redirect exact from='/' to='/home' />
            </Switch>
    </div>
  );
}

export default App;
