import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './search.scss';


const propTypes = {
	onStockSearch : PropTypes.func.isRequired,
	isSearchSuccess: PropTypes.bool.isRequired,
	stockData: PropTypes.object
}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            stockSymbol: ""
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        this.state.stockSymbol = e.target.value;
    }

    handleOnClickSearch(e) {
        console.log("I am fucking clicked");
        // let url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=CTSH&interval=1min&apikey=2FZIVBF4TZA5XLXB";
        // this.props.onStockSearch(url);
    }

    render() {

        const stockSymbolTextBoxProps = {
            label: "StockSymbol",
            placeholder : "Enter Stock Symbol",
            error : false,
            onChange: this.handleOnChange,
        };
        const searchBtnProps = {
            primary: true,
            size: "large",
            onClick: this.handleOnClickSearch
        };
        return (
            <div className="Search">
                <div >
                    <Input {...stockSymbolTextBoxProps} />
                    <Button {...searchBtnProps}>Search</Button>
                </div>
            </div>
        );
    }
}

// Search.propTypes =propTypes;

export default Search   ;