import React, {Component} from 'react';

class FormComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {value: '', valid: true, pristine: true, errorMessages: []}
    }

    handleChange(evt) {
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

    processValue({type, value, checked, name}) {
        const doChangeEvent = this.props.onChange
        if (type === 'checkbox') {
            // controlled component, manage value
            let newVal = ''
            let currStateVal = this.state.value
            if (checked) {
                let addComma = currStateVal != ''
                newVal = currStateVal + (addComma ? ',' : '') + value
                this.setState({value: newVal})
            } else {
                if (currStateVal.indexOf(',' + value) > -1) {
                    newVal = currStateVal.replace(( ',' + value ), '')
                } else {
                    newVal = currStateVal.replace(( value ), '')
                }
                // remove possible leading comma
                if (newVal.indexOf(',') == 0) {
                    newVal = newVal.substring(1, newVal.length)
                }
                this.setState({value: newVal})
            }

            if (doChangeEvent) {
                this.props.onChange({name: name, value: newVal})
            }

        } else {

            this.setState({value: value})

            if (doChangeEvent) {
                this.props.onChange({name: name, value: value})
            }

        }
    }

}

export default FormComponent