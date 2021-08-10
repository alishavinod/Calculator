var string = '';
var prevHtml;
var res;
function themeToggle(){
if(document.querySelector("input").value==='1')
{
    document.querySelector("body").classList="theme1";
}
else
    if(document.querySelector("input").value==='2')
{
    document.querySelector("body").classList="theme2";
}
else
    if(document.querySelector("input").value=='3')
    {
        document.querySelector("body").classList="theme3";
    }
}
function isOperator (c){
    if(c=='+' || c=='-' || c=='*' || c=='/' || c=='x' || c=='.')
        return true;
    return false;
}
var len = document.getElementsByClassName("calc").length;
for( var i=0; i<len; i++)
{
    document.getElementsByClassName("calc")[i].addEventListener("click", function(){
    var buttonHtml = this.innerHTML;
    if((string.length==0 && isOperator(buttonHtml)) || (isOperator(string[string.length-1]) && isOperator(buttonHtml)))
    {
        return;
    }
    if(string[0]=='0' && string.length==1 && !isOperator(buttonHtml)) 
    {
        string=string.slice(0,-1);
    }
    if(isOperator(string[string.length-2]) && string[string.length-1]=='0' && string[string.length-2]!='.' && buttonHtml!='.')
    {
        string=string.slice(0,-1);
    }
    if(buttonHtml=='x')
        buttonHtml='*';
    string = string + buttonHtml;
    document.getElementsByClassName("result")[0].innerHTML=string;
});
}
function calculate(){
if(string && !isOperator(string[string.length-1]))
{
    res=eval(string);
    if(res=="Infinity" || isNaN(res) || res=="-Infinity")
    {
        document.getElementsByClassName("result")[0].innerHTML="Error";
        string='';
    }
    else
    {
    document.getElementsByClassName("result")[0].innerHTML=res;
    res=res.toString();
    string=res;
    }
}
}
function delChar(){
    
if(string)
{
    string = string.slice(0,-1);
    document.getElementsByClassName("result")[0].innerHTML=string;
    if(!string)
        reset();

}
else
    reset();
}
function reset(){
    string='';
    res=0;
    document.getElementsByClassName("result")[0].innerHTML=res;
}
