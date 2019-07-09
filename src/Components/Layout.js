import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => (
    <>
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img alt="Logo" src="https://lh3.googleusercontent.com/Ax2wQYxjDITuZEpc6K9EDYPG7C839tb4PApia4Tmf18u8XehB-twqhVgDVPgxxExkr4" />
                </a>
                <Link className="navbar-link is-primary" to="/">Usuarios</Link>
                <Link className="navbar-link is-primary" to="/tareas">Tareas</Link>
            </div>
        </nav>
        {props.children}
    </>
)

export default Layout