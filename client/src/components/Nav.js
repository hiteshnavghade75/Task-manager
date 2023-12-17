import React from 'react'
import Logout from './Logout'

const Nav = () => {

    const auth = localStorage.getItem('token')

    return <div>
        <nav className="navbar navbar-expand-lg bg-info-subtle">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/add-task">Add Task</a>
                        </li>
                    </ul>
                    <div>
                        {auth ?
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"><li className="nav-item">
                                <Logout />
                            </li></ul>
                            :
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/register">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </nav>
    </div>
}

export default Nav;