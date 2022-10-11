
const historias_container = document.getElementById('historias_container');
const name_input = document.getElementById('name_input');
const cedula_input = document.getElementById('cedula_input');

listeners();

function listeners() {
    document.addEventListener('DOMContentLoaded', () => {

        fetch('https://secret-ocean-75313.herokuapp.com/')
            .then((historias) => historias.json())
            .then((historias) => {
                domRender(historias)
            });

        function domRender(historias) {
            //console.log(historias);
            historias.forEach((historia) => {
                //console.log(historia);
                const formInnterHTML = `
                <div class="historia_container">
                            

                <div class="d-flex justify-content-center align-items-center flex-column">
                        
                        <h2 class="text-center text-uppercase fw-bold">Historia de ${
                            historia.nombres
                        } ${historia.apellidos}</h2>
                        <button onclick="redirectAll(${historia.id})" class="btn btn-success mx-auto">Ver Historia Completa</button>
                        <button onclick="editHistoria(${historia.id})" class="btn btn-primary mx-auto mt-2">Editar Historia</button>
                        <button onclick="deleteHistoria(${historia.id})" class="btn btn-danger mx-auto mt-2">Borrar Historia</button>

                    </div>
                            <hr />
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Nombres:</span> ${
                                            historia.nombres
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Apellidos:</span> ${
                                            historia.apellidos
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Numero de Documento:</span> ${
                                            historia.documento
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Sexo:</span> ${
                                            historia.sexo
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Fecha de nacimiento:</span>
                                        ${
                                            historia.fecha_nacimiento
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Email:</span>
                                        ${historia.email}
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Telefono:</span> ${
                                            historia.telefono
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Direccion:</span> ${
                                            historia.direccion
                                        }
                                    </p>
                                </div>
                            </div>

            
                            <hr />
            
                            <h3 class="text-center">Motivo Consulta</h3>
                            <p class="m-0">
                                <span class="fw-bold">Motivo:</span> ${
                                    historia.motivo_consulta[0].motivo
                                }
                            </p>
                            <p class="m-0">
                                <span class="fw-bold">Fecha y hora llegada:</span> ${
                                    historia.motivo_consulta[0].hora_llegada
                                }
                            </p>
                            pasar la historia a la funcion de editar
                            
                        </div>`;

                historias_container.innerHTML += formInnterHTML;
            });
        }
    });


   

}

function editHistoria(id) {
    window.location.href = `./crear_historia.html?id=${id}`;
}

function redirectAll(id) {
    window.location.href = `./historia.html?type=all&id=${id}`;
}

function redirectName() {
    name_input.value === '' ? alert('Ingrese un nombre') : window.location.href = `./historia.html?type=nombre&id=${name_input.value}`;
}

function redirectCedula() {
    cedula_input.value === '' ? alert('Ingrese un numero de cedula') : window.location.href = `./historia.html?type=cedula&id=${cedula_input.value}`;
}

function deleteHistoria(id) {
    fetch(`https://secret-ocean-75313.herokuapp.com/${id}`, {
        method: 'DELETE',
    })
        .then((res) => {
            if (res.status === 200) {
                alert('Historia eliminada');
                window.location.reload();
            } else {
                alert('Error al eliminar la historia');
            }
            
        })
}

