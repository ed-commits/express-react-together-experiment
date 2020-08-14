const express = require("express");
const path = require("path");
const { Pool, Client } = require('pg');
var cors = require('cors');

const app = express();
const port = process.env.PORT || "8000";
const pool = new Pool();

app.use(cors);

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});
/*
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
*/
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
