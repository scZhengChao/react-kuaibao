import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeContext,themes } from './context/themeContext'
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store,persistor} from './store/index';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import ErrorBoundary from './components/errorBoundary'
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <BrowserRouter>
                <ThemeContext.Provider value={themes.dark}>
                    <ErrorBoundary>
                        <Route component={App} />
                    </ErrorBoundary>
                </ThemeContext.Provider>
            </BrowserRouter>
        </ConfigProvider>
    </Provider>,
  document.getElementById('root'),
    () => {
        console.log('reactDom渲染页面结束')
    }
)