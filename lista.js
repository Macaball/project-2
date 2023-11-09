// Definir una función constructora para crear objetos de contacto
function Contacto(
  id,
  nombre,
  apellido,
  telefono,
  ubicacion,
  ciudad,
  direccion
) {
  this.id = id;
  this.nombre = nombre;
  this.apellido = apellido;
  this.telefono = telefono;
  this.ubicacion = ubicacion;
  this.ciudad = ciudad;
  this.direccion = direccion;
}

// Crear una lista de contactos
const listaDeContactos = [];

// Agregar contactos a la lista
const contacto1 = new Contacto(
  1,
  "Sofia",
  "Pérez",
  "3202788282",
  "Calle 134",
  "Ciudad bogota",
  "Avenida Chile"
);
const contacto2 = new Contacto(
  2,
  "María",
  "Gómez",
  "3115565689",
  "Carrera 7",
  "Ciudad cucuta",
  "Avenida primavera"
);

const contacto3 = new Contacto(
  3,
  "Felipe",
  "Porras",
  "3053677890",
  "Calle 45",
  "Ciudad barranquilla",
  "Avenida currambera"
);

const contacto4 = new Contacto(
  4,
  "Miguel",
  "Aguas",
  "305111116767",
  "Calle 45",
  "Ciudad bogota",
  "Autopista norte"
);

listaDeContactos.push(contacto1);
listaDeContactos.push(contacto2);
listaDeContactos.push(contacto3);
listaDeContactos.push(contacto4);

// Se pueden  agregar más contactos de la misma manera

// Acceder a los contactos en la lista
console.log(listaDeContactos);

// Cómo acceder a un contacto específico por su índice
console.log("Nombre del segundo contacto: " + listaDeContactos[1].nombre);

console.log(
  "***********************************************************************************"
);

console.log(
  "***********************************************************************************"
);

console.log(
  "***********************************************************************************"
);

// Quiero eliminar el contacto con ID 1
const idAEliminar = 3;

// Encuentra el índice del contacto con el ID deseado
const indiceAEliminar = listaDeContactos.findIndex(
  (contacto) => contacto.id === idAEliminar
);

// Verifica si se encontró un contacto con el ID deseado
if (indiceAEliminar !== -1) {
  // Utiliza splice() para eliminar el contacto encontrado
  listaDeContactos.splice(indiceAEliminar, 1);
} else {
  console.log("No se encontró un contacto con el ID especificado.");
}

console.log(listaDeContactos);

// Lista de contactos de ejemplo
let contactos = [
  { id: 1, nombre: "Juan", telefono: "8984567890" },
  { id: 2, nombre: "Marisol", telefono: "9876543210" },
  { id: 3, nombre: "Carlos", telefono: "555559990" },
];

// Función para actualizar un contacto por ID
function actualizarContacto(id, nuevoNombre, nuevoTelefono) {
  const contactoActualizado = contactos.find((contacto) => contacto.id === id);
  if (contactoActualizado) {
    contactoActualizado.nombre = nuevoNombre;
    contactoActualizado.telefono = nuevoTelefono;
    console.log(`Contacto con ID ${id} actualizado.`);
  } else {
    console.log(`No se encontró un contacto con ID ${id}.`);
  }
}

// Ejemplo de uso de la función para actualizar un contacto
actualizarContacto(1, "Juan", "8984567890");

// Comprobar si el contacto se ha actualizado
console.log(contactos);
