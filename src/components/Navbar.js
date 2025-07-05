import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-gradient bg-primary shadow-sm py-3 px-4 rounded-bottom">
            <NavLink className="navbar-brand fw-bold fs-4" to="/">Task Manager</NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link active fw-semibold" to="#">Home<span className='sr-only'>(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-semibold" to="/add-task">Add Task</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-semibold" to="/">All Tasks</NavLink>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar
