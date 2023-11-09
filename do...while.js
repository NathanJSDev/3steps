// EX 1
var a = 0;
var t = "";
do{
    a += 1;
    t += " " + a;
}while(a < 5);
console.log(t);

// Expected output: " 1 2 3 4 5"


// EX 2
var a = 0;
var t = "";
do{
    a += 1;
    t += " " + a;
}while(a < 0);
console.log(t);

// Expected output: " 1"
