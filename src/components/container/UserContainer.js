import React, { Component } from 'react'
import LoginForm from '../pages/user/LoginForm'
import { connect } from "react-redux";
class UserContainer extends Component {
    render() {
        return (
            <div>
                <LoginForm loginUser={this.props.login}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login : id => dispatch({type : "LOGIN",data : id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);