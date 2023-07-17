// /What will be the output of the following code and explain why?



// output 

Start

End

Timeout
Promise 3 resolved

Promise 1 resolved

Promise 2 resolved



// "Start" is displayed in the console.

// A setTimeout() callback with a delay of 0 ms is added to the event queue.

// 3 Promises with different delays (Promise1, Promise2, Promise3) are created and added to the event queue.

// "End" is displayed in the console.

// The setTimeout() callback is executed and returns "timeout". // Promises are resolved in the order they were created.

// Each then callback of each Promise is executed and its result is printed. 