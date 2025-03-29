// the console() will only output in a browser window, or
//in the output tab of a terminal window but the code must be "clean",
//without references to browser specific objects like the "document object"
//I also installed the Code Runner component (but might be superfluous)
//since I already have node.js and can run the code directly

const $ = document.querySelector.bind(document)

function add(a, b) {
    const c = a + b;
    return c;
}

const output = add(2, 2)

console.log(output)
$('#output').innerHTML = output
