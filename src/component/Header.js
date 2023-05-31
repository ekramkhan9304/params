import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <br />
            <br />
            <Link to="/user/1">user 1</Link>
            <br />
            <Link to="/user/2">user 2</Link>
            <br />
            <Link to="/user/3">user 3</Link>

        </>
    )
}

export default Header
