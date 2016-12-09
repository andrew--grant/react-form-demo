import React, { Component } from 'react';

class FormComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {value: '', valid: true, pristine: true, errorMessages: []}
    }

    handleChange(evt) {
        if (this.props.onChange) {
            this.props.onChange(evt)
        }
        // controlled component, update value
        this.setState({value: evt.target.value})
        // the field is no longer pristine
        this.setState({pristine: false})
        // If any validations apply them here
        let valid = true;
        if (this.props.validation) {
            this.state.errorMessages = [];
            for (let validation of this.props.validation) {
                if (!validation.rule()) {
                    this.setState({valid: false})
                    this.state.errorMessages.push(validation.message)
                } else {
                    this.setState({valid: true})
                }
            }
        }

    }

}

export default FormComponent