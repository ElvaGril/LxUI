import 'react-hot-loader/patch';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import rootReducers from './reducers/reducers'
import './static/reset.scss'
import App from './containers/App'
import FastClick from 'fastclick'

const store = createStore(rootReducers)

//解决移动端300毫秒延迟
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body)
    }, false);
}

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.querySelector('#app')
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const App = require('./containers/App').default
        render(App)
    })
}
