



function average(x,y){

    let avg=(x+y)/2;

    return avg;

}

console.log(average(5,5));






// hoisting
console.log(add(5,5));

function add(x,y){

    let sum=x+y;
    return sum;
}

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* "
    }
    return line + "\n";
}

console.log(makeLine(10));

//function expression

var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
        catMessage += "meow ";
    }
    return catMessage;
};

console.log(catSays(5));