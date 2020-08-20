import React from 'react'
import '../../../App.css'
import image from '../../../assets/images/typewriter.svg'
function header() {
    return (
        // <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div class="jumbotron jumbotron-fluid" id="jumbotron">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-5 left">
                            <h1 style={{fontWeight:"bold"}} class="display-4 mb-4">Welcome to simple blog</h1>
                            <p class="lead mt-4">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                            <button className="welcome-button">CREATE POST !</button>
                        </div>
                        <div className="d-none d-lg-block col-lg-7 right">
                           <img src={image}/>
                        </div>
                    </div>
                </div>

                </div>
            </div>
            <div className="col-lg-12">
                <div class="container">
                    <div className="row">
                        <div className="col-lg-6">
                            
                        </div>
                        <div className="col-lg-6">

                        </div>
                    </div>
                </div>
            </div>
        </div >
        // </div>

    )
}
export default header