let tests = require("./test.json")
let students = require('../student.json') 

let { th, name, problemNumber } = students
let { test } = tests 

require(`../${test[Number(problemNumber)-1]}`)
