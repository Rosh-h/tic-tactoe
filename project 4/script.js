console.log("Welcome to Tic Tac Toe")
function myfunction(){
    let text;
    let person=prompt("Please enter your name:","Guest 1");
    if(person==null||person==""){
        text="user cancelled the prompt.";
    }else{
        text="Hello "+ person+"! Lets Play the Game";
    }
    document.getElementById("demo").innerHTML=text;
}
let music = new Audio("music.mp3")
let audioturns = new Audio("ding-sound-effect_2.mp3")
let gameover = new Audio("gameover.mp3")
let turns = "x";
let isgameover=false;
// function to chng turn
const changeTurn = () => {
    return turns === "x" ? "0" : "x"
}
//function to check win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            // document.querySelector(".line").style.width="20vw"
            document.querySelector(".line").style.width = "0";
        }
    })
}

//main cuta kutai
//  music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element => {
    let boxtext = Element.querySelector('.boxtext')
    Element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turns;
            turns = changeTurn();
            audioturns.play()
            checkWin();
            if(! isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turns;
            }
        }
    })
})
// button ko rest krnae kae liyea aad onclick listener button
reset.addEventListener('click',()=>{
let boxtexts=document.querySelectorAll('.boxtext');
Array.from(boxtexts).forEach(element=>{
    element.innerText=""
});
    turns="x"
   isgameover=false
   document.querySelector(".line").style.width="0";
        document.getElementsByClassName("info")[0].innerText="Turn for" + turns;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    
})