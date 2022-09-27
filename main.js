let tiempo=0;


function iniciar(){
    tiempo=tiemp.value;
    temporizador(tiempo);
}

function temporizador(tiempo){
    

    regre.innerText=tiempo;
    //tiempo=regre.innerText;

    if (tiempo===0){
        regre.innerText="Fin";
        
    }
    else{
        regre.innerText=tiempo;
        setTimeout(temporizador,1000,tiempo-1);
    }
    
}


let tiemp=document.getElementById("input");
let btn=document.getElementById("btn");
let regre=document.getElementById("div-regre");

btn.addEventListener("click",iniciar);
