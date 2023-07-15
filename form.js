var form = document.getElementById('myForm');


// Array para almacenar los datos ingresados
var arrayDatos = [];
// Agregar un controlador de evento para el evento submit
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos de entrada
    var nombreCompleto = document.getElementsByName('nombreCompleto')[0].value;
    var apellido = document.getElementsByName('apellido')[0].value;
    var telefono = document.getElementsByName('telefono')[0].value;
    var seguro = document.getElementsByName('seguro')[0].value;
    var vencimientoPoliza = document.getElementsByName('vencimientoPoliza')[0].value;
    var estado = document.getElementsByName('estado')[0].value;

    // Crear un objeto con los valores ingresados
    var datos = {
        nombreCompleto: nombreCompleto,
        apellido: apellido,
        telefono: telefono,
        seguro: seguro,
        vencimientoPoliza: vencimientoPoliza,
        estado: estado
    };

    // Agregar el objeto al array
    arrayDatos.push(datos);

    // Guardar el array en el almacenamiento local
    localStorage.setItem('datosClientes', JSON.stringify(arrayDatos));

    console.log(datos);

    // Limpiar el formulario
    form.reset();
});

// Función para mostrar los clientes desde el almacenamiento local
function mostrarClientes() {
    // Obtener los datos guardados del almacenamiento local
    var datosGuardados = localStorage.getItem('datosClientes');

    // Verificar si existen datos guardados
    if (datosGuardados) {
        var arrayDatos = JSON.parse(datosGuardados);
        console.log(arrayDatos);
    } else {
        console.log("No se encontraron clientes.");
    }
}


// mostrar en la pagina de cliente 

function mostrarClientes() {
    // Obtener los datos almacenamiento local
    var datosGuardados = localStorage.getItem('datosClientes');

    if (datosGuardados) {
        var arrayDatos = JSON.parse(datosGuardados);
        var output = '';

        arrayDatos.forEach(function (datos, index) {
            output +=
                `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${datos.nombreCompleto} ${datos.apellido}</h5>
                        <p class="card-text"><strong>Teléfono:</strong> ${datos.telefono}</p>
                        <p class="card-text"><strong>Seguro:</strong> ${datos.seguro}</p>
                        <p class="card-text"><strong>Vencimiento de póliza:</strong> ${datos.vencimientoPoliza}</p>
                        <p class="card-text"><strong>Se renueva:</strong> ${datos.estado}</p>
                        <a href="#" class="btn btn-primary">Modificar</a>
                        <a href="#" class="btn btn-primary">Eliminar</a>
                    </div>
                </div>
            `;
        });

        // Mostrar el HTML 
        document.getElementById('clientesContainer').innerHTML = output;
    } else {
        // Si no hay datos guardados, mostrar un mensaje
        document.getElementById('clientesContainer').innerHTML = '<p>No se encontraron clientes.</p>';
    }
}

