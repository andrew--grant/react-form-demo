import React from 'react';
import FormComponent from './FormComponent'

class CheckboxGroup extends FormComponent {

    componentWillMount() {
        let newValue = ''
        this.props.options.map((opt, index) => {
            if (opt.checked) {
                newValue += opt.value + (index === this.props.options.length - 1 ? '' : ',')
            }
        })
        this.processValue({type: 'checkbox', value: newValue, checked: true, name: this.props.id})
    }

    handleCheckboxGroupChange(evt) {
        this.handleChange(evt)
        // todo: don't want the checkboxes sending individual
        // events, we want to create a 'handleCheckboxGroupChange'
        // event and pass it up


    }

    render() {
        return (
            <div className={this.getClassName()}>
                <div>
                    {
                        this.props.options.map((opt, index) => {
                            return (
                                <div key={index}>
                                    <label>{opt.label}
                                        <input
                                            type="checkbox"
                                            id={this.props.id}
                                            name={this.props.id}
                                            defaultChecked={opt.checked}
                                            value={opt.value}
                                            onChange={(evt) => {
                                                this.handleCheckboxGroupChange(evt)
                                            }}
                                        /></label>
                                </div>)
                        })
                    }
                </div>

                <div>
                    {
                        this.state.errorMessages.map(
                            function (val, index) {
                                return <p className="error-message" key={index}>{val}</p>
                            }
                        )
                    }
                </div>
            </div>

        );
    }
}

export default CheckboxGroup