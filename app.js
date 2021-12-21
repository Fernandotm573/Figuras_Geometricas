//funciones que calculan el area y perimetro

const valueResult = document.getElementById('result') 

        

//Funciones de las operaciones 

const perimSquare = (side) => side * 4;

function calPeriSquare () {
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);
                          //PROCESO:
    //Cuando se haga click en el boton de perimetro se va a ejecutar la funcion de (calPeriSquare)
    //y esta funcion lo q hace es obtener el valor(value) convertido en numero Number(inputSide.value)
    //ese valor viene de la variable (inputSide) que se le asigna el ID ('inputSide') el cual se obtiene del ID del input
    //este obtiene el resultado y luego lo muestra con el Id del Parrafo ('result')
    const result = `El Perimetro del Cuadrado es: ${perimSquare(value)} cms` 
    valueResult.innerHTML = result
}


const areaSquare = (side) => side * side

function calAreaSquare (){
    let inputSide= document.getElementById('inputSide');
    let value = Number(inputSide.value) 

    const resultl = `El Area de cuadrado es : ${areaSquare(value)} cms² `
    valueResult.innerText = resultl;
}
    

// Se calcula el area y perimetro del Triangulo
const perimTriangle= (side1, side2, base)=>side1 + side2 + base;

function calPerimTriangle() {
     let side1 = document.getElementById('side1')
     let side2 = document.getElementById('side2')
     let side3 = document.getElementById('side3')
     side1 = Number(side1.value)
     side2 = Number(side2.value)
     side3 = Number(side3.value)
     const result = `El Perimetro del Triangulo es : ${perimTriangle(side1, side2, side3)} cms²`
      valueResult.innerText =result
}


//Se calcula el area Triangulo
const areaTriangle =(b,h)=> (b*h)/2;
 
 function calAreaTriangle (){
  let b = document.getElementById('b')
  let h = document.getElementById('h')
   b = Number(b.value) 
   h = Number(h.value) 
  
  
   const result = `àrea del Triangulo es: ${areaTriangle(b, h)}  cms² `
   valueResult.innerText = result;

 }

             //CIRCULOS
//Diametro circulo

const diameCircle = (radio) => radio*2;
const perimeCircle = (radio) => diameCircle(radio) * Math.PI;
const areaCircle = (radio) => (radio*radio)* Math.PI;

function calDiameCircle (){
    let radio = document.getElementById('inputRadio')
    radio = Number(radio.value);
    const result = `El Diametro del Circulo es: ${diameCircle(radio)} cms`;
    valueResult.innerText = result;
}

//Perimetro Circulo

function calPerimetroCircle (){
     let radio = document.getElementById('inputRadio')
     radio = Number(radio.value)
     const result = `El Perimetro del Circulo es : ${perimeCircle(radio)} cms`
     valueResult.innerHTML = result; 
}
//Area Circulo

function calAreaCircle (){
    let radio = document.getElementById('inputRadio')
    radio = Number(radio.value)
    const result = `El àrea del Circulo es : ${areaCircle(radio)} cms`
    valueResult.innerHTML = result;

}


  




