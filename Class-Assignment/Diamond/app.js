function pattern( num ) 
{
    num = parseInt(num,5);

    var i, space;

    document.write("")
    document.write(" <pre>");

    for(i = 1; i <= num; i++ )
    {
        
        for ( space = 1; space <= num-i; space++ )
        {
            document.write(" ");
        }
        
        for ( space = 1; space <= i; space++ )
        {
            document.write(" *");
        }
        document.write("\n");
    }
   
    for(i = num-1; i >= 1; i-- )
    {
       
        for ( space = 1; space <= num-i; space++ )
        {
            document.write(" ");
        }
        
        for ( space = 1; space <= i; space++ )
        {
            document.write(" *");
        }
        document.write("\n");
    }
}

pattern(30);