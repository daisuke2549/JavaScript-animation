let elem = document.getElementById("test");
if(!elem){
    // alert("testというIDが存在しません");
}

let elem1 = document.getElementById("hoge1");
let elem2 = document.getElementById("hoge2");
let elem3 = document.getElementById("hoge3");

if(!elem1 || !elem2){
    elem3.style.color = "blue";
}


const a = 3;
const b = -2;

console.log(!!(a > 0 && b < 0 ))

const c = 100;

if(c > 100){
console.log("cは100より大きくないよ");
}
document.write("<p>hello world</p>");


document.write("<h1>Gitコマンド難しい</h1>");

console.log(typeof true);

console.log(typeof 43);
console.log(typeof "JavaScript");
console.log(typeof null);

console.log(typeof ["配列"]); 
console.log(typeof { "key": "value" }); 