var string = '';
var prevHtml;
var res;

document.getElementsByClassName("checkmark")[0].addEventListener("click", function(){
    document.getElementsByTagName("body")[0].style.backgroundColor="hsl(222, 26%, 31%)";
    document.getElementsByTagName("body")[0].style.color="white";
    document.getElementsByClassName("result")[0].style.backgroundColor="hsl(224, 36%, 15%)";
    clen=document.querySelectorAll(".container-2").length;
    for( var i=0; i<clen; i++){
        document.getElementsByClassName("container-2")[i].style.backgroundColor="hsl(223, 31%, 20%)";
    }
    len=document.querySelectorAll("button").length;
    for( var i=0; i<len; i++){
    document.querySelectorAll("button")[i].style.color="hsl(221, 14%, 31%)";
    document.getElementsByTagName("button")[i].style.backgroundColor="hsl(30, 25%, 89%)";
    document.getElementsByTagName("button")[i].style.boxShadow="0px 4px hsl(28, 16%, 65%)";
    }
    document.getElementsByClassName("blue-button")[0].style.backgroundColor="hsl(225, 21%, 49%)";
    document.getElementsByClassName("blue-button")[0].style.boxShadow="0px 4px hsl(224, 28%, 35%)";
    document.getElementsByClassName("blue-button")[0].style.color="white";
    document.getElementsByClassName("blue-button")[1].style.backgroundColor="hsl(225, 21%, 49%)";
    document.getElementsByClassName("blue-button")[1].style.boxShadow="0px 4px hsl(224, 28%, 35%)";
    document.getElementsByClassName("blue-button")[1].style.color="white";
    document.getElementsByClassName("equals")[0].style.backgroundColor="hsl(6, 63%, 50%)";
    document.getElementsByClassName("equals")[0].style.boxShadow="0px 4px hsl(6, 70%, 34%)";
    document.getElementsByClassName("equals")[0].style.color="white";
});
document.getElementsByClassName("checkmark")[1].addEventListener("click", function(){
    document.getElementsByTagName("body")[0].style.backgroundColor="hsl(0, 0%, 90%)";
    document.getElementsByTagName("body")[0].style.color="hsl(60, 10%, 19%)";
    document.getElementsByClassName("result")[0].style.backgroundColor="hsl(0, 0%, 93%)";
    clen=document.querySelectorAll(".container-2").length;
    for( var i=0; i<clen; i++){
        document.getElementsByClassName("container-2")[i].style.backgroundColor="hsl(0, 5%, 81%)";
    }
    len=document.querySelectorAll("button").length;
    for( var i=0; i<len; i++){
    document.getElementsByTagName("button")[i].style.backgroundColor="hsl(30, 25%, 89%)";
    document.getElementsByTagName("button")[i].style.boxShadow="0px 4px hsl(28, 16%, 65%)";
    document.getElementsByTagName("button")[i].style.color="hsl(60, 10%, 19%)";
    }
    document.getElementsByClassName("blue-button")[0].style.backgroundColor="hsl(185, 42%, 37%)";
    document.getElementsByClassName("blue-button")[0].style.boxShadow="0px 4px hsl(185, 58%, 25%)";
    document.getElementsByClassName("blue-button")[0].style.color="white";
    document.getElementsByClassName("blue-button")[1].style.backgroundColor="hsl(185, 42%, 37%)";
    document.getElementsByClassName("blue-button")[1].style.boxShadow="0px 4px hsl(185, 58%, 25%)";
    document.getElementsByClassName("blue-button")[1].style.color="white";
    document.getElementsByClassName("equals")[0].style.backgroundColor="hsl(25, 98%, 40%)";
    document.getElementsByClassName("equals")[0].style.boxShadow="0px 4px hsl(25, 99%, 27%)";
    document.getElementsByClassName("equals")[0].style.color="white";
});
document.getElementsByClassName("checkmark")[2].addEventListener("click", function(){
        document.getElementsByTagName("body")[0].style.backgroundColor="hsl(268, 75%, 9%)";
        document.getElementsByTagName("body")[0].style.color="hsl(52, 100%, 62%)";
    document.getElementsByClassName("result")[0].style.backgroundColor="hsl(268, 71%, 12%)";
    clen=document.querySelectorAll(".container-2").length;
    for( var i=0; i<clen; i++){
        document.getElementsByClassName("container-2")[i].style.backgroundColor="hsl(268, 71%, 12%)";
    }
    len=document.querySelectorAll("button").length;
    for( var i=0; i<len; i++){
    document.getElementsByTagName("button")[i].style.backgroundColor="hsl(268, 47%, 21%)";
    document.getElementsByTagName("button")[i].style.boxShadow="0px 4px hsl(290, 70%, 36%)";
    document.getElementsByTagName("button")[i].style.color="hsl(52, 100%, 62%)";
    }
    document.getElementsByClassName("blue-button")[0].style.backgroundColor="hsl(281, 89%, 26%)";
    document.getElementsByClassName("blue-button")[0].style.boxShadow="0px 4px hsl(285, 91%, 52%)";
    document.getElementsByClassName("blue-button")[0].style.color="white";
    document.getElementsByClassName("blue-button")[1].style.backgroundColor="hsl(281, 89%, 26%)";
    document.getElementsByClassName("blue-button")[1].style.boxShadow="0px 4px hsl(285, 91%, 52%)";
    document.getElementsByClassName("blue-button")[1].style.color="white";
    document.getElementsByClassName("equals")[0].style.backgroundColor="hsl(176, 100%, 44%)";
    document.getElementsByClassName("equals")[0].style.boxShadow="0px 4px hsl(177, 92%, 70%)";
    document.getElementsByClassName("equals")[0].style.color="hsl(198, 20%, 13%)";
});   
function isOperator (c){
    if(c=='+' || c=='-' || c=='*' || c=='/')
        return true;
    return false;
}
var len = document.getElementsByClassName("calc").length;
for( var i=0; i<len; i++)
document.getElementsByClassName("calc")[i].addEventListener("click", function(){
    var buttonHtml = this.innerHTML;
    if(string.length==0 && isOperator(buttonHtml))
    {
        return;
    }
    if(isOperator(string[string.length-1]) && isOperator(buttonHtml))
    {
        return;
    }
    if(buttonHtml=='x')
        buttonHtml='*';
    string = string + buttonHtml;
    document.getElementsByClassName("result")[0].innerHTML=string;
});
function calculate(){
if(string && !isOperator(string[string.length-1]))
{
    res=eval(string);
    document.getElementsByClassName("result")[0].innerHTML=res;
    string='';
}
}
function delChar(){
if(string)
{
    string = string.slice(0,-1);
    document.getElementsByClassName("result")[0].innerHTML=string;
}
else
    reset();
}
function reset(){
    string='';
    res=0;
    document.getElementsByClassName("result")[0].innerHTML=res;
}
