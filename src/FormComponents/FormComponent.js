import React, {Component} from 'react';

class FormComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {value: '', valid: true, pristine: true, errorMessages: []}
    }

    handleChange(evt) {

        if (this.props.onChange) {
            this.props.onChange(evt)
        }

        if (evt.target.value) {
            this.processValue(evt.target);
            // the field is no longer pristine
            this.setState({pristine: false})

            // If validation(s), run them
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

    processValue({type, value, checked}) {

        let fn = () => {
            console.log(this.state);
        }
        if (type === 'checkbox') {

            // controlled component, manage value
            let newVal = ''
            let currStateVal = this.state.value
            if (checked) {console.log("t" + value);
                newVal = currStateVal + value + ','
                this.setState({value: newVal}, fn)
            } else {
                newVal = currStateVal.replace(( value + ','), '')
                this.setState({value: newVal}, fn)
            }
        } else {
            this.setState({value: value})
        }
    }

}

export default FormComponent