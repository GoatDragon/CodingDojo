//I got 13 out of 15 correct on my first guess.

function a(){
    return 35;
}
//console.log(a())
//prediction: 35
//correct

function a(){
    return 4;
}
//console.log(a()+a());
//prediction: 8
//correct

function a(b){
    return b;
}
//console.log(a(2)+a(4));
//prediction: 6
//correct

function a(b){
    console.log(b);
    return b*3;
}
//console.log(a(3));
//<div id="copy-toolbar-container" style="cursor: pointer; position: absolute; top: 5px; right: 5px; padding: 0px 3px; background: rgba(224, 224, 224, 0.2) none repeat scroll 0% 0%; box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 0px 0px; color: rgb(187, 187, 187); border-radius: 0.5em; font-size: 0.8em;"><span id="copy-toolbar">copy</span></div>
//prediction: why is there HTML in my JS? Regardless, should log: 3, 9 after commenting out the HTML.
//correct

function a(b){
   return b*4;
   console.log(b);
}
//console.log(a(10));
//preciction: 40, 10
//incorrect, the return kicks you out of the function before the inner console.log() runs.

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
//console.log(a(15));
//prediction: 4
//correct

function a(b,c){
    return b*c;
}
//console.log(10,3);
//console.log( a(3,10) );
//prediction: 10, 3, 30
//correct

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
//console.log(3);
//console.log(4);
//prediction: 3, 4
//correct, you tricksy hobbitses

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
//a();
//prediction: 2, 5, 8, 11
//correct

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
//a(0,10);
//console.log(a(0,10));
//prediction: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
//correct

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
//prediction: nothing, unless you called the function. but if you did it would print 0 through 9, 0, 0 through 9, 1, etc. 10 times over.
//yup

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
//predicton: again, function not called, but if it were called it would print 0, 0, 0, 1, 0, 2, 0, 3, ... 0, 9, 10, 0, 0, 10, 1, 0, 1, 1, etc.
//yup

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
//console.log(z);
//prediction: 10
//correct

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
//a();
//console.log(z);
//prediction: 15, 15
//incorrect, the scope of that inner var z call tripped me up again.

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//prediction: 15, 15
//correct