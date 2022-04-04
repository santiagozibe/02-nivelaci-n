// setTimeout(() => {
//   console.log('Hola mundo');
// }, 2000);

/*const saludar = () => {
  console.log('Hola mundo');
}

setTimeout(saludar, 2000);*/

const getUsuarioById = (id, callback) => {

  const user = {
    id,
    nombre: 'Santiago'
  }

  setTimeout(() => {

    callback(user);

  }, 1000);

}

getUsuarioById(10, ({nombre, id}) => console.log(`Nombre: ${nombre} - Id: ${id}`))
;











