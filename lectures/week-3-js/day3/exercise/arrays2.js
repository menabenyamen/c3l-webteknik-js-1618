function createExecutableList() {
  return [
    () => { console.log('firing a') },
    () => { console.log('firing b') },
    () => { console.log('firing c') },
    () => { console.log('firing d') },
  ];
}

function createExecutableList2() {
  return [
    () => { console.log('firing e') },
    () => { console.log('firing f') },
    () => { console.log('firing g') },
  ];
}

// Extract the array of functions by executing the functions
const executableList = createExecutableList();
const executableList2 = createExecutableList2();

// Can you execute the function at index 2 in executableList
// "c" should be logged to the console

// Use the forEach function to loop through and execute every
// function in the executableList;

// Look at pop and shift functions on mdn
// Use a "for" loop
//  and fire and remove the functions in executableList2
//  as if it was a queque i.e. first in first out.

// Use a "for" loop
//  and fire and remove the functions in executableList2
//  as if it was a stack i.e. first in last out.

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9];
// Using the spread operator combine arrays numbers and numbers2 to a new array called numbers3
