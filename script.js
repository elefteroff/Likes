var countElement1 = document.querySelector("#count1");
var countElement2 = document.querySelector("#count2");
var countElement3 = document.querySelector("#count3");
var count1 = 0;
var count2 = 0;
var count3 = 0;

function add1() {
    count1++;
    countElement1.innerText = count1 + " likes(s)";
    console.log(count1);
}

function add2() {
    count2++;
    countElement2.innerText = count2 + " likes(s)";
    console.log(count2);
}

function add3() {
    count3++;
    countElement3.innerText = count3 + " likes(s)";
    console.log(count3);
}