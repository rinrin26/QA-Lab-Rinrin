// 1. Kalkulator (+, -, /, *) sederhana menggunakan fungsi switch case!
const funcHitung = require("./rumus.js"); 
const readline = require("readline");

// Buat input/output di terminal menggunakan readline
const readInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("=== My KALKULATOR ===");
console.log("1. Penjumlahan (+)");
console.log("2. Pengurangan (-)");
console.log("3. Perkalian (*)");
console.log("4. Pembagian (/)");
console.log("               ");

function hitungOperasi(number1,number2, operasi){
    let result;
    switch (operasi) {
      case "1":
        result = funcHitung.add(number1, number2);
        console.log(`hasil penjumlahan ${number1} + ${number2} = ${result}`);
        break;
      case "2":
        result = funcHitung.kurang(number1, number2);
        console.log(`hasil kurang dari ${number1} - ${number2} = ${result}`);
        break;
      case "3":
        result = funcHitung.kali(number1, number2);
        console.log(`hasil kali dari ${number1} * ${number2} = ${result}`);
        break;
      case "4":
        result = funcHitung.bagi(number1, number2);
        console.log(`hasil bagi dari ${number1} / ${number2} = ${result}`);
        break;

      default:
        break;
    }
}
readInput.question('Pilih operasi kalkulator (1-4): ', function(operasi) {
    readInput.question('Masukan angka ke 1: ',function(number1){
        readInput.question('Masukan angka ke 2: ',function(number2){
           hitungOperasi(number1, number2, operasi)
            readInput.close;
        })
    })
}

);