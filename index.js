const birthDate =document.querySelector("#date");
const luckyNumber =document.querySelector("#number");
const checkBtn =document.querySelector("#checkBtn");

const dsiplay=document.querySelector("#display")


function sumOfDate(){
    if(birthDate.value==""){
        dsiplay.innerHTML="Please Enter Your Birth Date";
    }
    else if (luckyNumber.value==""){
        dsiplay.innerHTML="Please Enter Your Lucky Number";
    }
    else{
        var date=birthDate.value;
        console.log(date)
        date=date.replaceAll("-","0");

        let sum=0;

        for( let i=0;i<date.length;i++){
            
            sum=sum +Number(date[i]);
        }
    
        checkLucky(sum);
    }
}

function checkLucky(sum){
    
    let luckyNumCheck=luckyNumber.value;
    if(sum%luckyNumCheck===0){
      
        dsiplay.innerHTML="Woohooo! Your Birthday is Lucky!!!!";
    }
    else{

        dsiplay.innerHTML="Oooopsss! Birthday is not lucky";
    }
}

checkBtn.addEventListener("click", sumOfDate);