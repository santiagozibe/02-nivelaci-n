const personaje = {
  nombre: 'Pepe',
  apellido: 'Guillermo',
  profesion: 'Zapatero',
  getDescripicon() {
    return `${nombre} ${apellido} es ${profesion}`
  }
}

// const nombre = personaje.nombre;
// const apellido = personaje.apellido;
// const profesion = personaje.profesion;


// const {nombre, apellido, profesion, edad=50}  = personaje;


const imprimirPersonaje = ({nombre, apellido, profesion, edad=50}) => {

  console.log(nombre, apellido, profesion, edad);
  
}

imprimirPersonaje(personaje);

const personajes = ['Pepe', 'Moni', 'Koki'];

const [,,p3] = personajes;
console.log(p3);



