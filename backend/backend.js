const express = require("express");
const path = require("path");
const { Pool, Client } = require('pg');
var cors = require('cors');
const parser = require('body-parser');
const cookieParser = require('cookie-parser')

const app = express();
const port = process.env.PORT || "8000";
const pool = new Pool();

app.use(parser.json());
// app.use(cors()); // if you forget the () your server does an infinite loop
app.use(cookieParser())

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});

app.get("/users", (req, res) => {
    pool.query("SELECT * FROM users;", (err, sqlRes) => {
        if (err) {
            console.log(err)
        } else {
            console.log(sqlRes.rows);
            res.json(sqlRes.rows);
        }
    })
});

app.get("/secret", (req, res) => {
    const username = req.cookies['loggedin'];

    if (!username) {
        res.json(0);
        return;
    }

    const newData = req.body;
    pool.query("SELECT secret FROM users WHERE name = $1;", [username], (err, sqlRes) => {
        if (err || sqlRes.rows == 0) {
            console.log(err)
        } else {
            res.json(sqlRes.rows[0].secret);
        }
    })
});

app.post("/login", (req, res) => {
    const newData = req.body;

    console.log('checking the users password from the db');

    pool.query("SELECT password FROM users WHERE name = $1;", [newData.username], (err, sqlRes) => {
        if (err) {
            console.log(err)
        }
        else if (sqlRes.rows.length !== 0) {
            let knownPassword = sqlRes.rows[0].password
            console.log(`Password is ${knownPassword}`);

            if (knownPassword === newData.password) {
                console.log(`login success`);
                // login successful

                res.cookie('loggedin', newData.username, {
                    maxAge: 60 * 60 * 1000, // 1 hour
                    domain: 'friendo.app.localhost'
                    //            httpOnly: true,
                    //            secure: true,
                    //            sameSite: true,
                })
                res.json("login successful")
                return;
            }
            else {
                console.log(`login failed, password mismatch <${knownPassword}> <${newData.password}>`);
            }
        }
        res.json(0);
    })
})

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
