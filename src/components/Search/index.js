import React, { Component } from 'react';
import { Input } from 'antd';
import './search.scss';
import 'antd/dist/antd.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            stockSymbol: ""
        }
    }

    render() {
        const stockSymbolTextBoxProps = {
            id: "StockSymbol",
            placeholder : "Enter Stock Symbol",
            enterButton: "Search",
            value: this.state.stockSymbol
        };
        return (
            <div className="Search">
                <div className="example-input">
                    <Input.Search {...stockSymbolTextBoxProps} />
                </div>
            </div>
        );
    }
}

export default Search   ;