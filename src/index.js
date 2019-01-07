import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index.js'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const wrapper = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(wrapper, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();






render(
  <Provider store={ store } >
    <App />
  </Provider>,
  document.getElementById('root')
)
