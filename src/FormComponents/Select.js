import React from 'react';
import FormComponent from './FormComponent'

class Select extends FormComponent {

    render() {

        let defaultValue = ''
        this.props.options.map((opt) => {
            console.log(opt)
            if (opt.selected) {
                defaultValue = opt.value
                return false
            }
        })

        return (

            <div className="select">
                {this.getLabel()}
                <select
                    defaultValue={defaultValue}
                    className={this.getClassName()}
                    name={this.props.id} id={this.props.id}
                    onChange={(evt) => {
                        this.handleChange(evt)
                    }}>
                    {
                        this.props.options.map((opt, index) => {
                            return <option key={index} value={opt.value}>{opt.label}</option>
                        })
                    }
                </select>


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

export default Select