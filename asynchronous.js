//this file has callbacks,promises,async,await,fetch
//js is a synchronous language---->executes program one by one(that is line by line)
//it executes our code in one particular order

function makeGreeting(name)
{
    //delays our work based on the time we give
    setTimeout(function()  //asynchronous
    {
        console.log(`hello, my name is ${name}!`)

    },10000)
    //1000 is in milliseconds so now our code will be exceuted after 10 seconds
}
const name="Miriam";
makeGreeting(name);
console.log("Anshika");

//since js is executed line by line, till our makeGreetings function were not executed our program does not move further thereby delaying our output
//this becomes a hindrance is we have millions of lines of code
//js can be made asynchronous by using callback,await,promises
//thus we should make it asynchronous
//in this case js does not wait and executes other commands and then comes back to the command it left


//callback
//type of callback--->settimeout as above
//callbacks are fucntions inside another function
//callbacks were introduced to run code in order
//they were made so that one function is executed only if the outer function is executed
//callback creates pyramid of doom
//pyramid of doom: the pyramid of doom is a common problem that arises when a program uses many levels of nested indentation to control access to a function
//to avoid the promise of doom promises came into picture
//(see code from maam's github)
// function doStep1(init) {
//   return init + 1;
// }
// function doStep2(init) {
//   return init + 2;
// }
// function doStep3(init) {
//   return init + 3;
// }
// function doOperation() {    // synchronous code
//   let result = 0;
//   result = doStep1(result);
//   result = doStep2(result);
//   result = doStep3(result);
//   console.log(`result: ${result}`);
// }
// doOperation();
function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
  }  
  function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
  }  
  function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
  }  
  function doOperation() {
    doStep1(0, (result1) => {
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  doOperation();


//promises
//fetch command returns a promise whenever an API call is made
//res.then()---->whenever our promise if successfully resolved then we need to exceute a code so we use then
//promises can be i.e. stages of promise: pending, fulilled,rejected(due to errors)
//if it i fulfilled then is called and if it is in the rejected state catch is used to catch the error
//(see code from maam's github)
//response.json() is very important command as response is not in the json form and to convert it into json form we need to write this statement
//json method always returns a promise
//fetch returns a promise automatically but we can also create our own promises
let success = true;
const promiseObject = new Promise(function (onFulFilled, onRejected) {
  if (success) {
    onFulFilled("Javascript Promise");
  } else {
    onRejected("Error in Promise");
  }
});
promiseObject
  .then((res) => console.log("Response", res))
  .catch((err) => console.log("Error", err));
//console.log("Promise Object", promiseObject);

//the above statements are like below in shorthand form
//promiseObject.then((res)=>console.log("Response: ",res))
// promiseObject.catch((err)=>console.log("Error",err))
// console.log("Promise Object",promiseObject)
//when you create your own promise resolve(promise)---> always resolve your promise

//promsies through fetch command
// const res = fetch("https://dummyjson.com/products");
// console.log("res", res);
// res.then(data => data.json());
// res.catch(err => console.log(err));
// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// console.log(fetchPromise);
// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });
console.log("Started request…");
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
fetchPromise.then((response) => {
  const jsonPromise = response.json();

  console.log("jsonPromise", jsonPromise);

  jsonPromise.then((data) => {
    console.log("data", data);
    console.log(data[1].name);
  });
});
// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//   );
//   fetchPromise
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[0].name);
//     });


//async,await
//await is always written inside the async function------->async keyword should be present in the function where await is written
//like: async function()
// {
//     await something...
// }

//both promises and async,await are same but async and await make the code readable
//always put await and async on functions that return a promise
//await will be used to call a function that is returning a promise



