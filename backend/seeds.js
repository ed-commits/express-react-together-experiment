const { Pool, Client } = require('pg');
const pool = new Pool();
let client = null;

const sqlOrDie = (query) => {
    console.log(query);
    return client.query(query)
}

(async function () {
    client = await pool.connect()

    await sqlOrDie("DROP TABLE IF EXISTS users;");
    await sqlOrDie("CREATE TABLE users (name VARCHAR(50) NOT NULL);");
    await sqlOrDie("INSERT INTO users (name) VALUES ('ed');");
    await sqlOrDie("INSERT INTO users (name) VALUES ('jack');");
    await sqlOrDie("INSERT INTO users (name) VALUES ('craig');");
    await sqlOrDie("INSERT INTO users (name) VALUES ('nourhan');");
    await sqlOrDie("INSERT INTO users (name) VALUES ('rumen');");

    client.release()
})()
