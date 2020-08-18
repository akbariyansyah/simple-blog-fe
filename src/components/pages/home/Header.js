import React from 'react'
import '../../../App.css'
function header() {
    return (
        // <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div class="jumbotron jumbotron-fluid" id="jumbotron">
                    {/* <div class="container"> */}
                        <h1 class="display-4">Welcome to simple blog</h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    {/* </div> */}
                </div>
            </div>
            <div className="col-lg-12">
            <div class="container">
                        <p class="lead">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
                        </p>
                    </div>
            </div>
        </div >
        // </div>

    )
}
export default header