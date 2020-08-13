import React from 'react'


function LoginComponent(props) {
    const {handleInputChange,login,emailMessage,passwordMessage} = props
    return (
    <div className="row">
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
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" name="email" autocomplete="on" class="form-control" onChange={handleInputChange} placeholder="Enter email" />
                                            <small className="form-text text-muted">{emailMessage}</small>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" name="password" className="form-control" onChange={handleInputChange} placeholder="Password" />
                                            <small className="form-text text-muted">{passwordMessage}</small>

                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default LoginComponent