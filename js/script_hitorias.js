/* const historias = [
    {
        datosPersonales: {
            id: 1,
            nombre: 'Juan Estevan',
            apellido: 'Perez Arbelaez',
            sexo: 'Masculino',
            fecha_nacimiento: '12/12/1996',
            email: 'correo@correo.com',
            telefono: '123456789',
            direccion: 'avenida siempre viva 123',
        },
        exploracionFisica: {
            peso: 80,
            estatura: 1.8,
            frecuencia_cardiaca: 80,
            frecuencia_respiratoria: 20,
            temperatura: 36.5,
            presion_arterial: '120/80',
            embarazo: false,
            descripcion: 'El paciente presenta dolor en el pecho',
        },
        motivoConsulta: {
            motivo: 'Dolor en el pecho al respirar profundo',
            llegada: '12/12/2021 12:00',
        },
        antecedentesNoPatologicos: {
            alchoholismo: false,
            tabaquismo: false,
            drogadiccion: false,
            alergias: false,
            cirigias: false,
        },

        antecedentesPatologicos: {
            pulmonares: false,
            cardiacos: false,
            digestivos: false,
            endocrinos: false,
            genitourinarios: false,
            hematologicos: false,
            neurologicos: false,
            psiquiatricos: false,
            traumatologicos: false,
        },
        disgnosticoPresuntivo: {
            diagnostico:
                'El paciente presenta dolor en el pecho al respirar profundo al parecer es un infarto al miocardio por lo que se le recomienda que se dirija a la sala de urgencias',
        },
    },
]; */

const historias_container = document.getElementById('historias_container');
const name_input = document.getElementById('name_input');

listeners();



function listeners() {
    document.addEventListener('DOMContentLoaded', () => {

        

        fetch('/data/data.json')
            .then((historias) => historias.json())
            .then((historias) => {
                console.log(historias);
                domRender(historias)
            });

        function domRender(historias) {
            historias.forEach((historia) => {
                const formInnterHTML = `
                <div class="historia_container">
                            

                <div class="d-flex justify-content-center align-items-center flex-column">
                        
                        <h2 class="text-center text-uppercase fw-bold">Historia de ${
                            historia.datosPersonales.nombre
                        } ${historia.datosPersonales.apellido}</h2>
                        <button onclick="redirectAll(${historia.id})" class="btn btn-success mx-auto">Ver Historia Completa</button>
                    </div>
               
                            
                            <hr />
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Nombres:</span> ${
                                            historia.datosPersonales.nombre
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Apellidos:</span> ${
                                            historia.datosPersonales.apellido
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Numero de Documento:</span> ${
                                            historia.datosPersonales.documento
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Sexo:</span> ${
                                            historia.datosPersonales.sexo
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Fecha de nacimiento:</span>
                                        ${
                                            historia.datosPersonales
                                                .fecha_nacimiento
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Email:</span>
                                        ${historia.datosPersonales.email}
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Telefono:</span> ${
                                            historia.datosPersonales.telefono
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Direccion:</span> ${
                                            historia.datosPersonales.direccion
                                        }
                                    </p>
                                </div>
                            </div>

            
                            <hr />
            
                            <h3 class="text-center">Motivo Consulta</h3>
                            <p class="m-0">
                                <span class="fw-bold">Motivo:</span> ${
                                    historia.motivoConsulta.motivo
                                }
                            </p>
                            <p class="m-0">
                                <span class="fw-bold">Fecha y hora llegada:</span> ${
                                    historia.motivoConsulta.llegada
                                }
                            </p>

 
                        </div>`;

                historias_container.innerHTML += formInnterHTML;
            });
        }
    });
}

function redirectAll(id) {
    window.location.href = `/historia.html?type=all&id=${id}`;
}

function redirectName() {
    window.location.href = `/historia.html?type=nombre&id=${name_input.value}`;
}