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

function sortWords(unfilteredwords) {
    let wordStore = [];
    for(let i=0; i<500; i++) {
        let randomindex = Math.floor(Math.random() * 3000);
        wordStore.push(unfilteredwords[randomindex].word);
    }
    return wordStore;
}

//Init App
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    let sql = 'SELECT word FROM words';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        let wordStore = sortWords(result);
        // Rendering the EJS file
        res.render("index", {wordStore: wordStore});
    })
})

app.get("/setup", (req, res) => {
    
    // let sql = "CREATE TABLE words (id int AUTO_INCREMENT, word VARCHAR(255), PRIMARY KEY(id))";
    // db.query(sql, (err, result) => {
    //     if(err) throw err;
    //     res.send("Success");
    // })

    let sql = "INSERT INTO words (word) VALUES ?";
    fs.readFile("words.txt", "utf-8", (err, data) => {
        if (err) throw err;
        let words = data.split(/\r\n/);
        let nestedWords = words.map(word => {
            return [word]
        });
        db.query(sql, [nestedWords], (err, result) => {
        if(err) throw err;
        res.send("Inserted data");
        });
    });
});

app.listen(3000, () => {
    console.log("Server has started on PORT 3000");
});