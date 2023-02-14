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

class Persona{
    name
    last_name
    age
    bandidas

    constructor(name,last_name,age,bandidas=''){
        this.name=name
        this.last_name=last_name
        this.age=age
        this.bandidas=bandidas
    }

    eliminarBandida(nombreBandidas){
        const bandidasSerias=this.cari.filter(bandida =>{
            return bandida != nombreBandidas
        })
        this.cari=bandidasSerias
    }
}

const guardar=document.getElementById('boton1')
const bandidas=document.getElementById('boton2')
const eliminar=document.getElementById('boton3')

const datos=[]
let cari=[]

bandidas.addEventListener('click',()=>{
    let bandiName=document.getElementById('name2').value
    cari.push(bandiName)
    console.log(cari)
    bandiName=document.getElementById('name2').value=""

    const listaBandidas=document.getElementById('listaBandidas')
    listaBandidas.innerHTML=
    `Tus bandidas son: ${cari}`
})


guardar.addEventListener('click',()=>{
    const name=document.getElementById('nombres').value
    const apellidos=document.getElementById('apellidos').value
    const edad=document.getElementById('edad').value

    const nuevaPersona=new Persona(name,apellidos,edad,cari)
    datos.push(nuevaPersona,cari)

    console.log(nuevaPersona)
    console.log(datos)
    cari=[]
})


eliminar.addEventListener('click',()=>{
    let nombreBandidas=document.getElementById('name2')
    this.eliminarBandida(nombreBandidas)
    console.log(bandidasSerias)
})