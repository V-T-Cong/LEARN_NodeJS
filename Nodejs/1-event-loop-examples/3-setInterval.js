// Example: Using setInterval to execute a function every 1 second (1000 milliseconds)

// Define the function to be executed
function myFunction() {
    console.log("Interval function executed!");
}

// Call setInterval with the function and interval (in milliseconds)
const interval = setInterval(myFunction, 1000);

// After 5 seconds, clear the interval to stop further executions
setTimeout(() => {
    clearInterval(interval);
    console.log("Interval cleared. No more executions.");
}, 5000);
