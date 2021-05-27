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
// document.write("<p>hello world</p>");


// document.write("<h1>Gitコマンド難しい</h1>");

console.log(typeof true);

console.log(typeof 43);
console.log(typeof "JavaScript");
console.log(typeof null);

console.log(typeof ["配列"]); 
console.log(typeof { "key": "value" }); 






let parent = document.getElementById("parent");
let idx = 7;


function addChildCreate(){
    let child = document.createElement("div");
    addChild(child);
}

function addChildCopy(){
    let child = document.getElementById("parent").firstElementChild.cloneNode(true);
    addChild(child);
}



function addChild(child){
    child.id = "child" + idx;
    child.innerText = "子要素" + idx;
    idx--;
    child = parent.appendChild(child);
    console.log(child);
}



function test(){
    console.log(this);
}


test();


function click1(){
    alert("１がクリックされました");
}

function click2(){
    alert("2がクリックされました");
}

let count = 10; 

while(count >= 0){
    console.log(count);
     count--;
}



let fruits = ['apple', 'orange', 'grape', 'peach'];
fruits.push = "banana";

console.log(fruits.length);

for (let i = 0; i < fruits.length -1; i++){
    console.log(fruits[i]);
}

function strongLink(node){
    if(node.nodeName === 'a' || node.nodeName === 'A'){
        node.style.color = 'blue';
    }
    for (let i = 0; i < node.childNodes.length; i++) {
        strongLink(node.childNodes[i]);  //再帰的な呼び出し
      }
}

let contens = document.getElementById("dom-contents");

strongLink(contens);



let junior = false;
let age = 34;
// let goodat = "JS";
let goodat = "CSS"


if( !junior  && age < 30){
    if(goodat === "JS"){
        console.log("フロントエンド開発お願いします");
    }else if(goodat === "CSS"){
        console.log("CSSお願いします");
    }
}

const div1 = document.getElementById("div1");
const text1 = document.getElementById("text1");
const button1 = document.getElementById("button1");

const func1 = () =>{
    const str1 = text1.value;
    console.log(`text1に入力された値は「${str1}」です。`);

    const str2 = div1.innerHTML;
    console.log(`div1の中のHTMLは「${str2}」です。`); 
}

func1()


document.querySelector('.primary').style.backgroundColor = 'red'


const button = document.querySelector('.primary')
button.classList.remove('.primary');
button.classList.add('.secondary');

const style = document.createElement('style')
style.innerHTML = `
  .secondary {
    background-color:;
  }
`
document.body.appendChild(style)



let area1 = (r) =>{
    return r * r * 3;
};


console.log(area1(4));


let surface = (base, height)  =>  {
    return base * height;
};

console.log('この図形の面積は'+ surface(12,24)+'です');

document.getElementById('text').innerHTML =  "こんにちは！";
$(document).ready(function() {
    $(".ajax-box").hover(function() {
      // マウスが乗った時の処理
      $(this).css({
        "background-color": "#ff9999",
      });
    }, function() {
  
      // マウスが外れた時の処理
      $(this).css({
        "background-color": "#dddddd",
      });
    });
  });