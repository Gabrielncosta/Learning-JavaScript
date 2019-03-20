// Just a exercise for training the concepts of coercing and equality

var a = prompt("Number:");
var b = Number(a);

// Var "a" is stored as an string, while var "b" is stored as a integer, so they aren't exactly equal.

if (b === a)
{
	console.log ("b is exactly equal to a");
}
//false

else if (b == a)
{
    console.log("b is loosely equal to a");
}
//true
