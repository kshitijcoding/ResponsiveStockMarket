import React, { Component } from 'react';
import './search.scss';
import { Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

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
        console.log(this.state.stockSymbol, e);
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

export default Search   ;