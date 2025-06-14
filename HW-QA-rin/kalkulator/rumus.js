
function add(number1, number2) {
    var result = parseInt(number1) + parseInt(number2);
    return result;
}

 function kurang(number1, number2) {
  var result = number1 - number2;
  console.log(typeof number1, typeof number2);
  return result;
}
function bagi(number1, number2) {
  var result = number1 / number2;
  return result;
}

function kali(number1, number2) {
  var result = number1 *  number2;
  return result;
}

module.exports = {
    add,
    kurang,
    kali,
    bagi

}