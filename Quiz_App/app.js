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

let score=0;
const check=document.getElementById("submit");
const a=document.getElementById("a_option");
const b=document.getElementById("b_option");
const c=document.getElementById("c_option");
const d=document.getElementById("d_option");

const que=document.getElementById("question");
let curr=0;


function loadquiz(){
    
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
    
    if(youroption==correctans){
        score++;
        console.log(score);
    }
    // else{
    //     text3.style.display = "block";
    //     text1.style.display = "none";
    // }
}



function nextque(){
    
    document.getElementById("a").checked=false;
    document.getElementById("b").checked=false;
    document.getElementById("c").checked=false;
    document.getElementById("d").checked=false;
    
}
let flag=0;
check.addEventListener("click",() => {
    if(flag==1){
        flag=0;
        location.reload();

    }
    checkanswer();
    curr++;
    if(curr==quiz.length){
    
        document.getElementById("displayquiz").style.display="none";
        document.getElementById("question").innerHTML="<h3>Your score is :"+ score+"/"+quiz.length+"</h3>";
        document.getElementById("submit").innerHTML="Start Again";
        curr=0;
        flag=1;
        
    }else{
        nextque();
        loadquiz();
    }

    
   
    
    
});

loadquiz();