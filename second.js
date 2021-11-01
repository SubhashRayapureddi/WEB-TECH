var x=25;
function p(){
   console.log("Globally value of x is :"+ x);
 q ();
}
function q(){
    x=5;
console.log(" locally value of x: "+x);
}
console.log(x);
p ();
