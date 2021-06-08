import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux'; //为react状态管理的插件包
import store from './store/index';
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root'),
    () => {
        console.log('reactDom渲染页面结束')
    }
)