
import './App.css';
import {
    Switch,
    Route ,
    Redirect,
} from 'react-router-dom';
import Home from './pages/login'
import List from  './pages/list'


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
