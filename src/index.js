import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import { Routes } from './Routes/Routes';
import Header from './components/Header';

class App extends React.Component {
    render() {
        return (
        	<div>
        	        <div className="title"><Header /></div>
        	    	<Routes />
        	</div>
        )
    }
}

ReactDOM.render(<App/>, app)
module.hot.accept();