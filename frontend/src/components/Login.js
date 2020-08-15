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
