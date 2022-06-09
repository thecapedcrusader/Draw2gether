import React, { Component } from 'react';

const Navbar = (props) => {
    return (
        <div>
            <h1>Draw2gether</h1>
            <div className="navbar">
                <form method="POST" action='/login'>
                <input name="username" type="text" placeholder="Username"></input>
                <input name="password" type="password" placeholder="Password"></input>
                <input type='submit' value="login"></input>
                </form>
                <a href='/signup'>Sign up</a>
            </div>
        </div>
    )
}

export default Navbar;