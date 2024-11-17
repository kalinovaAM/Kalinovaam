const mysql = require("mysql2");

const db_connection = mysql
    .createConnection({
        host: "127.0.0.1", // имя хоста
        user: "root", // имя пользователя
        database: "MITE41_Kalinova", // имя базы данных
        password: "admin", // пароль от базы данных
    })
    .on("error", (err) => {
        console.log("Failed to connect to Database - ", err);
    });

module.exports = db_connection;
