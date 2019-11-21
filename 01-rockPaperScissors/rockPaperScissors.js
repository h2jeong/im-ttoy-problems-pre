/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
* 1. 배열을 담을 결과 배열 만들기 2. 인자로 들어온 숫자 횟수의 랜덤 가위, 바위, 보 배열에 담기 3. 결과 배열에 담아서 반환
*/

var rockPaperScissors = function(num) {
  const result = [];

  var func = function() {
    let round = Array(num);
    let game = ["rock", "paper", "scissors"];

    while (round.length < num) {
      let random = Math.floor(Math.random() * 3);
      round.push(game[random]);
    }

    result.push(round);
    console.log(result);
  };
  return result;
};
