// document.querySelector(".n1l").classList.add("hide"); 

// document.querySelector(".n1l").classList.remove("hide"); 

//document.querySelector(".n1").classList.add("extend");

//document.querySelector(".n1").classList.remove("extend");

//document.querySelector(".n1 > div").classList.add("extend");

//document.querySelector(".n1 > div").classList.remove("extend");

function extender(btn) {
    let valor = btn.id;
    if(valor.length==5){
        valor = valor.substring(0,4);
    }
    const derecha ="#" +valor;
    const izquierda ="." +valor +"l";
    const derExt = "#" +valor +" > div";
    
    document.querySelector(izquierda).classList.add("hide"); 

    document.querySelector(derecha).classList.add("extend");
    document.querySelector(derExt).classList.add("extend");

    
}


function contraer(btn) {
    let valor = btn.id;
    if(valor.length==5){
        valor = valor.substring(0,4);
    }
    const derecha ="#" +valor;
    const izquierda ="." +valor +"l";
    const derExt = "#" +valor +" > div";

    document.querySelector(derExt).classList.remove("extend");
    document.querySelector(izquierda).classList.remove("hide"); 
    document.querySelector(derecha).classList.remove("extend");
    
    // setTimeout(() => {
    //     document.querySelector(derecha).classList.remove("extend");
    // }, 300)
    
}


function prueba(btn) {
    let derecha = btn.id;
    if(derecha.length==5){
        derecha = derecha.substring(0,4);
    }
}