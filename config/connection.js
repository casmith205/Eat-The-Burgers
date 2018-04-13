// Require mysql 
var mysql = require("mysql");

// Create the connection
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: "burgers_db"
});

// Connect and log the connection threadId
connection.connect(function(err, data){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// Export the connection
module.exports = connection;