

const historias_container = document.getElementById('historias_container');

listeners();

const parametros = new URLSearchParams(window.location.search);




function listeners() {
    document.addEventListener('DOMContentLoaded', () => {

        

        fetch('https://secret-ocean-75313.herokuapp.com/')
            .then((historias) => historias.json())
            .then((historias) => {
                /* filtrar por id */
                const type = parametros.get('type');
                //console.log('type:', type);
                const id = parametros.get('id');
                //console.log('id:', id);
    
                if(type == 'all') {
                    const historia = historias.filter((historia) => historia.id == id);
                    //console.log('all:', historia);
                    domRender(...historia);
                } 

                if(type == 'nombre') {
                    //!todo ORGANIZAR EL FILTRO PARA QUE NO ARROJE ERROR CUANDO HAY VARIAS COINCIDENCIAS
                    //buscar coincidencias en el nombre y apellido completo sin importar mayusculas y minusculas
                    const historia = historias.filter((historia) => historia.nombres.toLowerCase().includes(id.toLowerCase()) || historia.apellidos.toLowerCase().includes(id.toLowerCase()));
                    //console.log('nombre:', historia);
                    domRender(historia[0]);
                }

                if(type == 'cedula') {
                    const historia = historias.filter((historia) => historia.documento == id);
                    //console.log('cedula:', historia);
                    domRender(...historia);
                }


                
            });

        function domRender(historia) {
                //console.log('historia', historia.nombres);
                const formInnterHTML = `
                <div class="historia_container">
                            

                <div class="d-flex justify-content-center align-items-center flex-column">
                        
                        <h2 class="text-center text-uppercase fw-bold">Historia de ${historia.nombres} ${historia.apellidos}</h2>
                        <button onclick="redirect()" class="btn btn-success mx-auto">Regresar</button>
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
            
                            <h3 class="text-center">Exploracion Fisica</h3>
            
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Peso:</span> ${
                                            historia.exploracion_fisica[0].peso
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Estatura:</span> ${
                                            historia.exploracion_fisica[0].estatura
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Frecuencia Cardiaca:</span>
                                        ${
                                            historia.exploracion_fisica[0].frecuencia_cardiaca
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Frecuencia Respiratoria:</span>
                                        ${
                                            historia.exploracion_fisica[0].frecuencia_respiratoria
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Presion Arterial:</span>
                                        ${
                                            historia.exploracion_fisica[0].presion_arterial
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Embarazo:</span> ${
                                                Boolean(historia.exploracion_fisica[0].embarazo) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Descripcion:</span>  ${
                                            historia.exploracion_fisica[0].descripcion
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
            
                            <hr />
                            <h3 class="text-center">Antecedentes No Patologicos</h3>
            
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Alcoholismo:</span> ${
                                            Boolean(historia.antecedentes_no_patologicos[0].alcoholismo) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Tabaquismo:</span> ${
                                            Boolean(historia.antecedentes_no_patologicos[0].tabaquismo) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Drogadiccion:</span> ${
                                            Boolean(historia.antecedentes_no_patologicos[0].drogadiccion) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Alergias:</span> ${
                                            Boolean(historia.antecedentes_no_patologicos[0].alergias) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Cirugias:</span> ${
                                            Boolean(historia.antecedentes_no_patologicos[0].cirugias) ? 'Si' : 'No'
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
                                            Boolean(historia.antecedentes_patologicos[0].pumonares) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Cardiacos:</span> ${
                                            Boolean(historia.antecedentes_patologicos[0].cardiacos) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Digestivos:</span> ${
                                            Boolean(historia.antecedentes_patologicos[0].digestivos) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Endocrinos:</span> ${
                                            Boolean(historia.antecedentes_patologicos[0].endocrinos) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Genitourinarios:</span> ${
                                            Boolean(historia.antecedentes_patologicos[0].genitourinarios) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Hematologicos:</span> ${
                                            Boolean(historia.antecedentes_patologicos[0].hematologicos) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Neurologicos:</span> ${
                                            Boolean(historia.antecedentes_patologicos[0].neurologicos) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Psiquiatricos:</span> ${
                                            Boolean(historia.antecedentes_patologicos[0].psiquiatricos) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <p class="m-0">
                                        <span class="fw-bold">Traumatologicos:</span> ${
                                            Boolean(historia.antecedentes_patologicos[0].traumatologicos) ? 'Si' : 'No'
                                        }
                                    </p>
                                </div>
                            </div>
            
                            <hr />
                            <h3 class="text-center fw-bold mt-5">Diagnostico Presuntivo</h3>
                            <h5 class="text-danger">
                               
                                ${historia.diagnostico_presuntivo[0].descripcion}
                            </h5>
                        </div>`;

                historias_container.innerHTML += formInnterHTML;
        }
    });
}

function redirect() {
    window.location.href = `./historias.html`;
}