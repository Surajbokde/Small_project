const quiz=[
    {
        question:" JSON stands for ________________",
        a:"Java Standard Output Network",
        b:"JavaScript Object Notation",
        c:"JavaScript Output Name",
        d:"Java Source Open Network",
        correct:"b"
    },
    {
        question:" Which of the following is not a type in JSON?",
        a:"date",
        b:"Object",
        c:"Array",
        d:"string",
        correct:"a"
    },
    {
        question:"hello3 ?",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        correct:"a"
    }
]

const check=document.getElementById("submit");
const a=document.getElementById("a_option");
const b=document.getElementById("b_option");
const c=document.getElementById("c_option");
const d=document.getElementById("d_option");

const que=document.getElementById("question");
let curr=0;
function loadquiz(){
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");
    text1.style.display = "block";
    text2.style.display = "none";
    text3.style.display = "none";
    const currentquiz=quiz[curr];
    a.innerHTML=currentquiz.a;
    b.innerHTML=currentquiz.b;
    c.innerHTML=currentquiz.c;
    d.innerHTML=currentquiz.d;
    que.innerHTML=currentquiz.question;
}


function checkanswer(){
    const currentquiz=quiz[curr];
    const correctans=currentquiz.correct;
    let youroption;
    if(document.getElementById("a").checked==true){
        youroption="a";
        
    }
    if(document.getElementById("b").checked==true){
        youroption="b";
        
    }
    if(document.getElementById("c").checked==true){
        youroption="c";
        
    }
    if(document.getElementById("d").checked==true){
        youroption="d";
        
    }
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");
    if(youroption==correctans){
        text2.style.display = "block";
        text1.style.display = "none";
    }
    else{
        text3.style.display = "block";
        text1.style.display = "none";
    }
}
loadquiz();
function nextque(){
    
    document.getElementById("a").checked=false;
    document.getElementById("b").checked=false;
    document.getElementById("c").checked=false;
    document.getElementById("d").checked=false;
    
}

check.addEventListener("click",() => {
    const currentquiz=quiz[curr];
    
    setTimeout(() => {  
        if(curr==quiz.length){
            alert("QuizOver");
            curr=0;
        }
     }, 3000);
    
    if(curr!=quiz.length){
    checkanswer();
    nextque();
    setTimeout(() => {  
        loadquiz();
        curr++;
     }, 1000);
    
    }
});

