import React from 'react';

class NewContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', phone: ''};

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangePhone(event) {
        this.setState({phone: event.target.value});
    }

    handleSubmit(event) {
        this.props.handleAddContact({name: this.state.name, phone: this.state.phone})
        event.preventDefault();
    }

    render() {
        return (
        <tr>
            <td>
            <label>
                Nom :
                <input type="text" value={this.state.name} onChange={this.handleChangeName} />
            </label>
            </td>
            <td>
            <label>
                Téléphone :
                <input type="text" value={this.state.phone} onChange={this.handleChangePhone} />
            </label>
            </td>
            <td colSpan="2">
            <input type="button" value="Add Contact" onClick = {this.handleSubmit}/>
            </td>
        </tr>
        );
    }
}

export default NewContact;