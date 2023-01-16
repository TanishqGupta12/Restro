var mysql = require('mysql');
var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin123",
    database : "restro"
});


conn.connect(function(err){
    if(err) throw err;
    console.log("Database created!");

});

module.exports = conn;

