import React, { useState, useEffect } from 'react';

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeUsername = e => {
        setUsername(e.target.value)
    }

    const handleChangePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = event => {
        console.log(username)
        console.log(password)
        event.preventDefault()

        const url = 'http://friendo.app.localhost:8000/login';

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: username, 
                password: password })
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        < div >
            <h4>Log in</h4>
            <form onSubmit={handleSubmit}>

                <div>
                    <b>username:</b>
                    <input type="text" name="username" onChange={handleChangeUsername}></input>
                </div>

                <div>
                    <b>password:</b>
                    <input type="text" name="password" onChange={handleChangePassword}></input>
                </div>

                <input type="submit" name="Login"></input>

            </form>
        </div >
    );
}
