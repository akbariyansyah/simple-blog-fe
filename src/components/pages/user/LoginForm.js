import React, { useState } from 'react';
import '../../../App.css'
import axios from 'axios'
import Main from '../home/Main'
// import swal from 'sweetalert'
import { Redirect } from 'react-router-dom'

const LoginForm = props => {

    
    const [state, setState] = useState({
        email: "",
        emailMessage: "enter your email",
        password: "",
        passwordMessage: "enter your password",
        responseCode: 0,
        nextPath: "",
        id: 0,
        isLoggedIn: false
    })

    const login = (e) => {
        e.preventDefault()
        const user = {
            email: state.email,
            password: state.password
        }
        axios.post('/login', user)
            .then(res => {
                console.log(res.data.user.id)
                if (res.data.status === 200) {
                    let id = res.data.user.id
                    console.log(id)
                    setState({
                        ...state,
                        responseCode: state.responseCode = res.data.status,
                        nextPath: state.nextPath = `/article/${id}`,
                        isLoggedIn: state.isLoggedIn = true,
                        id: state.id = id
                    })
                    alert("Good job!", "Login Successfull", "success");
                    props.loginUser(id)
                } else {
                    alert("Oops...!", "Login Failed", "error");
                    setState({
                        ...state,
                        nextPath: "/"
                    })
                }

            })
            .catch(function (error) {
                console.log(error);
            });

    }
    let button
    (state.email === "" || state.password === "")
        ? button = <button type="submit" className="btn btn-secondary" disabled>Login</button>
        : button = <button type="submit" className="btn btn-primary" onClick={login}>Login</button>

    if (state.responseCode === 200 && state.isLoggedIn === true) {
        console.log("berhasil login")
        return <Redirect to={state.nextPath} Component={() => <Main id={state.id} />} />
    }
    return (
        <div className="row" style={{ color: "black" }}>
            <div className="inner">
                <div className="col-lg-12 right-side">
                    <div className="form">
                        <div className="card">
                            <div className="card-body">
                                <div className="card=title">
                                    <h2><i style={{ paddingRight: '20px' }} class="fa fa-sign-in" aria-hidden="true"></i>Login Now</h2>
                                </div>
                                <form>
                                    <div claclassNamess="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" name="email" class="form-control" onChange={e => setState({ ...state, email: e.target.value })} placeholder="Enter email" />
                                        <small className="form-text text-muted">{state.emailMessage}</small>
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" name="password" className="form-control" onChange={e => setState({ ...state, password: e.target.value })} placeholder="Password" />
                                        <small className="form-text text-muted">{state.passwordMessage}</small>

                                    </div>
                                    {button}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginForm
