// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    // Select everything from the table
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // Insert one row into the table
    insertOne: function (table, col, values, cb) {
        var queryString = "INSERT INTO ?? ?? VALUES ?";
        connection.query(queryString, [table, col, values], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // Update one row in the table
    updateOne: function (table, col, condition, cb) {
        var queryString = "UPDATE ?? SET ?? WHERE ? ";
        connection.query(queryString, [tale, col, condition], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

// MIGHT HAVE TO DO INSERT ONE THIS WAY 

// queryString += " (";
// queryString += cols.toString();
// queryString += ") ";
// queryString += "VALUES (";
// queryString += printQuestionMarks(vals.length);
// queryString += ") ";

// Export the orm object for the model (cat.js).
module.exports = orm;