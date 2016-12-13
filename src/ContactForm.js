import React, {Component} from 'react';
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
                colour: '',
                somecheckboxes: ''
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

    handleInputChange({name, value}) {
        // Track form state
        let form = this.state.form
        form[name] = value
        // run validation on every keystroke
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
        console.log('ContactForm state')
        console.log(this.state)
        return (

            <form>

                <Checkboxes id="somecheckboxes" label="Some Checkboxes"
                            onChange={({name,value}) => {
                                this.handleInputChange({name,value})
                            }}
                            options={[
                                {value: 'green', checked: true, label: 'Green'},
                                {value: 'red', checked: true, label: 'Red'},
                                {value: 'blue', checked: true, label: 'Blue'}
                            ]}/>


                <TextInputSingle onChange={({name,value}) => {
                    this.handleInputChange({name,value})
                }}
                                 id="salutation"
                                 label="Salutation"
                                 validation={this.validation.salutation}/>

                <TextInputSingle onChange={({name,value}) => {
                    this.handleInputChange({name,value})
                }} id="firstName" value={this.state.form.firstName}/>




                <TextInputSingle onChange={({name,value}) => {
                    this.handleInputChange({name,value})
                }} id="surname" value={this.state.form.surname}/>



                <TextInputMulti label="Your Comments" id="comments">{this.state.form.comments}</TextInputMulti>



                <Select id="colour"
                        label="Choose a colour"
                        value={this.state.form.colour}
                        options={[{value: '', label: 'Choose colour'},
                            {value: 'red', label: 'Red'},
                            {value: 'blue', label: 'Blue'}]}
                        validation={this.validation.colour}
                        onChange={({name,value}) => {
                            this.handleInputChange({name,value})
                        }}
                />


                <p>This form is {this.state.form.valid ? 'valid' : 'not valid'}</p>


                <button onClick={(evt) => {
                    this.handleSubmit(evt)
                }}>Submit
                </button>



            </form>
        )
    }
}

export default ContactForm









