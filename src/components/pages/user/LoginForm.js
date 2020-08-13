import React, { useState } from 'react';
import '../../../assets/css/login-form.css'
import axios from 'axios'
import Main from '../home/Main'
import swal from 'sweetalert';
import user_profile from '../../../assets/profile-user.svg'
import { Redirect, Link } from 'react-router-dom'
import welcome from '../../../assets/welcome.jpg'
const LoginForm = props => {
    const [state, setState] = useState({
        email: "",
        emailMessage: "enter your email",
        password: "",
        passwordMessage: "minimal 3 character",
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
                console.log(res.data.status)
                if (res.data.status === 200) {
                    let user_id = res.data.user.id
                    console.log(user_id)
                    setState({
                        ...state,
                        responseCode: state.responseCode = res.data.status,
                        nextPath: state.nextPath = `/article/${user_id}`,
                        isLoggedIn: state.isLoggedIn = true,
                        id: user_id
                    })
                    swal("Good job!", "Login Successfull", "success");
                    console.log(state.id)
                    console.log(state.nextPath)
                    props.loginUser(user_id)
                } else {
                    swal("Oops...!", "Login Failed", "error");
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
        ? button = <button type="submit" className="btn-login-disabled" disabled>LOGIN</button>
        : button = <button type="submit" className="btn-login" onClick={login}>LOGIN</button>

    if (state.responseCode === 200 && state.isLoggedIn === true) {
        console.log("berhasil login")
        return <Redirect to={state.nextPath} Component={() => <Main id={state.id} />} />
    }
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
                            <td> <h2>Login Now</h2></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="email" name="email" class="form-input" onChange={e => setState({ ...state, email: e.target.value })} placeholder="Enter email" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" name="password" className="form-input" onChange={e => setState({ ...state, password: e.target.value })} placeholder="Password" />

                            </td>
                        </tr>
                        <tr>
                            <td>{button}</td>
                        </tr>
                        <tr>
                            <td><b>New User ? </b>
                                <Link to="/register">
                                    <span>Sign Up</span>
                                </Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default LoginForm
