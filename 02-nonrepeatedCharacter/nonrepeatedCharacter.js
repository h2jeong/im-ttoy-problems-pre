/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // 각 캐릭터를 키로 맵에 0/1(false/true) 값을 넣어준다. map.set(key, value);
  // map.has(key) 가 있으면 value를 바꾸고 없으면 set
  // for(var [key, value] of map) 반복문으로 value가 true인 첫번째 키 반환
  const map = new Map();
  let strArr = string.split("");
  // console.log("strArr:", strArr);
  for (let i = 0; i < strArr.length; i++) {
    if (!map.has(strArr[i])) map.set(strArr[i], 0);
    else map.set(strArr[i], 1);
  }
  // console.log("map:", map);
  for (let [key, value] of map) {
    if (!value) return key;
  }
};
