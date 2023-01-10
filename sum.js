// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// ex. node sum.js 1 2 3 4 5 should give 15
// function?

// Take the arguments from the command-line
const args = process.argv.slice(2);
// Edge case: We need at least 2 arguments.
if (args.length < 2) {
  console.log("Error, please enter at least 2 arguments");
  process.exit();
}
// validate => print it
// console.log("args:", args);
// Check to see if they are numbers or not

// iterate through the arguments
// for of
// forEach
// for (let i=0; i< args.length; i++)
// accumulator

let total = 0;

for (let arg of args) {
  // add them up
  // convert the arg into a number => typecasting

  // Edge case: If any argument is not a whole number, skip it.
  if (Number.isInteger(Number(arg))) {
    total += Number(arg); // total = total + Number(arg);

    console.log('arg', arg, 'type of arg:', typeof arg);
  }
  // Edge case: If any argument is not a number, output an error message.
  if (isNaN(Number(arg))) {
    console.log('Error, please enter only numbers');
    // stop the execution of the script
    //break? => stops the loop, but no the entire program
    // return? // => output the value of a function, side effect: stop the function execution
    // throw new Error()
    process.exit(); 
  }
}

// prints out the sum of them
console.log('Total:', total);
