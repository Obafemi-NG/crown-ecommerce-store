import React from 'react';
import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../forminput/forminput.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from 'firebase/auth';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            email : '',
            displayName : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, displayName, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert('Password entered do not match')
            return;
        }

        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            await createUserProfileDocument(user , {displayName});

            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            })
        } catch (error) {
            console.log(`can create user bacause ${error}` );
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    } 

    render () {
        const {email, displayName, password, confirmPassword} = this.state;
        return ( 
            <div className = 'sign-up'>
                <h2 className = 'title'>YOU DO NOT HAVE AN ACCOUNT WITH US YET? </h2>
                <span>Create an account with us using email and password</span>
                <form className = 'sign-in-form' onSubmit={this.handleSubmit}>
                    <FormInput type = 'text' name = 'displayName' label = 'display name' value = {displayName} onChange = {this.handleChange} required />
                    <FormInput type = 'text' name = 'email' label = 'email' value = {email} onChange = {this.handleChange} required />
                    <FormInput type = 'password' name = 'password' label = 'password' value = {password} onChange = {this.handleChange} required />
                    <FormInput type = 'password' name = 'confirmPassword' label = 'confirm password' value = {confirmPassword} onChange = {this.handleChange} required />
                    <CustomButton type = 'submit'>SIGN UP</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignUp;