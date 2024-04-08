const express = require("express");
const fs = require("fs");
const mysql = require("mysql");

//Create Connection
const db = mysql.createConnection ({
    host: "127.0.0.1",
    user: "root",
    database: "typingtestDB"
});
//Connect
db.connect(err => {
    if(err) throw err;
    console.log("MySql Connected...");
});

//Init App
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/setup", (req, res) => {
    let sql = "INSERT INTO words (word) VALUES ?";
    fs.readFile("words.txt", "utf-8", (err, data) => {
        if (err) throw err;
        let words = data.split(/\r\n/);
        let nestedWords = words.map(word => {
            return [word]
        });
        console.log(nestedWords);
    })
   // db.query(sql, (err, result) => {
   //     if(err) throw err;
   //     res.send("Created Table");
   // })
})

app.listen(3000, () => {
    console.log("Server has started on PORT 3000");
})