import React, { useState } from 'react';
import '../../../assets/css/login-form.css'
import axios from 'axios'
import Main from '../../../routes/Main'
import swal from 'sweetalert';
import {loginUser} from '../../../services/UserApi'
import user_profile from '../../../assets/profile-user.svg'
import { Redirect, Link } from 'react-router-dom'
import welcome from '../../../assets/images/register-image.jpg'


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            username: "",
            email: "",
            emailMessage: "enter your email",
            password: "",
            passwordMessage: "minimal 3 character"
        }
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        let validation1 = this.state.email.includes("@")
        let validation2 = this.state.email.includes(".")
        if (validation1 && validation2) {
            this.setState({
                emailMessage: this.state.emailMessage = "email valid"
            })
        } else {
            this.setState({
                emailMessage: this.state.emailMessage = "email tidak valid"
            })
        }
        if (this.state.password.length < 3) {
            this.setState({
                passwordMessage: this.state.passwordMessage = "password tidak valid"
            })
        } else if (this.state.password.length >= 3) {
            this.setState({
                passwordMessage: this.state.passwordMessage = "password valid"
            })
        }

    }
    register = (event) => {
        event.preventDefault()
        if (this.state.emailMessage === "email valid" && this.state.passwordMessage === "password valid") {
            const user = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            }
            alert("Sedang register....")
            axios.post('/register', user)
                .then(res => {
                    console.log(res)
                    console.log(res.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert("hmmm...email dan password kamu masih salah")
        }

    }
   
    render() {
        let button
        (this.state.email === "" || this.state.password === "")
            ? button = <button type="submit" className="btn-login-disabled" disabled>REGISTER</button>
            : button = <button type="submit" className="btn-login" onClick={this.register}>REGISTER</button>
    
        return (
            <div className="row login-page" style={{ color: "black" }}>

            <div className="col-lg-8 d-none d-lg-block image-container">
                <div>
                    <p>Welcome to the simple blog</p>
                    <img className="image" src={welcome}></img>
                </div>
            </div>
            <div className="col-lg-4 login-form-user">
                <div className="form">
                    <table className="form-table">
                        <tr>
                            <td><img src={user_profile} /> </td>
                        </tr>
                        <tr>
                            <td> <h2>Register Now</h2></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="username" autocomplete="off" name="username" class="form-input" onChange={this.handleInputChange}  placeholder="Enter username" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="email" autocomplete="off" name="email" class="form-input" onChange={this.handleInputChange}  placeholder="Enter email" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" name="password" className="form-input" onChange={this.handleInputChange}  placeholder="Password" />
                            </td>
                        </tr>
                        <tr>
                            <td>{button}</td>
                        </tr>
                        <tr>
                            <td><b>Already have an account ? </b><br></br>
                                <Link to="/login">
                                    <span>Sign In</span>
                                </Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}

export default Register