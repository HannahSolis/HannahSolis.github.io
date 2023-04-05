// document.querySelector(".n1l").classList.add("hide"); 

// document.querySelector(".n1l").classList.remove("hide"); 

//document.querySelector(".n1").classList.add("extend");

//document.querySelector(".n1").classList.remove("extend");

//document.querySelector(".n1 > div").classList.add("extend");

//document.querySelector(".n1 > div").classList.remove("extend");

function extender() {
    
    // document.querySelectorAll(".rl").classList.add("hide"); 
    // document.querySelectorAll(".rr").classList.add("extend");
    // document.querySelectorAll(".rr > div").classList.add("extend");

    document.querySelectorAll(".rl").forEach(item => item.classList.add("hide"));
    document.querySelectorAll(".rr").forEach(item => item.classList.add("extend"));
    document.querySelectorAll(".rr > div").forEach(item => item.classList.add("extend"));
    
}


function contraer() {

    // document.querySelectorAll(".rl").classList.remove("hide"); 
    // document.querySelectorAll(".rr").classList.remove("extend");
    // document.querySelectorAll(".rr > div").classList.remove("extend");

    document.querySelectorAll(".rl").forEach(item => item.classList.remove("hide"));
    document.querySelectorAll(".rr").forEach(item => item.classList.remove("extend"));
    document.querySelectorAll(".rr > div").forEach(item => item.classList.remove("extend"));
    
}

