function compute()
{
    var principal = document.getElementById('principal').value; 
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    var message = 'If you deposite <mark>'+principal+'</mark></br>At an interest rate of <mark>'+rate+'%</mark></Br>You will recieve an amount of <mark>'+interest+'</mark></br>in the year <mark>'+year;  
  

    if(principal<="0"){
        alert('Enter a positive number');
        principal.focus();
        return false;
    }
    document.getElementById('result').innerHTML= message;
    return true;
}

function updateRate(){
    var rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateval;
}


        
        