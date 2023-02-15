// class Producto{
//     name = ''
//     price = 0
//     description = ''

//     constructor(name,price,description = ''){
//         this.name = name
//         this.price = price
//         this.description = description
//     }
// }

// const cualquierNombre = new Producto('PC',50000,'xD')

// console.log(cualquierNombre)

const datos = [];
let cari = [];

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

const guardar = document.getElementById("boton1");
const bandidas = document.getElementById("boton2");
const eliminar = document.getElementById("boton3");
const novia = document.getElementById("boton4");

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

bandidas.addEventListener("click", () => {
  //   let bandiName = document.getElementById("name2").value;
  //   cari.push(bandiName);
  //   console.log(cari);
  //   bandiName = document.getElementById("name2").value = "";

  //   const listaBandidas = document.getElementById("listaBandidas");
  //   listaBandidas.innerHTML = `Tus bandidas son: ${cari}`;
  let persona;
  let nombreBandidas = document.getElementById("name2").value;
  const name = document.getElementById("nombres").value;

  for (let i = 0; i < datos.length; i++) {
    if (datos[i].name == name) {
      persona = datos[i];
      console.log(persona);
      persona.agregarBandida(nombreBandidas);
      // cari.push(nombreBandidas);
      console.log(persona);
    }
    const listaBandidas = document.getElementById("listaBandidas");
    listaBandidas.innerHTML = `Tus bandidas son: ${nombreBandidas}`;
  }
});

guardar.addEventListener("click", () => {
  let name = document.getElementById("nombres").value;
  let apellidos = document.getElementById("apellidos").value;
  let edad = document.getElementById("edad").value;

  const nuevaPersona = new Persona(name, apellidos, edad, cari);
  datos.push(nuevaPersona);

  console.log(nuevaPersona);
  console.log(datos);
  cari = [];
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

  //   const bandido = datos.find((persona) => {
  //     return persona.nombre === name;
  //   });
});
