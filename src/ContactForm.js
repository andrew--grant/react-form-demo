import React, {Component} from 'react';
import CheckboxGroup from './FormComponents/CheckboxGroup'
import Select from './FormComponents/Select'
import TextInputSingle from './FormComponents/TextInputSingle'
import TextInputMulti from './FormComponents/TextInputMulti'

class ContactForm extends Component {

    constructor(props) {

        super(props)

        // Form level state (gathering a complete
        // and valid data set)

        this.state = {
            form: {
                valid: false,
                salutation: '',
                firstName: '',
                surname: '',
                comments: '',
                colour: '',
                foods: ''
            }
        }

        this.validation = {
            // keys must match the id of the associated field components
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
                        console.log('rulez colour')
                        return this.state.form.colour.length > 0
                    },
                    message: 'Colour is required'
                }
            ],
            foods: [
                {
                    rule: () => {
                        console.log('rulez foods')
                        return this.state.form.foods.length > 0
                    },
                    message: 'At least one food must be checked'
                }
            ]
        }
    }

    isFormValid() {
        // Form level validation
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
        // Track form state.
        let newForm = Object.assign({}, this.state.form, {[name]: value})
        this.setState({form: newForm}, () => {
            // After state has been updated, see if the
            // form is valid? Update state accordingly
            if (!this.isFormValid()) {
                this.setState({form: Object.assign({}, newForm, {valid: false})})
            } else {
                this.setState({form: Object.assign({}, newForm, {valid: true})})
            }
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        console.log('handleSubmit state')
        console.log(this.state)
    }

    render() {
        console.log('ContactForm state')
        console.log(this.state)
        return (

            <form>

                <CheckboxGroup id="foods"
                               onChange={({name, value}) => {
                                   this.handleInputChange({name, value})
                               }}
                               options={[
                                   {value: 'meat', checked: false, label: 'Meat'},
                                   {value: 'fish', checked: false, label: 'Fish'},
                                   {value: 'eggs', checked: false, label: 'Eggs'},
                                   {value: 'cheese', checked: true, label: 'Cheese'}
                               ]}/>

                <TextInputSingle onChange={({name, value}) => {
                    this.handleInputChange({name, value})
                }}
                                 id="salutation"
                                 label="Salutation"
                                 validation={this.validation.salutation}/>

                <TextInputSingle label="Other label" onChange={({name, value}) => {
                    this.handleInputChange({name, value})
                }} id="firstName" value={this.state.form.firstName}/>

                <TextInputSingle label="some label " onChange={({name, value}) => {
                    this.handleInputChange({name, value})
                }} id="surname" value={this.state.form.surname}/>

                <TextInputMulti label="Your Comments" id="comments" value={this.state.form.comments}
                                onChange={({name, value}) => {
                                    this.handleInputChange({name, value})
                                }}/>

                <Select id="colour"
                        options={[
                            {value: '', label: 'Please Choose a Frickin Colour'},
                            {value: 'red', label: 'Red'},
                            {value: 'blue', label: 'Blue'}
                        ]}
                        validation={this.validation.colour}
                        onChange={({name, value}) => {
                            this.handleInputChange({name, value})
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