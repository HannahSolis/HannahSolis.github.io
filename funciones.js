// document.querySelector(".n1l").classList.add("hide"); 

// document.querySelector(".n1l").classList.remove("hide"); 

//document.querySelector(".n1").classList.add("extend");

//document.querySelector(".n1").classList.remove("extend");

//document.querySelector(".n1 > div").classList.add("extend");

//document.querySelector(".n1 > div").classList.remove("extend");

function extender(btn) {
    const derecha ="#" +btn.id;
    console.log(derecha);
    const izquierda ="." +btn.id +"l";
    console.log(izquierda);
    const derExt = "#" +btn.id +" > div";
    console.log(derExt);
    
    document.querySelector(izquierda).classList.add("hide"); 

    document.querySelector(derecha).classList.add("extend");
    document.querySelector(derExt).classList.add("extend");

    
}


function contraer(btn) {
    const derecha ="#" +btn.id;
    console.log(derecha);
    const izquierda ="." +btn.id +"l";
    console.log(izquierda);
    const derExt = "#" +btn.id +" > div";
    console.log(derExt);

    document.querySelector(derExt).classList.remove("extend");
    document.querySelector(izquierda).classList.remove("hide"); 
    
    
    setTimeout(() => {
        document.querySelector(derecha).classList.remove("extend");
    }, 300)
    
}