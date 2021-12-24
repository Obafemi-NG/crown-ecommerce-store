import React from 'react';
import FormInput from '../forminput/forminput.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState ({
            email : '',
            password : '',
        })
    }

    handleChange = (e) => {
        const { value , name} = e.target;

        this.setState({[name] : value})
    }

    render () {
        return (
            <React.Fragment>
                <div className = 'sign-in'>
                    <h2 className = 'title'>HAVE AN ACCOUNT WITH US ALREADY?</h2>
                    <span>Sign in with your Email and Password</span>
                    <form onSubmit = {this.handleSubmmit}>
                        <FormInput type = 'text' name = 'email' value = {this.state.email} onChange = {this.handleChange} label = 'email' required />
                        

                        <FormInput type = 'password' name = 'password' value = {this.state.password} onChange = {this.handleChange} label = 'password' required />

                        <div className = 'buttons'>
                        <CustomButton type = 'submit' value = 'SIGN IN' > Sign in</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn > Sign in With Google</CustomButton>
                        </div>
                        

                        
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default SignIn;