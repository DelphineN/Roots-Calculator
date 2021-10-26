var a, b, c;
var outputText;

function Calculate() {
    console.log("Calculate")
    a= document.getElementById("avalue").value
    b= document.getElementById("bvalue").value
    c= document.getElementById("cvalue").value
    console.log(a, b, c)
}

function validate() {
    // get the input    
    a= document.getElementById("avalue").value
    b= document.getElementById("bvalue").value
    c= document.getElementById("cvalue").value

    console.log(a, b, c)
    // validate a, b and c 
    if (a == 0) {
        outputText = "<em>a</em> cannot equal zero!";
    } else if (isNaN(a)) {
        outputText = "<em>a</em> must be a number!";
    } else if (isNaN(b)) {
        outputText = "<em>b</em> must be a number!";
    } else if (isNaN(c)) {
        outputText = "<em>c</em> must be a number!";
    } else {
    // calculate the result using x = (-b +- sqrt(b^2 - 4ac)) / 2a
            var bSquared = Math.pow(b, 2)
            var fourAC = 4 * a * c
            if (bSquared < fourAC) {
                outputText = "Solution: x's roots are imaginary";
            } else if (bSquared == fourAC) {
                outputText = "Solution: x = single-root";
            } else {                
                var x1 = (-b - Math.sqrt(bSquared - fourAC)) / (2 * a);
                var x2 = (-b + Math.sqrt(bSquared - fourAC)) / (2 * a);
                outputText= "Solution: x = " + x1 + ", x =" + x2
            } 
            // outputText = "Solution" + (a == 1 ? "" : a) + "x^2 + " (b ==1 ? "" : b) + "x + " + c + " = 0, x can equal " + x1 + x2
            console.log(x1, x2)
    }


    // output the result (or errors)
    document.getElementById ("output_text").innerHTML= outputText;
}