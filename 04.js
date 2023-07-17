// What is callback hell? How do you overcome callback hell? Give code examples for each.


// solution 

// Callback hell is having multiple nested callbacks within your asynchronous code that are hard to read and manage. This happens when callbacks are used within other callbacks, creating complex and convoluted code. To avoid this, use techniques like named functions, promises, or async/await syntax to make your code cleaner and easier to maintain. 


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
  

//   Overcoming callback hell


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

