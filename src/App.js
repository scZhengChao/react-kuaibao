
import './App.css';
import {
    Switch,
    Route ,
    Redirect,
} from 'react-router-dom';
import Home from './pages/login'



function App() {
  return (
    <div className="App">
        <Switch>
            <Route path='/home' component={Home} />

            <Redirect exact from='/' to='/home' />
        </Switch>
    </div>
  );
}

export default App;
