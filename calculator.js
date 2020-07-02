var startOfComputation = false;
var storedValueTs = "";
var storedValueBs ="";

var newComputation = false;

$(".btn").click(function(){

    var pressedKey = this.id;

    if(newComputation){
        $(".history-value").val("");
        if (!anOperation(pressedKey)){
            storedValueTs = "";
        }
        
        newComputation = false;
    }

    if (!anOperation(pressedKey)){
        storedValueBs += pressedKey;
       $(".input-value").val(storedValueBs);
       
   }



    
    if(anOperation(pressedKey)){
       storedValueTs += storedValueBs + pressedKey;
       storedValueBs = "";
       $(".history-value").val(storedValueTs);
       $(".input-value").val(storedValueBs);
        
    }
     

});

$(".equal").click(function(){
    var result = eval(storedValueTs + storedValueBs);
    storedValueTs += storedValueBs; 
    // storedValueBs += result;
    $(".history-value").val(storedValueTs);
    $(".input-value").val(result);
    storedValueBs = "";

    endOfComputation(result);

});

$(".clear").click(function(){
    storedValueTs = "";
    storedValueBs = "";
    $(".history-value").val(storedValueTs);
    $(".input-value").val(storedValueBs);

});

$(".delete").click(function(){

    
    if(storedValueBs.length>0){
        storedValueBs = storedValueBs.substr(0,storedValueBs.length-1);
        $(".input-value").val(storedValueBs);
        console.log(storedValueBs);
        console.log(storedValueBs.length);
        
    }else{
        storedValueTs = storedValueTs.substr(0,storedValueTs.length-1);
        $(".history-value").val(storedValueTs);
        console.log(storedValueTs);
        console.log(storedValueTs.length);
   
    }

});

function endOfComputation(res){
    storedValueTs = res;
    storedValueBs = "";

    newComputation = true;
}


function anOperation(ops){
    return ops === "+" || ops === "-" || ops === "*" || ops === "/" || ops === "/100";
}

