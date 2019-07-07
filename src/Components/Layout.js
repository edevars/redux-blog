import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => (
    <>
        <nav>
            <Link to="/">Usuarios</Link>
            <Link to="/tareas">Tareas</Link>
        </nav>
        {props.children}
    </>
)

export default Layout