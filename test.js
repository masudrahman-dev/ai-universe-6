// const dates = [
//     new Date('July 20, 2021 20:17:40'),
//     new Date('August 19, 2021 23:15:30'),
//     new Date('March 13, 2021 04:20'),
//     new Date('October 2, 2021 11:05')
//   ];
//   console.table(dates);
//   dates.sort((date1, date2) => date1 - date2);

//   /*
//   [
//     2021-03-13T09:20:00.000Z,
//     2021-07-21T00:17:40.000Z,
//     2021-08-20T03:15:30.000Z,
//     2021-10-02T15:05:00.000Z
//   ]
//   */
//   dates;
// //   console.log('dates :>> ', dates);
//   const newDate =  new Date('July 20, 2021 20:17:40')
// // console.log(newDate);
// console.table(dates);
// console.log(newDate);

// Several ways to create a Date object
// // let today = new Date();
// let birthday = new Date("December 17, 1995 03:24:00");

// // let birthday = new Date("1995-12-17T03:24:00");
// // let birthday = new Date(1995, 11, 17); // the month is 0-indexed
// // let birthday = new Date(1995, 11, 17, 3, 24, 0);
// // let birthday = new Date(628021800000); // passing epoch timestamp
// console.log(new Date("December 17, 1995 03:24:00"));
// console.log(new Date("1995-12-17T03:24:00"));
// console.log(new Date(1995, 11, 17));
// // To get Date, Month and Year or Time
// let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
// let [hour, minute, second] = new Date()
//    .toLocaleTimeString("en-US")
//    .split(/:| /);

// // Two digit years map to 1900 – 1999
// let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
// // Deprecated method; 98 maps to 1998 here as well
// date.setYear(98); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
// date.setFullYear(98); // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)

// const d = new Date("October 13, 2014 11:13:00");
// const d = new Date();
// d.toDateString();
// console.log(d);
// document.getElementById('date').innerHTML = new Date("October 13, 2014 11:13:00");
// document.getElementById('date').innerHTML = new Date("2022/03/25")
// document.getElementById('date').innerHTML = new Date(2018, 11, 24, 10, 33, 30, 0);
// document.getElementById('date').innerHTML =  new Date().toISOString()
// document.getElementById('date').innerHTML =  new Date().toDateString()
// document.getElementById('date').innerHTML =  new Date().toUTCString();
// document.getElementById('date').innerHTML =  new Date().toISOString();
// document.getElementById('date').innerHTML =  new Date("2015-03");
// document.getElementById('date').innerHTML =  new Date("2015");
// document.getElementById('date').innerHTML = new Date('03/25/2015');
// document.getElementById('date').innerHTML = new Date('2015/03/25');
// document.getElementById('date').innerHTML = new Date('Mar 25 2015');
// document.getElementById('date').innerHTML = new Date('JANUARY, 25, 2015');

// document.getElementById('date').innerHTML = new Date('2021-03-25').getFullYear();
// document.getElementById('date').innerHTML = new Date('2021-03-25').getDate();
// document.getElementById('date').innerHTML = new Date('2021-03-25').getDay();
// document.getElementById('date').innerHTML = new Date('2021-03-25').getHours();
// document.getElementById('date').innerHTML = new Date('2021-03-25').getMilliseconds();
// document.getElementById('date').innerHTML = new Date('2021-03-25').getMinutes();
// document.getElementById('date').innerHTML = new Date('2021-03-25').getMonth();
// document.getElementById('date').innerHTML = new Date('2021-03-25').getSeconds();
// document.getElementById('date').innerHTML = new Date('2021-03-25').getTime();
// document.getElementById('date').innerHTML = new Date('2021-03-25').getTimezoneOffset();
// document.getElementById('date').innerHTML = new Date('2021-03-25').getUTCDate();
// document.getElementById('date').innerHTML = new Date('2021-03-25').getUTCDay();
// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// const d = new Date('2021-07-25');
// let month = months[d.getMonth()];
// document.getElementById('date').innerHTML = month
// document.getElementById('date').innerHTML = new Date('2021-03-25').getDay();

// let start = new Date(); // start measuring time

// // do the job
// for (let i = 0; i < 999999999; i++) {
//   let doSomething = i * i * i;
// }

// let end = new Date(); // end measuring time

// console.log( `The loop took ${end - start} ms`);

// const employees = [
//   { name: 'Alice', age: 25, salary: 50000 },
//   { name: 'Bob', age: 30, salary: 60000 },
//   { name: 'Charlie', age: 35, salary: 70000 },
//   { name: 'Dave', age: 40, salary: 80000 },
// ];
// const employees = [
//   { name: 'Alice', salary: 50000 },
//   { name: 'Bob', salary: 60000 },
//   { name: 'Charlie', salary: 45000 },
//   { name: 'David', salary: 70000 },
// ];

// console.log(employees);

// const tools = 'https://openapi.programming-hero.com/api/ai/tools';
// fetch(tools)
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data.data.tools);

//     const allData = data.data.tools;
//     console.log(allData);

//     const sortData = allData.sort(
//       (a, b) => new Date(a).getTime() - new Date(b).getTime()
//     );

//     console.log(sortData);
//   });

// const tools = 'https://openapi.programming-hero.com/api/ai/tools';
// fetch(tools)
//   .then((res) => res.json())
//   .then((data) => {
//     const allData = data.data.tools;
//     console.table(allData);

//     const sortData = allData.sort(
//       (a, b) =>
//         new Date(b.published_in).getTime() - new Date(a.published_in).getTime()
//     );

//     console.table(sortData);
//   });

//   const sortData = data.filter((d) => d.published_in);
//   console.table(sortData);
//   d.published_in.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
//   console.log(sortData);
//   console.log(data);
//   data.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
//   console.table(data);

//   employees.sort((a, b) => {
//     if (a.name < b.name) { return -1; }
//     if (a.name > b.name) { return 1; }
//     return 0;
//   });

// employees.sort((a, b) => a.salary - b.salary);

// console.log(employees);

// employees.sort((a, b) => b.salary - a.salary);
// console.log(employees);
// const items = [
//   { name: 'notebook', price: 15 },
//   { name: 'book', price: 10 },
//   { name: 'pen', price: 5 },
//   { name: 'pencil', price: 3 },
// ];
// console.log(items);

// items.sort((a, b) => {
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   }
//   return 0;
// });

// console.log(items);
// const solution = (letter) => {
//   if (
//     letter === 'a' ||
//     letter === 'e' ||
//     letter === 'i' ||
//     letter === 'o' ||
//     letter === 'u'
//   ) {
//     console.log('VOWEL');
//   } else {
//     console.log('CONSONANT');
//   }
// };
// solution('a'); // VOWEL
// solution('u'); // VOWEL
// solution('k'); // CONSONANT
