//Harvin Manfredy Lainez Salvador U20240630
let Gastossuma = 0;
let Gastosarray = [
    { vivienda: 170, alimentos: 250 },
    { transporte: 80, entretenimiento: 80 },
    { OtrosGastos: 30},
  ];
  
  let IngreMesArray = [365, 420];

let Ingresostotal=0
for(let i of IngreMesArray) Ingresostotal+=i;
console.log(`Suma total ingresos: ${Ingresostotal}`);

  // Sumar los valores de todas las propiedades de los objetos
   Gastossuma = Gastosarray.reduce((acumulador, objetoActual) => {
    // Obtener las propiedades del objeto actual y sumar sus valores
    for (let key in objetoActual) {
      acumulador += objetoActual[key]; // Sumar el valor de la propiedad actual
    }
    return acumulador;
  }, 0);
  
  console.log(`Suma total de gastos: ${Gastossuma}`);
  //Si los gastos son menores al ingreso mensual, se debe mostrar cuánto dinero queda disponible como ahorro.
  if (Gastossuma < Ingresostotal){
    
    let disponible = Ingresostotal-Gastossuma;
    console.log(`El presupuesto está equilibrado y tienes un ahorro de: ${disponible}`);
  }else if (Gastossuma == Ingresostotal){ // Si los gastos son iguales al ingreso, el presupuesto está equilibrado.
    let disponible = Ingresostotal-Gastossuma;
    console.log(`El presupuesto está equilibrado y no tienes ahorros ${disponible}`);
  }else if (Gastossuma > Ingresostotal){ //Si los gastos exceden el ingreso, se debe mostrar cuánto dinero falta para cubrir los gastos.
    let disponible = (Ingresostotal-Gastossuma);
        disponible = disponible*-1;
    console.log(`El presupuesto está excedido. Te faltan $ ${disponible} para cubrir los gastos.`);
  }


