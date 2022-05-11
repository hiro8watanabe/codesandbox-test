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

////テンプレート文字列を用いた方法
// const massage1 = `私は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(massage1);

////分割代入を用いた方法
// const { name, age } = myProfile;
// const massage2 = `私は${name}です。年齢は${age}歳です。`;
// console.log(massage2);

// const myProfile = ["ひろ", 38];

// //テンプレート文字列を用いた方法
// const massage3 = `私は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(massage3);

// //分割代入を用いた方法
// const [name, age] = myProfile;
// const massage4 = `私は${name}です。年齢は${age}歳です。`;
// console.log(massage4);

/**
 * デフォルト値
 */

// //(name = "ゲスト")変数のあとに=は初期値設定
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("ひろ");

/**
 * スプレッド構文(...)
 */
// //配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// //...←順番に実行される。
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// //コピー
// const arr6 = [...arr4];
// console.log(arr6);

// //結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// //参照元arr4まで影響が出てしまう
// const arr8 = arr4;
// arr8[0] = 100;
// //書き換わるが...
// console.log(arr8);
// //参照元まで書き換わってしまう
// console.log(arr4);

// //コピーはスプレッド構文でやると参照元へ影響が出ない
// const arr6 = [...arr4];
// arr6[0] = 100;
// //書き換わるが...
// console.log(arr6);
// //参照元に影響なし！
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */

// //map
// const nameArr = ["田中", "山田", "渡辺"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(`${name}です`));
////用途に合わせて第２引数を使ってindexを取得
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// //特定のものだけ処理を変更
// const newNameArr = nameArr.map((name) => {
//   if (name === "渡辺") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

////filter
// const nameArr = ["田中", "山田", "渡辺"];
// //filterはある条件に一致したものを取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

/**
 * 三項演算子
 */
// //ある条件？　条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// //関数のreturn部分で三項演算子を使用した例
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50,20));

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// // 重要な考え方 ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// //　重要な考え方　&&　は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "なにか設定されました";
// console.log(fee2);
