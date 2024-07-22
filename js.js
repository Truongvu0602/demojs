// <----------------xuất kq bằng 4 cách-------------->
let a = 5,
  b = 3,
  kq = a * b;
//
console.log(` kết quả : ${a} nhân với ${b} bằng ${kq}`);
console.log(" kết quả:", a, "nhân với ", b, "bằng ", kq);
console.log(" kết quả : " + a + " nhân với " + b + " bằng " + kq);
console.log(" kết qủa %s nhân với %s bằng %s ", a, b, kq);

//<------------------- toán tử------------------->

let phepTinh = 6 + 8 / (2 * 2);
console.log(` kết quả của phép tính 6 + 8 / (2 * 2) = ${phepTinh} `);

// <----------------ép kiểu js-------------->
//
// đối với phép + thì js sẽ tự động chuyển đổi số sang thành chuỗi để nối chuỗi
let myString = "2";
let myNumber = 2;
console.log(typeof myString, typeof myNumber);

let phepTinh2 = myString + myNumber;
console.log(phepTinh2);
console.log(typeof phepTinh2);
// còn lại phép nhân chia trừ thì js sẽ chuyển đổi qua số để tính nếu chuyển đổi không được thì sẽ trả về là NaN

let phepTinh3 = myString * myNumber;
console.log(phepTinh3);
console.log(typeof phepTinh3);

let phepTinh4 = myString - myNumber;
console.log(phepTinh4);
console.log(typeof phepTinh4);

let phepTinh5 = myString % myNumber;
console.log(phepTinh5);
console.log(typeof phepTinh5);

// các cách ép kiểu sang bằng hàm
//
//1. ép kiểu sang số nguyên = parseInt
//tức là những số có lẻ đằng sau sẽ bị loại bỏ
let soThuce = 3.75;
let epKieu1 = parseInt(soThuce);
console.log(epKieu1);
console.log(typeof epKieu1);
//2. ép sang kiểu số thực = parseFloat
// vẫn tính cả số lẻ đằng sau đuôi
let epKieu2 = parseFloat(myString * soThuce);
console.log(epKieu2);
console.log(typeof epKieu2);
//3. ép kiểu dữ liệu Number
// áp dụng cả số nguyên và số thực tự động ép kiểu dữ liệu thành số
let epKieu3 = Number(soThuce / 2);
console.log(epKieu3);
console.log(typeof epKieu3);
//<------ hết bài 8 gà lại lập trình ---------->
