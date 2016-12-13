import React, {Component} from 'react';
import FormComponent from './FormComponent'

class Checkboxes extends FormComponent {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        let newValue = ''
        this.props.options.map((opt, index) => {
            if (opt.checked) {
                newValue += opt.value + (index == this.props.options.length - 1 ? '' : ',')
            }
        })
        this.processValue({type: 'checkbox', value: newValue, checked: true, name:this.props.id})
    }

    render() {
        return (
            <div className="checkboxes">
                <div>
                    <label htmlFor={this.props.id}>{this.props.label}</label>
                    {
                        this.props.options.map((opt, index) => {
                            return <input key={index}
                                          type="checkbox"
                                          id={this.props.id}
                                          name={this.props.id}
                                          defaultChecked={opt.checked}
                                          value={opt.value}
                                          onChange={(evt) => {
                                              this.handleChange(evt)
                                          }}
                            />
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

export default Checkboxes