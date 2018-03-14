import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './../../components/Home';
import HomePageAction from './HomePageAction';


function mapStateToProps(state) {
	return {
		onStockSearch : this.state.Search.onStockSearch,
		isSearchSuccess : this.state.Search.isSearchSuccess,

	};
}

function mapDispatchToProps(dispatch) {
    return {
        onStockSearch: function(url) {
            dispatch(HomePageAction.doSearchForStock(dispatch, url))
        }
    }
}
const propTypes = {
	onStockSearch : PropTypes.func.isRequired,
	isSearchSuccess: PropTypes.bool.isRequired,
	stockData: PropTypes.object
}

class HomePage extends Component {
	render() {
		return (
			<Home 
				onStockSearch= {this.props.onStockSearch}
				isSearchSuccess= {this.props.isSearchSuccess}
				stockData= {this.props.stockData}
			/>
		);
	}
}
HomePage.propTypes = propTypes;

export default connect(
	mapStateToProps,mapDispatchToProps
)(HomePage);


