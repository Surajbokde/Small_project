function fun(){
    var input_text = document.getElementById("text_code").value;
    var m="<code>";
    for(var i=0;i<input_text.length;i++)
    {
        if(input_text[i]=="<"){
            m+= "&amp;lt;";
        }else if(input_text[i]==">"){
            m+="&amp;gt;<br>";
        }else{
            m+=input_text[i];
        }
    
    }
    m+="<\code>";
    document.getElementById("text_op").innerHTML=m;
}
