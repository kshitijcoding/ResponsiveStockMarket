import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TextBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            textBox : this.props.value
        }
    }


    render() {
        return (
            <div className="TextBox">
                <input
                    type="text"
                    value={this.state.textBox}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

TextBox.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TextBox;