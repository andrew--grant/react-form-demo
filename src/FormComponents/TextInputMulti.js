import React, { Component } from 'react';
import FormComponent from './FormComponent'

class TextInputMulti extends FormComponent {

    constructor(props) {
        super(props)
    }



    render() {

        return (
            <div className="text-input-single">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <textarea
                    className={(this.state.pristine ? 'input-pristine' : 'input-dirty') + ' ' + (this.state.valid ? 'input-valid' : 'input-invalid')}
                    id={this.props.id}
                    name={this.props.id}
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

export default TextInputMulti