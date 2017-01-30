//function for calculating time of quiz
var sec = 59;

function start()
{
    document.getElementById("qs").className = "hide";
    document.getElementById("q1").className = "show";
    var stop = setInterval(quizTime,1000);
    function quizTime()
{
    document.getElementById("time").innerHTML = "Time : "+sec;
    sec = sec - 1;
    if(sec == 0)
    {
        document.getElementById("q1").className = "hide";
        document.getElementById("q2").className = "hide";
        document.getElementById("q3").className = "hide";
        document.getElementById("q4").className = "hide";
        document.getElementById("q5").className = "hide";
        result();
        clearInterval(stop);
        document.getElementById("time").className = "hide";
    }
    else
    {
    return sec;
    }
}
}

//declreation of global variables
var score = 0;
var j = 1;
var s = "";
var rightAnswers = ["3","false","onmousescroller","letter","all"];
//function for checking answer 
function check()
{
   var a = document.getElementsByName("ans");
   for(var i = 0 ; i < a.length ; i++)
   {
       if(a[i].checked)
       {
           s = a[i].value;
           for(k = 0 ; k < rightAnswers.length ; k++)

            if(s == rightAnswers[k])
            {
                //adding numbers to your final result
                score++;
                a[i].value = "wrong";
            }
        }
    }
    //for changing the question 
    document.getElementById("q"+j).className = "hide";
    j = j + 1;
    document.getElementById("q"+j).className = "show";  
       
   
}
function ref(){
     location.reload() ;
}
// function to display result
function result()
{
    document.getElementById("q6").className = "hide";
    document.getElementById("time").className = "hide";
    var ruku = sec;
    document.getElementById("head").className = "hide";
    document.getElementById("main").style.border = "2px solid #967c82";
    var correct = score;
    var inCorrect = 5 - score;
    var perc = (correct*100)/5;
    document.getElementById("result").innerHTML = "<h1>Result</h1>correct answers = "+correct+"<br> InCorrect answers = "
    +inCorrect+"<br> percentage is " +perc+ "% <br><br><br><input class='design' type='button' onclick='ref()' value='Try Again'> <br><br><br>" ;
}