
function findOddEven(){
    var num = document.getElementById('num').value;
    
    if(num % 2 == 0){
        document.getElementById('result').innerHTML = num + ' &nbsp is an Even Number .';
        console.log(num + " The number is Even.");
    }else{
        document.getElementById('result').innerHTML = num  + '&nbsp is an Odd Number .';
        console.log(num + " The number is Odd.");
    }
    return;
}