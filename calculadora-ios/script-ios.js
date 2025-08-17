const display = window.document.getElementById('display');
let calculado = false;
function Teclas(valor){        
    if (calculado){
        display.value ="";
        calculado = false;
    }
    display.value += valor;
}
function Limpar(){
    display.value  = "";
}
function calcular(){
    let result = eval(display.value);
    if (isFinite(result)){
        display.value = eval(display.value);
        calculado = true;
    }else{
        display.value = "ERROR";
        calculado = true;
    }

}           
        
        
    
    

