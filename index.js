var string = '';
var prevHtml;
var res;
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
document.getElementsByClassName("equals")[0].addEventListener("click", function(){
if(string && !isOperator(string[string.length-1]))
{
    res=eval(string);
    document.getElementsByClassName("result")[0].innerHTML=res;
    string='';
}
});
document.getElementsByClassName("del")[0].addEventListener("click", function(){
if(string)
{
    string = string.slice(0,-1);
    document.getElementsByClassName("result")[0].innerHTML=string;
}
});
document.getElementsByClassName("reset")[0].addEventListener("click", function(){
    string='';
    res=0;
    document.getElementsByClassName("result")[0].innerHTML=res;
});