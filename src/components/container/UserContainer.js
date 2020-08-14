import React, { Component } from 'react'
import LoginForm from '../pages/user/LoginForm'
import { connect } from "react-redux";
class UserContainer extends Component {
    render() {
        return (
            <div>
                <LoginForm 
                loginUser={this.props.login}
                email={this.props.email}
                password={this.props.password}
                handleChangeUser={this.props.handleChangeUser}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { 
        email : state.user.email,
        password : state.user.password
    }   
};

const mapDispatchToProps = (dispatch) => {
    return {
        login : id => dispatch({type : "LOGIN",data : id}),
        handleChangeUser : e => dispatch({type : "HANDLECHANGEUSER",data : { name : [e.target.name], value: e.target.value}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);