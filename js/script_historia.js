

const historias_container = document.getElementById('historias_container');

listeners();

const parametros = new URLSearchParams(window.location.search);


function listeners() {
    document.addEventListener('DOMContentLoaded', () => {

        

        fetch('/data/data.json')
            .then((historias) => historias.json())
            .then((historias) => {
                /* filtrar por id */
                const type = parametros.get('type');
                console.log('type:', type);
                const id = parametros.get('id');
                console.log('id:', id);
    
                

                if(type == 'all') {
                    const historia = historias.filter((historia) => historia.id == id);
                    console.log('all:', historia);
                    domRender(...historia);
                } 

                if(type == 'nombre') {

                    //!todo ORGANIZAR EL FILTRO PARA QUE NO ARROJE ERROR CUANDO HAY VARIAS COINCIDENCIAS

                    //buscar coincidencias en el nombre y apellido completo sin importar mayusculas y minusculas
                    const historia = historias.filter((historia) => historia.datosPersonales.nombre.toLowerCase().includes(id.toLowerCase()) || historia.datosPersonales.apellido.toLowerCase().includes(id.toLowerCase()));
                    console.log('nombre:', historia);
                    domRender(...historia);
                    
                    
                }


                
            });

        function domRender(historia) {
                const formInnterHTML = `
                <div class="historia_container">
                            

                <div class="d-flex justify-content-center align-items-center flex-column">
                        
                        <h2 class="text-center text-uppercase fw-bold">Historia de ${
                            historia.datosPersonales.nombre
                        } ${historia.datosPersonales.apellido}</h2>
                        <button onclick="redirect(${historia.id})" class="btn btn-success mx-auto">Regresar</button>
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
            
                            <h3 class="text-center">Exploracion Fisica</h3>
            
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Peso:</span> ${
                                            historia.exploracionFisica.peso
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Estatura:</span> ${
                                            historia.exploracionFisica.estatura
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Frecuencia Cardiaca:</span>
                                        ${
                                            historia.exploracionFisica
                                                .frecuencia_cardiaca
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Frecuencia Respiratoria:</span>
                                        ${
                                            historia.exploracionFisica
                                                .frecuencia_respiratoria
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Presion Arterial:</span>
                                        ${
                                            historia.exploracionFisica
                                                .presion_arterial
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Embarazo:</span> ${
                                            historia.exploracionFisica.embarazo
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Descripcion:</span>  ${
                                            historia.exploracionFisica
                                                .descripcion
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
            
                            <hr />
                            <h3 class="text-center">Antecedentes No Patologicos</h3>
            
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Alcoholismo:</span> ${
                                            historia.antecedentesNoPatologicos
                                                .alcoholismo
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Tabaquismo:</span> ${
                                            historia.antecedentesNoPatologicos
                                                .tabaquismo
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Drogadiccion:</span> ${
                                            historia.antecedentesNoPatologicos
                                                .drogadiccion
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Alergias:</span> ${
                                            historia.antecedentesNoPatologicos
                                                .alergias
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Cirugias:</span> ${
                                            historia.antecedentesNoPatologicos
                                                .cirugias
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                            </div>
                            <hr />
            
                            <h3 class="text-center">Antecedentes Patologicos</h3>
            
            
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Pumonares:</span> ${
                                            historia.antecedentesPatologicos
                                                .pumonares
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Cardiacos:</span> ${
                                            historia.antecedentesPatologicos
                                                .cardiacos
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Digestivos:</span> ${
                                            historia.antecedentesPatologicos
                                                .digestivos
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Endocrinos:</span> ${
                                            historia.antecedentesPatologicos
                                                .endocrinos
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Genitourinarios:</span> ${
                                            historia.antecedentesPatologicos
                                                .genitourinarios
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Hematologicos:</span> ${
                                            historia.antecedentesPatologicos
                                                .hematologicos
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Neurologicos:</span> ${
                                            historia.antecedentesPatologicos
                                                .neurologicos
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Psiquiatricos:</span> ${
                                            historia.antecedentesPatologicos
                                                .psiquiatricos
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Traumatologicos:</span> ${
                                            historia.antecedentesPatologicos
                                                .traumatologicos
                                                ? 'Si'
                                                : 'No'
                                        }
                                    </p>
                                </div>
                            </div>
            
                            <hr />
                            <h3 class="text-center fw-bold mt-5">Diagnostico Presuntivo</h3>
                            <h5 class="text-danger">
                               
                                ${historia.disgnosticoPresuntivo.diagnostico}
                            </h5>
                        </div>`;

                historias_container.innerHTML += formInnterHTML;
        }
    });
}

function redirect(id) {
    window.location.href = `/historias.html`;
}