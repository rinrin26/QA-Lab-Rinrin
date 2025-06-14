// 1.Buatlah segitia dengan menggunakan loop statement
var tinggiSegitiga = 6;
for (let i = 1; i < tinggiSegitiga; i++) {
  let fillBaris = "";
  for (let j = 1; j <= tinggiSegitiga - i; j++) {
    fillBaris += " "; // spasi
  }

  for (let b = 1; b <= i; b++) { //ngisi baris dengan bintang
    fillBaris += "*";
  }
  for (let b = 1; b <= i; b++) { //ngisi baris dengan bintang
    fillBaris += "*";
  }
  
  console.log(fillBaris);
}
