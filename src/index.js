import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store/configureStore'
import './style.css'
import Home from './pages/home/home.component'
import Header from './shared/components/dummy/header/header.component'

const store = createStore();

render(
  <Provider store={store}>
    <div>
      <Header />
      <Home />
    </div>
  </Provider>,
  document.getElementById('root')
);
