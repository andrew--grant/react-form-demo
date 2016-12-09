import React, { Component } from 'react';
import FormComponent from './FormComponent'

class Select extends FormComponent {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="select">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <select className={(this.state.pristine ? 'input-pristine' : 'input-dirty') + ' ' + (this.state.valid ? 'input-valid' : 'input-invalid')}
                        name={this.props.id} id={this.props.id}
                        onChange={(evt) => {
                            this.handleChange(evt)
                        }}>
                    {
                        this.props.options.map((opt, index) => {
                            return <option key={index} value={opt.value}>{opt.label}</option>
                        })
                    }
                </select>


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

export default Select