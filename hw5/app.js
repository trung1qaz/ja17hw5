// Bài 1
let x = prompt("Bài 1: Điền 1 số", "");
let y = prompt("Bài 1: Điền 1 số", "");
let z = 0;
if (Math.abs(x - y) > 0) {
    z = parseInt(x) + parseInt(y);
    console.log("Kết quả bài 1:", z);
}
else {
    z = 3 * (parseInt(x) + parseInt(y));
    console.log("Kết quả bài 1:", z)
}
// Bài 2
let a = prompt("Bài 2: Điền 1 số", "");
if (a % 3 == 0 && a % 21 > 0) {
    console.log("Kết quả bài 2:", "Bội số của 3");
}
else if (a % 7 == 0 && a % 21 > 0) {
    console.log("Kết quả bài 2:", "Bội số của 7")
}
else if (a % 21 == 0) {
    console.log("Kết quả bài 2:", "Bội số của cả 3 và 7")
}
else if (a == 0) {
    console.log("Kết quả bài 2:", "0 không được tính là bội số của bất kì số nào")
}
else {
    console.log("Kết quả bài 2:", "Ko là bội của 3 hay 7")
}
// Bài 3
let b = prompt("Bài 3: Nhập năm sinh của bạn", "");
if (b > 2021) {
    cons21ole.log("Kết quả bài 3:", "Error");
}
else {
    console.log("Kết quả bài 3:", "Tuổi của bạn là:", b = 2021 - b)
}

