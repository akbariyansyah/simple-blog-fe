import React, { useState } from 'react';
import '../../../assets/css/login-form.css'
import axios from 'axios'
import Main from '../home/Main'
import swal from 'sweetalert';
import {loginUser} from '../../../services/UserApi'
import user_profile from '../../../assets/profile-user.svg'
import { Redirect, Link } from 'react-router-dom'
import welcome from '../../../assets/images/welcome.jpg'
const LoginForm = props => {
    const [state, setState] = useState({
        responseCode: 0,
        nextPath: "",
        id: 0,
        isLoggedIn: false
    })

    const login = (e) => {
        e.preventDefault()
        const user = {
            email: props.email,
            password: props.password
        }
        loginUser(user).then(res => {
            console.log(res)
            if (res.data.status === 200) {
            let user_id = res.data.user.id
                setState({
                    ...state,
                    responseCode: state.responseCode = res.data.status,
                    nextPath: state.nextPath = `/article/${user_id}`,
                    isLoggedIn: state.isLoggedIn = true,
                    id: user_id
                })
                props.loginUser(user_id)
                swal("Good job!", "Login Successfull", "success")
            } else {
                setState({
                    ...state,
                    nextPath: "/"
                })
                swal("Oops...!", "Login Failed", "error");
            }
        })
       

    }
    let button
    (props.email === "" || props.password === "")
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
                                <input type="email" autocomplete="off" name="email" class="form-input" onChange={props.handleChangeUser} placeholder="Enter email" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" name="password" className="form-input" onChange={props.handleChangeUser} placeholder="Password" />
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
