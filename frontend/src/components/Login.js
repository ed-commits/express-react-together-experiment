import React from "react";

const Login = () => (
    <div>
        <h4>Log in</h4>
        <form action="post">

            <div>
                <b>username:</b>
                <input type="text" name="username"></input>
            </div>

            <div>
                <b>password:</b>
                <input type="text" name="password"></input>
            </div>

            <input type="submit" name="Login"></input>

        </form>
    </div>
);

export default Login;
