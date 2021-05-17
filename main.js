// var firstName = '      Nguyen Quoc Quoc Quoc Nam Quoc            ';
// var lastName = '      Nguyen Quoc Nam Nam          ';
// // 1. Length console.log(name.length);
// // 2.Find Index 
// console.log(firstName.indexOf('oc'));
// // Tìm không được thì trả về -1, sau này có thể sài if else
// // Search hỗ trợ biểu thức chính quy
// console.log(firstName.slice(5, 11));
// // biểu thức chính quy /text/g
// console.log(firstName.replace(/Quoc/g, 'Quoccc'));
// // 3. Trim
// console.log(firstName.trim().length);
// console.log(lastName.split(''));

// let age = 21;
// let pi = 3.14;
// var result = age / 'nam';
// let myage = age.toString();
// // Tinh toan nham lan vd so / chu thi tra ve kieu NaN
// // Tofix lam tron so thap phan
// console.log(result);
// console.log(typeof myage);
// console.log(pi.toFixed());

// Mảng
let languages = [
    'PHP',
    'Java',
    'C++',
    'C#',
    'Ruby',
];
console.log(languages.push('Dart'));
console.log(languages);
console.log(languages.splice(1, 1, 'Swith'))
console.log(languages);

let languages2 = [
    'Html',
    'Css'

];
console.log(languages.concat(languages2));
// concat = noi array
// console.log(languages.join(' - '));
// console.log(languages[3]);

// console.log(Array.isArray(languages));
// xoa element cuoi mang va tra ve phan tu da xoa
// console.log(languages);
// console.log(languages.pop());
// function myMessage() {
//     var myString = '';
//     for (const param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString);
// };

// myMessage('A', 'A', 'A', 'A', 'A', 'A');
// Function

var getName = function() {

};
var emailKey = 'email@gmail.com';
var myInfor = {
    firstName: 'Nam',
    age: 18,
    genDer: 'Male',
    [emailKey]: 'nam@gmail.com',
    getName: function() {

        return this.firstName;
    }

};

delete myInfor.genDer;

console.log(myInfor.getName());