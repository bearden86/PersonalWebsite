//enter "Hello World!" into the console
console.log("Hello World!");

//create an alert window with a funny message
alert("Don't you love annoying alert windows?");

//this is a cool js function i looked up to create a greeting based on the local time of the day
// call a function "getGreeting" and use if/else to return a greeting based on the current time.
function getGreeting() {
    const now = new Date(); //create "Date" variable 
    const hours = now.getHours(); //"getHours" returns the current local time in military time

    if (hours < 12) {   //if the time is <12, it's morning           
        return "Good Morning!";
    } else if (hours < 18) {    //if the time is >12<18, it's afternoon
        return "Good Afternoon!";
    } else {    //anything else will be night
        return "Good Evening!";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("greeting");    //targets the "greeting" id of the header in the index file
    greetingElement.textContent = getGreeting();    //calls the function "getGreeting" and sets the textContent of the greetingElement to the returned value
});