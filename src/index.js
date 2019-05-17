import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'tachyons';
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { reducerStar } from './store/reducers/quote'
import reducerLang from './store/reducers/lang'
import reducerAuth from './store/reducers/auth'

const rootReducer = combineReducers({
    quote: reducerStar,
    lang: reducerLang,
    auth: reducerAuth
})
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

let app = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
