/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  let result = [];
  const args = [string1, ...arguments];

  if (string1.length < 1) return "";
  // console.log("args::", args, arguments);

  [...string1].filter(str => {
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i].indexOf(str) > -1 && !result.includes(str))
        result.push(str);
    }
  });
  return result.join("");
};
