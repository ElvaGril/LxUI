import 'react-hot-loader/patch';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import reducers from './reducers/reducers'
import './static/reset.scss'
import App from './containers/Home/App'

const store = createStore(reducers)

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
    module.hot.accept('./containers/Home/App', () => {
        const App = require('./containers/Home/App').default
        render(App)
    })
}
