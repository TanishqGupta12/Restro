// // alter user 'root'@'localhost'  
// // identified with mysql_native_password by 'admin123';

// const {createPool} = require("mysql");
// const pool = createPool({
//     host: "localhost",
//     user: "root",
//     password : "admin123"
// });


// pool.query('SELECT * FROM restro.reservation;' , (err , res)=>
// {
//     return console.log(res)
// })

// pool.query('SELECT * FROM restro.Contact;' , (err , res)=>
// {
//     return console.log(res)
// })

var expresss = require('express');
var router = expresss.Router()
const db = require('../src/db/connection.js')

router.get('/admin_panel', function(req , res , next){
    var sql = 'SELECT * FROM reservation';
    db.query(sql , function (err , data , field){
    if (err) throw err ;
    res.render('/admin/Reservations.html' , { title : ' USER LIST' ,userData: data});
    });
});
module.exports = router; 