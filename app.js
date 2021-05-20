/* Task 4 Question 1 */
function convertFahrToCelsius(val) {
  if (typeof val === "string") {
    var num = parseInt(val);
    var answer = (num - 32) / 1.8;
    var answerDec = answer.toFixed(4);
    return `${answerDec}`;
  } else if (typeof val == "number") {
    var answer = (val - 32) / 1.8;
    var answerDec = answer.toFixed(4);
    return `${answerDec}`;
  } else if (Array.isArray(val)) {
    return `[${val}] is not a valid number but a/an array`;
  } else typeof val === "object";
  var value = JSON.stringify(val);
  return `${value} is not a valid number but a/an object`;
}

convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius({ temp: 0 });

/* Task 4 Question 2 */
const checkYuGiOh = (n) => {
  let resArr = [];

  if (isNaN(n) || parseInt(n) < 1) {
    return `invalid Parameter: "fizzbuzz is meh"`;
  }
  for (let i = 1; i <= n; i++) {
    let current_string = [];
    let fstring = " ";
    i % 2 == 0 ? current_string.push("yu") : "";
    i % 3 == 0 ? current_string.push("gi") : "";
    i % 5 == 0 ? current_string.push("oh") : "";

    fstring = current_string.join("-");
    fstring ? resArr.push(fstring) : resArr.push(i);
  }
  return resArr;
};

checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizzbuzz is meh");
