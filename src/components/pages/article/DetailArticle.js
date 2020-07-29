import React from 'react'

export default function DetailArticle(props) {
    console.log(props.location)
    return (
        <div className="row">
            <div className="col-lg-12">
                <h1>detail page</h1>
                <h1>{props.location.state.title}</h1>
                <p>{props.location.state.content}</p>
            </div>
        </div>
    )
}
