import React, { Component } from 'react';
import Checkboxes from './FormComponents/Checkboxes'
import Select from './FormComponents/Select'
import TextInputSingle from './FormComponents/TextInputSingle'
import TextInputMulti from './FormComponents/TextInputMulti'

class ContactForm extends Component {

    constructor(props) {

        super(props)

        // this is all internal/local state as
        // the form gathers data and becomes a
        // 'submittable' data-set

        this.state = {
            form: {
                valid: false,
                salutation: '',
                firstName: '',
                surname: '',
                emailAddress: '',
                comments: '',
                colour: ''
            }
        }

        this.validation = {

            // keys must match the id of
            // the associated field components

            salutation: [
                {
                    rule: () => {
                        return this.state.form.salutation.length > 0
                    },
                    message: 'Salutation is required'
                },
                {
                    rule: () => {
                        return this.state.form.salutation.indexOf('M') > -1
                    },
                    message: 'Salutation must contain an "M"'
                }
            ],
            colour: [
                {
                    rule: () => {
                        return this.state.form.colour.length != ''
                    },
                    message: 'Colour is required'
                }
            ]
        }

    }

    isFormValid() {
        // see if all form level validation is satisfied
        let formValid = true
        for (const key of Object.keys(this.validation)) {
            for (let validation of this.validation[key]) {
                if (!validation.rule()) {
                    formValid = false
                    continue
                }
            }
            if (!formValid) {
                return formValid
            }
        }
        return formValid
    }

    handleInputChange(evt) {
        // Track form state
        let form = this.state.form
        form[evt.target.name] = evt.target.value
        // run validation on every keystroke
        // todo: this could be an option: onlyValidateFormOnSave="true"
        if (!this.isFormValid()) {
            form.valid = false
        } else {
            form.valid = true
        }
        this.setState({form})
    }

    handleSubmit(evt) {
        evt.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(evt) => this.handleSubmit(evt)}>

                <Checkboxes id="somecheckboxes" label="Some Checkboxes"
                            onChange={(evt) => {
                                this.handleInputChange(evt)
                            }}
                            options={[{value: '', label: 'Choose colour'},
                                {value: 'red', label: 'Red'},
                                {value: 'blue', label: 'Blue'}]}/>

                <TextInputSingle onChange={(evt) => {
                    this.handleInputChange(evt)
                }}
                                 id="salutation"
                                 label="Salutation"
                                 validation={this.validation.salutation}/>

                <TextInputSingle onChange={(evt) => {
                    this.handleInputChange(evt)
                }} id="firstName" value={this.state.form.firstName}/>

                <TextInputSingle onChange={(evt) => {
                    this.handleInputChange(evt)
                }} id="surname" value={this.state.form.surname}/>

                <TextInputMulti label="Your Comments" id="comments">{this.state.form.comments}</TextInputMulti>

                <Select id="colour"
                              label="Choose a colour"
                              value={this.state.form.colour}
                              options={[{value: '', label: 'Choose colour'},
                                  {value: 'red', label: 'Red'},
                                  {value: 'blue', label: 'Blue'}]}
                              validation={this.validation.colour}
                              onChange={(evt) => {
                                  this.handleInputChange(evt)
                              }}
                />

                <p>This form is {this.state.form.valid ? 'valid' : 'not valid'}</p>

                <button type="submit">Submit</button>

            </form>
        )
    }
}


export default ContactForm









