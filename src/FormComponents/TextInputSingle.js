import React from 'react';
import FormComponent from './FormComponent'

class TextInputSingle extends FormComponent {

    render() {
        return (
            <div className="text-input-single">
                {this.getLabel()}
                <input
                    className={this.getClassName()}
                    id={this.props.id}
                    name={this.props.id}
                    type='text'
                    value={this.state.value}
                    onChange={(evt) => {
                        this.handleChange(evt)
                    }}/>
                <div>
                    {
                        this.state.errorMessages.map(
                            function (val, index) {
                                return <p className="error-message" key={index}>{val}</p>
                            }
                        )}
                </div>
            </div>

        );
    }
}

export default TextInputSingle