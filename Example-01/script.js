// the console() will only output in a browser window, or
//in the output tab of a terminal window but the code must be "clean",
//without references to browser specific objects like the "document object"
//I also installed the Code Runner component (but might be superfluous)
//since I already have node.js installed and can run the code directly

const $ = document.querySelector.bind(document)

//This is a classic function declaration
//with two parameters
function add(a, b) {
    const c = a + b;
    return c;
}

//Order of parameters matter. If you send only two arguments to a function
//that accepts three parameters, the last parameter becomes unassigned. Try iy out!
//To avoid that, you can assign a default value to the parameter list as below
function addThree(a = 0, b = 0, c = 0) {
    console.log(a);
    console.log(b);
    console.log(c);
    return a + b + c;
}

let output = add(2, 2)
console.log(output)

output = addThree(10, 20); //This works fine since the third parameter gets initialized to zero.
console.log(output);

//Using the "argumets object", a function can be declared to accept any number of arguments when it is invoked
//Normally, you would use this feature when you need to treat the same kind of data types with an unknown number
//of arguments.
//The "argumets object" has an iterrator but is not a full fledged array structure (lacks many array methods like sort(), filter() and map())
function sumOfAny() {
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        sum += arguments[index]; //+= is not the same as =+ Try it!
    }
    return sum;
}

let result = sumOfAny(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);

//So called "Rest parameters" can also be passed to a function.
//They must be used LAST, in the parameter order
function add(...theArgs) {
    let argSum = theArgs.reduce(function (sum, val) {
        return sum + val;
    })
    return argSum;
}

result = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);

console.log('-- the End ---');
$('#output').innerHTML = output
