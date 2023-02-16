const datos = [];
let cari=[]

class Persona {
  name;
  last_name;
  age;
  bandidas;

  constructor(name, last_name, age, bandidas = []) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
    this.bandidas = bandidas;
  }

  eliminarBandida(nombreBandidas) {
    const bandidasSerias = this.bandidas.filter((bandida) => {
      return bandida != nombreBandidas;
    });
    this.bandidas = bandidasSerias;
  }

  agregarBandida(nombreBandidas) {
    this.bandidas.push(nombreBandidas);
  }

  conseguiNovia(nombreBandido) {
    this.bandidas = [];
  }
}

class Empleado extends Persona{
  valor_hora;
  horas_trabajadas;
  horas_forajidas;
  salario;


  constructor(valor_hora,horas_forajidas,horas_trabajadas,salario){
    this.valor_hora=valor_hora;
    this.horas_forajidas=horas_forajidas;
    this.horas_trabajadas=horas_trabajadas;
    this.salario=salario;
  }


  calcularSalario(){
    this.salario = this.horas_trabajadas*this.valor_hora
  }

  horas_con_forajidas(){}
}



const guardar = document.getElementById("boton1");
const bandidas = document.getElementById("boton2");
const eliminar = document.getElementById("boton3");
const novia = document.getElementById("boton4");
const salarioMes=document.getElementById('salario');

salarioMes.addEventListener('click',()=>{
  const horasSemana=document.getElementById('horas1').value

  console.log(horasSemana)
})

novia.addEventListener("click", () => {
  let persona;
  const nombreBandido = document.getElementById("nombres").value;

  for (let i = 0; i < datos.length; i++) {
    if (datos[i].name == nombreBandido) {
      persona = datos[i];
      console.log(persona);
      persona.conseguiNovia(nombreBandido)
      console.log(persona)
    }
  }
});

//REVISAR
bandidas.addEventListener("click", () => {
  let persona;
  let nombreBandidas = document.getElementById("name2").value;
  const name = document.getElementById("nombres").value;
  lista = JSON.parse(localStorage.getItem("Los Bandidos"));

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].name == name) {
      persona = lista[i];
      // console.log(persona);
      persona.agregarBandida(nombreBandidas);
      // console.log(persona);
    }
    // const listaBandidas = document.getElementById("listaBandidas");
    // listaBandidas.innerHTML = `Tus bandidas son: ${nombreBandidas}`;
    // localStorage.setItem("Los Bandidos", JSON.stringify(datos));
    console.log(persona);

  }
});


guardar.addEventListener("click", () => {
  let name = document.getElementById("nombres").value;
  let apellidos = document.getElementById("apellidos").value;
  let edad = document.getElementById("edad").value;

  const nuevaPersona = new Persona(name, apellidos, edad, cari);
  datos.push(nuevaPersona);
  localStorage.setItem("Los Bandidos", JSON.stringify(nuevaPersona));

  name = document.getElementById("nombres").value = "";
  apellidos = document.getElementById("apellidos").value = "";
  edad = document.getElementById("edad").value = "";
});

eliminar.addEventListener("click", () => {
  let persona;
  let nombreBandidas = document.getElementById("name2").value;
  const name = document.getElementById("nombres").value;

  for (let i = 0; i < datos.length; i++) {
    if (datos[i].name == name) {
      persona = datos[i];
      console.log(persona);
      persona.eliminarBandida(nombreBandidas);
      console.log(persona);
    }
  }
});

const mostrar=document.getElementById('boton5')
const tabla=document.getElementById('tabla')

mostrar.addEventListener('click',()=>{
  lista = JSON.parse(localStorage.getItem("Los Bandidos"));
  for(let i=0; i<lista.length;i++){
    tabla.innerHTML+=`
              <tr>
                <td>${lista[i].name}</td>
                <td>${lista[i].last_name}</td>
                <td>${lista[i].age}</td>
                <td>${lista[i].bandida}</td>
              </tr>

    `
  }
})