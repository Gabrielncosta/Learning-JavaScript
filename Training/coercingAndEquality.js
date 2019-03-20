// Just a exercise for training the concepts of coercing and equality

var a = prompt("Number:");
var b = Number(a);
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
