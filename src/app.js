const con = require('../src/db/connection.js');
const express = require("express");
const path = require("path");
const usersRouter = ('../src/db/fetchs.js');

const app = express();
const port = process.env.PORT || 1212;
const statipath = path.join(__dirname, "../public")
// console.log(path.join(__dirname ,"../public" ))
app.use(express.static(statipath));

// fectching
// console.log(path.join(__dirname ,"../src/db/connection.js" ))
var bodyParse = require('body-parser')
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));


app.post('/reservation.html', function (req, res) {
    const dates = req.body.dates;
    const times = req.body.times;
    const Person_number = req.body.Person_number;
    const Person_name = req.body.Person_name;
    const Person_email = req.body.Person_email;
    const Phone_number = req.body.Phone_number;

    const sql = "INSERT INTO Reservation (dates,times,Person_number,Person_name,Person_email,Phone_number) VALUES(?,?,?,?,?,?)"
    
    con.query(sql, [dates, times, Person_number, Person_name, Person_email, Phone_number], function (error, result) {
        if (error) throw error;
        res.send('Register successfull' + result.insertId);
    });

});

app.post('/contact.html', function (req, res) {
    const name = req.body.name;
    const email= req.body.email;
    const message = req.body.message;
    
    const sql = "INSERT INTO Contact (name,email,message) VALUES(?,?,?)"

    con.query(sql, [name,email,message], function (error, result) {
        if (error) throw error;
        res.send(' Contact successfull' + result.insertId);
    });
    
});

//routing
// admin
// console.log(path.join(__dirname, "../admin/"));
console.log(path.join(__dirname ,"/admin/Reservations.html" ))
// app.use('/db', usersRouter);
app.get('/admin', (req, res) => {
    res.sendFile(__dirname+'/admin/admin.html');
});

app.get('/response', (req, res) => {
    // res.send('this is a redirect response page');
    res.sendFile(__dirname+'/admin/admin_panel.html');
});
app.post('/admincontrol',(req, res , next) =>{
    res.redirect('/response');
})


// app.get("/admin", (req, res) => {
//     res.sendFile("/admin.html");
// })

app.listen(port, () => {
    console.log('sever is running at port no', port);
    console.log('http://localhost:1212/');
    // console.log(db);
})