// What is callback hell? How do you overcome callback hell? Give code examples for each.


// solution 

// Callback hell is the situation in asynchronous programming where multiple, nested callbacks make code difficult to read, maintain, and understand. This can happen when callbacks are used within callbacks, resulting in deeply nested code structures that are difficult to maintain.To overcome callback hell, you can use techniques such as using named functions, using Promises, or using async/await syntax. 


// Code example

// function first(callback) {
//     setTimeout(function() {
//       console.log("first try");
//       callback();
//     }, 1000);
//   }
  
//   function second(callback) {
//     setTimeout(function() {
//       console.log("second try.");
//       callback();
//     }, 1000);
//   }
  
//   function third(callback) {
//     setTimeout(function() {
//       console.log("third try.");
//       callback();
//     }, 1000);
//   }
  
//   // Callback hell!
//  first(function() {
//     second(function() {
//       third(function() {
//         console.log("completed all try");
//       });
//     });
//   });
  

//   Overcoming callback
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function tried() {
  delay(1000)
    .then(() => {
      console.log("first try");
      return delay(1000);
    })
    .then(() => {
      console.log("second try.");
      return delay(1000);
    })
    .then(() => {
      console.log("third try");
      console.log("completed all try");
    });
}

tried();

