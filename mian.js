


    document.getElementById("next").addEventListener("click", function(){
        fetchData()
        document.getElementById("next").disabled = true; 
        
})




document.addEventListener("DOMContentLoaded", e => {
    fetchData()
    document.getElementById("next").disabled = true; 
})

const pregunta = document.getElementById("pregunta")
let contador = 1
const fetchData = async () => {
    try{

contador = contador + 1
const res = await fetch("https://restcountries.com/v3.1/all")
let data = await res.json() 
const fromDb = undefined;
let arr = fromDb || [];

for (var i = 0; i < 1; i++) {
    let x = Math.floor(Math.random()*250);
    
    arr[i] = data[x];
    console.log(arr);
    paises(arr,data)
  }


    }catch(error){
        console.log(error)
    }
}












function paises(arr,data){
    
      
        let a = Math.floor(Math.random()*250);
        let b = Math.floor(Math.random()*250);
        let c = Math.floor(Math.random()*250);  
        let aleatorio = [data[a],data[b],data[c],arr[0]]
        var correcto = arr[0].name.common
        aleatorio.sort(function() { return Math.random() - 0.5 });
        
        
        let elementos = ""
        
        let tipo =  Math.ceil(Math.random()*2);
      


        if (1 == tipo && contador < 11) {
            elementos += `
            <div class="card text-dark bg-light mb-3" style="max-width: 28rem;">
                <img src=${arr[0].flags.svg} class="card-img-top" alt="...">
                <div class="card-header">
                    <h3>¿a que pais pertenece esta bandera?</h3>
                </div>
                <div class="card-body">
                    <button type="button" class="btn btn-outline-warning" id="bnt1">A. ${aleatorio[1].name.common}</button>
                    <button type="button" class="btn btn-outline-warning" id="bnt2">B. ${aleatorio[0].name.common}</button>
                    <button type="button" class="btn btn-outline-warning" id="bnt3">C. ${aleatorio[2].name.common}</button>
                    <button type="button" class="btn btn-outline-warning" id="bnt4">D. ${aleatorio[3].name.common}</button>
                </div>
            </div>
       `
        } else if (2 == tipo && contador < 11){
            elementos += `
            <div class="card text-dark bg-light mb-3" style="max-width: 28rem;">
               
                <div class="card-header">
                    <h3>${arr[0].capital}¿Es la capital de?</h3>
                </div>
                <div class="card-body">
                    <button type="button" class="btn btn-outline-warning" id="bnt1">A. ${aleatorio[1].name.common}</button>
                    <button type="button" class="btn btn-outline-warning" id="bnt2">B. ${aleatorio[0].name.common}</button>
                    <button type="button" class="btn btn-outline-warning" id="bnt3">C. ${aleatorio[2].name.common}</button>
                    <button type="button" class="btn btn-outline-warning" id="bnt4">D. ${aleatorio[3].name.common}</button>
                </div>
            </div>
       `
        }else{
            
            elementos += `
            <div class="card text-dark bg-light mb-3" style="max-width: 28rem;">
               
            <div class="card-header">
                <h3>Resultados </h3>
            </div>
            <div class="card-body"id="bnt1">
           
           
              <p >tienes <span id="aciertos"></span> respueatas correctas</p>  
            </div>
        </div>
       `
       
       contador = 1
        }
      
      
       
       
           

            pregunta.innerHTML = elementos
            
         




       
        
        ponerEvento(correcto,"bnt2")
        ponerEvento(correcto,"bnt1")
        ponerEvento(correcto,"bnt3")
        ponerEvento(correcto,"bnt4")

    
}






function ponerEvento(correcto,selector){
document.getElementById(selector).addEventListener("click", function() {
    let buenas=0
   document.getElementById("bnt1").disabled = true; 
   document.getElementById("bnt2").disabled = true; 
   document.getElementById("bnt3").disabled = true;
   document.getElementById("bnt4").disabled = true; 
   document.getElementById("next").disabled = false; 
   let arrid = ["bnt1","bnt2","bnt3","bnt4"]
    if (correcto == document.getElementById(selector).textContent ) {
         this.style.backgroundColor = "green"; 
         buenas = buenas + 1

    } 
    else {
        this.style.backgroundColor = "red"; 
        for(var i = 0; i < 4; i++ ){
            if (correcto == document.getElementById(arrid[i]).textContent ) {
            document.getElementById(arrid[i]).style.backgroundColor = "green";
            
            }
            
        }
        
       
    }
});
   
    }



