const timmerlast =new Date( 2022,0, 1, 0, 0, 0).getTime();


function countdown(){
    const date=  new Date().getTime();
    
    var currentTime=timmerlast-date;
    document.getElementById("day").innerHTML=Math.floor(currentTime/(1000*60*60*24));
    document.getElementById("hour").innerHTML=Math.floor((currentTime%(1000*60*60*24))/(1000*60*60));
    document.getElementById("min").innerHTML=Math.floor((currentTime%(1000*60*60))/(1000*60));
    document.getElementById("sec").innerHTML=Math.floor((currentTime%(1000*60))/(1000));
}
countdown();
//console.log(timmerlast-date);
setInterval(countdown,1000);
