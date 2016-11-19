var num = prompt("Enter a Number");
function Table() {
    for(var i=1;i<21;i++)
{
    document.write(num +"  "+ " * " + "  " + "  "  + i + " " + " = " + num*i + "<br>");
}
}
Table();