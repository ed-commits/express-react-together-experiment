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
app.use(cors()); // if you forget the () your server does an infinite loop
app.use(cookieParser())

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});

app.get("/users", (req, res) => {
    pool.query("SELECT * FROM users;", (err, sqlRes) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(sqlRes.rows);
            res.json(sqlRes.rows);
        }
    })
});

app.post("/login", (req, res) => {
    const newData = req.body;

    console.log(req.cookies['nameOfCookie'])

    if (newData.username == newData.password) {
        // login successful

        res.cookie('nameOfCookie', 'cookieValue', {
            maxAge: 60 * 60 * 1000, // 1 hour
            domain: 'friendo.app.localhost:3000'
            //            httpOnly: true,
            //            secure: true,
            //            sameSite: true,
        })
        res.json("login successful")

    }
    else {
        // login failed
        res.json("failed to login")
    }

})

let dirname = __dirname + "/../frontend/"
app.use(express.static(path.join(dirname, 'build')))
app.get('/app/', (req, res) => {
    res.sendFile(path.join(dirname, 'build', 'index.html'))
})
app.get('/app/users', (req, res) => {
    res.sendFile(path.join(dirname, 'build', 'index.html'))
})
app.get('/app/login', (req, res) => {
    res.sendFile(path.join(dirname, 'build', 'index.html'))
})

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
