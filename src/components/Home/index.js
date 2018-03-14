import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavBar } from '../Navbar/NavBar';
import Header from './../Header';
import Search from './../Search';
import 'bulma/css/bulma.css';
import './Home.scss';


const propTypes = {
	onStockSearch : PropTypes.func.isRequired,
	isSearchSuccess: PropTypes.bool.isRequired,
	stockData: PropTypes.object
}


class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div className="tile">
					<div className="tile is-parent is-vertical">
						<Search 
							onStockSearch= {this.props.onStockSearch}
							isSearchSuccess= {this.props.isSearchSuccess}
							stockData= {this.props.stockData}
						/>
					</div>
				</div>
			</div>
		)
	}
}

Home.propTypes = propTypes;

export default Home;