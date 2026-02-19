// // let arry = [1, 2, 3, 4, 5];

// // arry.pop(); //oxiridan ayiradi
// // arry.push(3); //oxiridan qo'shadi

// // console.log(arry);

// // arry.shift(); // oldindan o'chiradi
// // arry.unshift(5); //oldidan qo'shadi

// // console.log(arry);

// // let duble = arry.map((n) => n * 2); //har bir elemeni 2 ga oshirish

// // let ilter = arry.filter((n) => n % 2 === 0); //bo'lyandaki qoldiqi 0 la dang  bo'sa ishlaydi

// // let sum = arry.reduce((sum, n) => sum + n, 0); //arreyni ichindagi sonlar yig'indisi

// // console.log(duble);
// // console.log(ilter);
// // console.log(sum);

// // let arry = [-3, 4, -2, 7, 1];

// // let toq = arry.filter((n) => n > 0);
// // let yig = toq.reduce((sum, n) => sum + n, 0);

// // console.log(yig);

// // let arry = [1, 2, 3, 4, 5, 6];

// // let fil = arry.filter((n) => n % 2 === 0);
// // let kop = fil.map((n) => n * 2);

// // console.log(kop);

// // let son = [1, 3, 2, 5, 7, 8, 11, 13];

// // let find = son.find((n) => n == 2);       ///arreyni ichinda 2 soni boliqini tekshiraddi
// // let some = son.some((n) => n % 2 === 0);   ///arreyni ichinda 2kya bo'linadon sonla boliqini tekshiradi
// // let every = son.every((n) => n % 2 === 0);  ///arreyni ichinda harbir son ikkiya bo'linishini tekshiradi

// // console.log(find);
// // console.log(some);
// // console.log(every);

// // let name = ["ali", "vali", "ilyos"];
// // let sorted = name.sort();
// // console.log(sorted);

// // let son = [1, 23, 34, 545, 22, 13, 12, 2, 3];
// // let osish = son.sort((a, b) => a - b);
// // let kamayish = son.sort((a, b) => b - a);
// // console.log(kamayish);
// // console.log(osish);

// // son.forEach((val, i) => {
// //   console.log(val, i);
// // });

// // let ism = ["ali", "sardor", "john", "vali", "muhammad"];

// // let uzun = ism.filter((n) => n.length >= 5);
// // let harf = uzun.sort();

// // console.log(harf);

// // let son = [5, 12, 7, 20];

// // let bor = son.some((n) => n > 10);

// // if (bor) {
// //   let katta = son.filter((n) => n > 10);
// //   katta.sort();
// //   console.log(katta);
// // } else {
// //   console.log("yoq");
// // }

// // let ism = ["ali", "siroj", "lola", "samar"];

// // let filt = ism.filter((n) => n.length >= 4);
// // let map = filt.map((n) => n+" hello");

// // console.log(map);

// //3ga kop

// // let son = [-2, 1, 3, -5, 4];

// // let musbat = son.filter((n) => n > 0);
// // let kop = musbat.map((n) => n * 3);

// // console.log(kop);

// // let arr = [0, 4, 0, 6, 10];

// // let katta = arr.filter((n) => n > 0);
// // let qosh = katta.reduce((a, b) => a + b, 0);
// // let son = qosh / katta.length;

// // // console.log(son);

// // let fruit = ["apple", "banana", "orange"];

// // console.log(fruit.includes("banana"));
// // console.log(fruit.includes("graps")); /// ichinda shu narsa bo yo'qligini tekshiradi.

// // let nnumber = [10, 20, 30, 40, 50, 60, 70];

// // console.log(nnumber.indexOf(30));
// // console.log(nnumber.indexOf(100));

// // let part = nnumber.slice(1, 5);

// // let part2 = nnumber.slice(1, 4, 0, 5, 0, 65, 5, 4, 3);

// // console.log(part);
// // console.log(part2);
// //

// //      8 masla
// // let arry=[-1,2,-3,3,-3];

// // let toq=arry.filter((n)=>n>0)
// // let musbat=arry.filter((n)=>n<0)

// // console.log(toq);
// // console.log(musbat);

// ///      9 masala
// // let arr = [5, 6, 7];

// // let ol=arr.shift()
// // let qosh=arr.push(ol)
// // qosh = arr

// // console.log(qosh);

// //     10 masala

// // let arr = [1, 2, 4, 5, 2];

// // let son = arr.toSorted((a, b) => a - b);
// // let qirq = arr.shift();
// // qirq = arr;

// // console.log(son);
// // console.log(qirq);

// // let user = {
// //   fName: "ilyos",
// //   age: 16,
// //   isStudent: true,
// //   "full name": "Bahromov Ilyos",
// // };

// // let user2 = { ...user };

// // let user3=JSON.parse(JSON.stringify(user))

// // user.country = "Uzbekistan";

// // console.log(user);
// // console.log(user2);

// // let user = {
// //   ism: "Ilyos",
// //   yosh: 16,
// // };

// // user.isActive = true;

// // console.log(user);

// // let user = {
// //   age: ilyos,
// //   fname: ilyos,
// //   issudnt: true,
// //   greet() {
// //     console.log("hello" + this.fname);
// //   },
// // };

// let user = {
//   fName: "Ilyosbek",
//   age: 16,
//   isStudent: true,
//   address: {
//     city: "Tashkent",
//     zip: 221100,
//   },

//   greet() {
//     console.log("Hello " + this.fName);
//   },
// };

// let {
//   address: { city, zip },
// } = user;
// console.log(city);
// console.log(user);

// // let a = { name: "ilyos" };
// // let b = { surname: "bahromov" };

// // let fullName = { ...a, ...b };
// // console.log(fullName);

// // let updateUser = {
// //   ...fullName,
// //   name: "toshbpolat",
// // };

// // console.log(updateUser);

// // console.log(Object.entries(updateUser));

// // let user={
// //     name:"Ilyos",
// //     age:20,

// // };

// // for (let n in user){
// //     console.log(n,user[n]);

// // }

// // let user={
// //    fname:"Ilyos",
// //     age:20
// // }
// // let updateUser = {
// //   ...user,
// //   age: 23,
// // }

// // console.log(updateUser);

// // let person={
// //     name:"Ilyos",
// //     age:30
// // }

// // delete person.age;

// // let { name,age = 18}=person;
// // console.log(name);
// // console.log(age);

// let user = {
//   brend: "BMW",
//   model: "X5",
//   fullName() {
//     console.log(this.brend + " " + this.model);
//   },
// };

// user.fullName();

// let user= {
//   fname:"TOM",
//   age :23
// }

//  let keyingi= {fname:name,age:yosh}=user;

//  console.log(name);
//  console.log(yosh);

// let user={
//   ism:"kamron",
//   cantact:{
//   email:"xojayev@gmail.com",
//   phone:"999"
//   }
// };

//         DOM
// let tagName = document.querySelector("p");
// let buaydi = document.querySelector("#buayid");
// let buclas = document.querySelector(".buclas");

// console.log(tagName);
// console.log(buaydi);
// console.log(buclas);

let matn = document.querySelector(".s");
let btn = document.querySelector(".btn");
      
btn.addEventListener("click", () => {
  // matn.textContent="alik";
  matn.innerHTML = "<i>alik</i>";
  matn.style.color="red";
  matn.style.backgroundColor="yellow";
  matn.style.width="100px"
   matn.style.height="5   0px"
});
