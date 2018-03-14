import React, {Component} from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import { Routes } from './Routes/Routes';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import Header from './components/Header';
import reducers from './Pages/reducers';
import homePageAction from './Pages/Home/HomePageAction';
import configureStore from './Pages/store/store';
import App from './App/App';

// class App extends Component {
//     render() {
//         return (
//         	<div>
//         	        <div className="title"><Header /></div>
//         	    	<Routes />
//         	</div>
//         )
//     }
// }
const store = configureStore();
console.log(store);

render(<Provider store={store}><App /></Provider>,document.getElementById('app'));
module.hot.accept();