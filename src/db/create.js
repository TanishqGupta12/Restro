var exports = require('express');
var com = exports();

var bodyParse = require('body-parser')
com.use(bodyParse.json());
com.use(bodyParse.urlencoded({ extended : true }));


com.get
// date date
// time time

// person_no

// name varchar
//  emai varchar
// Number Number