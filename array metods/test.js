// 1) sait seslerin yoxlanisi

// let str =
//   "menim adim xeyaldir men ucan adamlarnan danisiram. men adim deyende insanlar neden adim sozunu basa dusmur. axi adim adim gelmek lazimdir";

// function incudes(element,string){
//   let sum="";
//   let a=0;
//   for(let item of string){
//     for (zet of element){
//        if(item===zet){
//         sum+=item
//        a++

//     }
//     }
//     }
//   return a
// }
// console.log(incudes("a,i,o,u,e,",str))

// 2) costum includes

// let str = "I have a green car";
// function show(element, str) {
//   let sum = 0;
//   for (let item of str) {
//     if (item === element[sum]) {
//       if (sum === element.length - 1) {
//         return true;
//       }
//       sum++;
//     } else {
//       sum = 0;
//     }
//   }
//   return false;
// }

// console.log(show("green", str));

// 3) stringi tersine ceviren funksiya

// let human = "xeyal bu kitabi adile ver";

// function show(str) {
//   let num = 0;
//   let string = "";
//   for (let item in str) {
//     num = item;
//   }
//   console.log(num);

//   for (let sum = Number(num); sum >= 0; sum--) {
//     string += str[sum];
//   }
//   return string;
// }

// console.log(show(human));

// 4) sozlerin bas herflerini boyutmek

// human = "xeyal  bu   kitabi   adile   ver";
// function getupper(str) {
//   let a = "";
//   for (let b = 0; b < str.length; b++) {
//     if (b === 0) {
//       a += str[0].toUpperCase();
//       b++;
//     }
//     if (str[b] !== " ") {
//       if (str[b - 1] === " ") {
//         a += " " + str[b].toUpperCase();
//       } else {
//         a += str[b];
//       }
//     }
//   }
//   return a;
// }

// console.log(getupper(human));

// 5) verilmis sozun cumlede nece eden olduguna baxmaq

// let str =
//   "menim adim xeyaldir men ucan adamlarnan danisiram. men adim deyende insanlar neden adim sozunu basa dusmur. men axi adim adim gelmek lazimdir";

//  function show(element, str) {
//   let sum = 0;
//   let calc=0
//   for (let item of str) {
//     if (item === element[sum]) {
//       sum++;

//       if (sum === element.length) {
//         calc++
//         sum=0
//       }
//     } else {
//       sum = 0;
//     }
//   }
//   return calc
// }

// console.log(show("men", str));

// 6)cumledeki en uzun sozu tapmaq

// human = "xeyal  bu  kitabi adile ver";
// function show(string) {
//     let a='';
//     let z=''
//     for(let item of string){
//      if(item!==" "){
//       a+=item
//       if(a.length>z.length){
//         z=a
//       }
//      }
//      if(item===" "){
//       a=''
//      }
//     }
//     return z
//   }
//   console.log(show(human));

// 7) tekrarlanan herfleri stringden cixarmaq

// let baku = "salam xezer";

// function show(string) {
//   let newBaku = "";
//   let a;
//   for (let item of string) {
//     for (a of newBaku) {
//       if (a === item) {
//         break;
//       }
//     }
//     if (item !== a) {
//       newBaku += item;
//     }
//   }
//   return newBaku;
// }
// console.log(show(baku));

// 8) stringden reqemleri cixarmaq

// let str = "salam menim 29 yasim var 1996 ci ilde dogulmusam";
// let number = "1234567890";
// function show(string, numbr) {
//   let newStr = "";
//   let num;
//   for (let item of string) {
//     for (num of numbr) {
//       if (item === num) {
//         break;
//       }
//     }
//     if (item !== num) {
//       newStr += item;
//     }
//   }
//   return newStr;
// }
// console.log(show(str, number));

// 9) strinde verilen herfle isdediyin herfi deyismek

// let str = "salam menim adim xeyaldir";

// let target = "a";
// let choose = "e";

// function show(string, other, brow) {
//   newStr = "";

//   for (let item of string) {
//     if (item === other) {
//       newStr += brow;
//     } else {
//       newStr += item;
//     }
//   }
//   return newStr;
// }

// console.log(show(str, target, choose));


// 10) palendrom strindi true vermek
// let str='detartrated'
// function show(str){
//   num=0;
//   for(let a=str.length-1;a>=0;a--){
//       if(str[a]===str[num]){

//         num++
//       }else{
//         break;
//       }
//      }

//   return num===str.length

// }
// console.log(show(str));

// salam


