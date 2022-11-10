import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { pokemonsReducer } from './reducers/pokemons';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { logger, featuring } from './middlewares';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(logger, featuring)
  applyMiddleware(thunk, logger)
)

// const store = createStore(
//   pokemonsReducer,
//   composeEnhancers
// );

//combinando reducers
const store = createStore(
  rootReducer,
  composeEnhancers
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
