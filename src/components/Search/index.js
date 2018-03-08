import React, { Component } from 'react';
// import { Input } from 'antd';
import './search.scss';
// import 'antd/dist/antd.css';
import { Input } from 'semantic-ui-react';

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
            placeholder : "Enter Stock Symbol",
            value: this.state.stockSymbol
        };

        const stockSymbolTextBox2Props = {
            // label: "StockSymbol",
            placeholder : "Enter Stock Symbol",
            error : false,
            onChange: this.handleOnChange,
        };
        return (
            <div className="Search">
                <div >
                    {/* <Input.Search {...stockSymbolTextBoxProps} /> */}
                    <Input {...stockSymbolTextBox2Props} />
                </div>
            </div>
        );
    }
}

export default Search   ;