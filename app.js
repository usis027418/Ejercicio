document.addEventListener("DOMContentLoaded",function(){
    var opcion = document.getElementById("cbOpcion");
    var boton = document.getElementById("btnCalcular");

    boton.addEventListener("click", function(){
        if(opcion.value === "media"){
          media();
        } else if(opcion.value === "mediana"){
          mediana();
        } else if(opcion.value === "moda"){
          moda();
        } else if(opcion.value === "estandar"){
          estandar();
        } else if(opcion.value === "armonica"){
          armonica();
        }
    });
});

function media(){
    let txtserie=document.querySelector("#cadena").value;
    let separador=",",
    arreglo=txtserie.split(separador);
    let suma=0;
    arreglo.forEach(function(index) {
       suma+=parseInt(index);
    });
    let  $resp=document.querySelector("#respuesta");
    $resp.innerHTML=`La Media es:  ${(suma/arreglo.length)}`; 
};

function mediana(){
  let numeros=document.querySelector("#cadena").value,
  arreglon=numeros.split(",").sort(compareNumbers);

  let  $resp=document.querySelector("#respuesta");
  let medianapar=0,medianainpar;
  let indice=0;
 
  if(arreglon.length%2==0){
   indice=Math.round(arreglon.length/2);
   medianapar=(indice + 1  + (indice/2));
   $resp.innerHTML=`La Mediana es:  ${(medianapar)}`;
  }else{
    indice=Math.round(arreglon.length/2);

    medianainpar=arreglon[indice-1];
    $resp.innerHTML=`La Mediana es:  ${(medianainpar)}`;
  }
};
function compareNumbers(a, b) {
    return a - b;
};

function moda(){
  let datos=document.querySelector("#cadena").value;
  let array=datos.split(",").sort(compareNumbers);
  let repetidos = [];
  let temporal = [];
  array.forEach((value,index)=>{
    temporal = Object.assign([],array); //Copiado de elemento
    temporal.splice(index,1); //Se elimina el elemnto q se compara
    if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1) {
       repetidos.push(value);}  
  });
  let $resp=document.querySelector("#respuesta")
  $resp.innerHTML=`La Moda es: ${(repetidos)}`;
};

function estandar(){
  var numeros=document.querySelector("#cadena").value;
   var arreglo=numeros.split(",");
  var sumacuadradodivN=0,sumaN=0;
  //recorre cada dato del arregloy le multiplica total de datos por el cuadrado de cada uno mientras los suma y los asigna a la variable 
   arreglo.forEach(function(elementos) {
    sumacuadradodivN+=arreglo.length *Math.pow(elementos,2);
    });

let sumadatos=0,sumacuadradaa;
  //suma todos los datos del arreglo
  arreglo.forEach(function(indexs){
  sumadatos+=parseFloat(indexs); });
  //sele saca el cuadrado a la suma
  sumacuadradaa=Math.pow(sumadatos,2);
  //el dividendo: el length del arreglo multiplicado por el length menos uno
  let div=arreglo.length*(arreglo.length-1);
  
  //la variable que contiene la primera operacion le resta la segunda
  let desviacionestandar=sumacuadradodivN-sumacuadradaa;
  //se saca la desviacion estandar dividiendo el resultado de la resta entre el resultado del dividendo
  let desviacionfinal=desviacionestandar/div;
    $respu=document.querySelector("#respuesta");
    $respu.innerHTML=`La Desviacion Estandar es:  ${(desviacionfinal )} y La Tipica es: ${(Math.sqrt(desviacionfinal,2))} `;

};

function armonica(){
  let numeros=document.querySelector("#cadena").value,
   ndatos=0, datos=0,
  arreglo=numeros.split(",");
   let suma=0;
  //1 dividido entre cada elemento del arreglo
  for(let i=0;i<arreglo.length;i++){
    datos= 1/arreglo[i];
    suma+=datos;
  }
  let  $respu=document.querySelector("#respuesta");
  $respu.innerHTML=`La Armonica es es:  ${(arreglo.length/suma)}`;
};