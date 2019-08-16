import React, {Component} from 'react';
import './styles.styl'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "../../helpers/firebase";
import {Redirect} from 'react-router-dom';

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            valueEmail: '',
            valuePassword: '',
            validEmail: true,
            validPass: true,
            openTaskBoard: false
        }
    }

    handleChange = (e, name) => {
        this.setState({
            [name]: e.target.value
        })
    };

    putUserIntoDB = () => {
        if (this.state.validEmail && this.state.validPass) {
            firebase.firestore().collection('users').add({email: this.state.valueEmail, pass: this.state.valuePassword})
            this.setState({
                openTaskBoard: true
            })
        }
    };

    validateForm = () => {
        this.setState({
            validEmail: this.state.valueEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null,
            validPass: this.state.valuePassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i) !== null
        }, () => this.putUserIntoDB());
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <form className='registration-form' onSubmit={this.handleSubmit}>
                    <h1 className="form-title">Registration Form</h1>
                    <TextField type='email' label="E-mail" value={this.state.valueEmail}
                               InputProps={{
                                   style: {
                                       fontSize: '0.8rem'
                                   }
                               }}
                               onChange={(e) => this.handleChange(e, 'valueEmail')}/>
                    {!this.state.validEmail &&
                    <p className="error-email">You e-mail is not valid. Please check this field!</p>}
                    <TextField type='password' label="Password" value={this.state.valuePassword}
                               style={{
                                   marginTop: 30
                               }}
                               InputProps={{
                                   style: {
                                       fontSize: '0.8rem'
                                   }
                               }}
                               onChange={(e) => this.handleChange(e, 'valuePassword')}/>
                    {!this.state.validPass &&
                    <p className="error-pass">You password is not valid. Please check this field!</p>}
                    <Button variant="contained" color="primary" style={{
                        marginTop: 30,
                        background: "#600bb4"
                    }} onClick={this.validateForm}>
                        Register
                    </Button>
                    {this.state.openTaskBoard && <Redirect to='/task-board'/>}
            </form>
        );
    }
}

export default Registration;