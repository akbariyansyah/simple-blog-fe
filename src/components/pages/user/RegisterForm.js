import React from 'react';
// import swal from 'sweetalert'
import '../../../App.css'
// import RegisterUser from '../../../services/RegisterService'
import axios from 'axios'


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
        return (
            <div>
                <div className="row">
                    <div className="inner">
                        <div className="col-lg-12 right-side">
                            <div className="form">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card=title">
                                            <h2><i style={{ paddingRight: '20px' }} class="fa fa-sign-in" aria-hidden="true"></i>Register Now</h2>
                                        </div>
                                        <form>
                                            <div claclassNamess="form-group">
                                                <label for="exampleInputUsername">Username</label>
                                                <input type="text" name="username" autocomplete="off" class="form-control" onChange={this.handleInputChange} placeholder="Enter username" />
                                            </div>
                                            <div claclassNamess="form-group">
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input type="email" name="email" autocomplete="off" class="form-control" onChange={this.handleInputChange} placeholder="Enter email" />
                                                <small className="form-text text-muted">{this.state.emailMessage}</small>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input type="password" name="password" className="form-control" onChange={this.handleInputChange} placeholder="Password" />
                                                <small className="form-text text-muted">{this.state.passwordMessage}</small>

                                            </div>
                                            <button type="submit" className="btn btn-primary" onClick={this.register}>register</button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <ul>
                        {this.state.users.map(user => <li>{`username : ${user.username}, email : ${user.email}`}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Register