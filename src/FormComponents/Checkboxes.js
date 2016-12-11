import React, {Component} from 'react';
import FormComponent from './FormComponent'

class Checkboxes extends FormComponent {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log("componentWillMount");
        this.props.options.map((opt, index) => {
            if (opt.checked) {
                // set default value
                this.processValue({type: 'checkbox', value: opt.value, checked: true})
                console.log("z");
            }
        })
    }

    render() {

        // if a checkbox is default checked, how will state
        // be set given no change event occurs?

        return (
            <div className="checkboxes">
                <div>
                    <label htmlFor={this.props.id}>{this.props.label}</label>
                    {
                        this.props.options.map((opt, index) => {
                            if (opt.checked) {
                                // set default value
                                // todo: componentDidMount???
                                // this.processValue({type: 'checkbox', value: opt.value, checked: true})
                            }
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
                        )}
                </div>
            </div>

        );
    }
}

export default Checkboxes