
calc => a
    input 
    input2



    
function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(opt == 'add'){
        out = parseFloat(a)+parseFloat(b);
    }else{
        out = parseFloat(a)-parseFloat(b);
    }
    return out;
    //document.getElementById('output').innerText = out
}


var value = calc("add")

