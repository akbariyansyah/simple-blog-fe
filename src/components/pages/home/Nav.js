import React from 'react'
import { Link } from 'react-router-dom'
import '../../../App.css'
function Nav(match) {
    return (
        <div className="container">
        <nav class="navbar mt-3 mb-1 navbar-expand-lg navbar-light bg-light">
            <p class="navbar-brand"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Simple Blog </p>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link to={`/article/${match.id}`}>
                            <p class="nav-link">Home</p>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to={`/article/${match.id}/create`}>
                            <p class="nav-link">Create article</p>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to={`/article/${match.id}/myarticles`}>
                            <p class="nav-link">My Article</p>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to={`/article/${match.id}/myarticles`}>
                            <p class="nav-link">Log out</p>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
        </div>
    )
}
export default Nav