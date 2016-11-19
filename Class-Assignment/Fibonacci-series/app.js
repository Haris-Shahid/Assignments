var num =prompt("Enter any Number");
function fibonacci() {
    var a = 0;
    var b = 1;
    var c;
    for(var i = 0; i < num; i++ )
{
    if(i <= 1)
    {
        c=i;
    }
    else
    {
        c = a + b;
        a = b;
        b = c;
    }
    document.write( c + "<br>");
}

}
fibonacci();