import React, { Component } from 'react';
import FormComponent from './FormComponent'

class Checkboxes extends FormComponent {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="checkboxes">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <div>
                    {
                        this.props.options.map((opt, index) => {
                            return <input key={index} type="checkbox" id={this.props.id} name={this.props.id} checked={opt.value ? 'checked' : ''}/>
                        })
                    }
                </div>


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

export default Checkboxes