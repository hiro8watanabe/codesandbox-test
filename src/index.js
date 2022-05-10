/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は上書き可能
// var var1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //let変数再宣言不可
// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3 = "const変数を上書き";
// console.log(val3);

// //const変数再宣言不可
// const val3 = "const変数を再宣言";
// console.log(val3);

// //constで定義したプロジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ひろ",
//   age: 38
// };

// val4.name = "jak";
// val4.addres = "chiba";
// console.log(val4);

// // //constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0]= "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "ひろ";
// const age = "38";
// //私の名前はひろです。年齢は38歳です。

// //従来の方法
// const massage1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(massage1);

// //テンプレート文字列を用いた方法
// const massage2=`私の名前は${name}です。年齢は${age}です。`;
// console.log(massage2);

/**
 * アロー関数
 */

// //従来の関数
// // function func1(str) {
// //   return str;
// // }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です。"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "ひろ",
//   age: 38
// };

// const massage1 = `私は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(massage1);

// const { name, age } = myProfile;
// const massage2 = `私は${name}です。年齢は${age}歳です。`;
// console.log(massage2);

const myProfile = ["ひろ", 38];

const massage3 = `私は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(massage3);

const [name, age] = myProfile;
const massage4 = `私は${name}です。年齢は${age}歳です。`;
console.log(massage4);
