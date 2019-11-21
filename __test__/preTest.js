const colors = require("colors")

let students = require('../student.json') 
let { th, name, problemNumber } = students
// let tests = require("./test.json")
// let { test } = tests 

if (typeof th !== "string" || !th.match(/^-{0,1}\d+$/)) {
  throw new Error("student.json 기수에는 숫자만 string 형식으로 입력하세요".red)
} 

if (name === "수강생분의 이름을 한글로! 적어주세요! 예)존도우") {
  throw new Error("student.json에 수강생의 성함을 입력하세요".red)
} 

if (!problemNumber.match(/^\d{2}$/)) {
  throw new Error("student.json 문제 번호는 숫자만 string 형식으로 두자리로 입력하세요(ex. 02)".red)
} 
  
console.log("student.json 파일을 정상적으로 수정하였습니다!".green)

// require(`../${test[Number(problemNumber)-1]}`)
