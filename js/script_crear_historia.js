const queryString = window.location.search.substring(1).split('=')[1] || '';
//console.log(queryString);

//! Informacion Personal
const input_nombres = document.getElementById('input_nombres');
const input_apellidos = document.getElementById('input_apellidos');
const input_documento = document.getElementById('input_documento');
const input_edad = document.getElementById('input_edad');
const input_sexo = document.getElementsByName('sexo');
const input_fecha_nacimiento = document.getElementById('input_fecha_nacimiento');
const input_email = document.getElementById('input_email');
const input_telefono = document.getElementById('input_telefono');
const input_direccion = document.getElementById('input_direccion');

//! Exploracion Fisica
const input_peso = document.getElementById('input_peso');
const input_estatura = document.getElementById('input_estatura');
const input_frecuencia_cardiaca = document.getElementById('input_frecuencia_cardiaca');
const input_frecuencia_respiratoria = document.getElementById('input_frecuencia_respiratoria');
const input_presion_arterial = document.getElementById('input_presion_arterial');
const embarazo = document.getElementsByName('embarazo');
const input_descripcion = document.getElementById('input_descripcion');


//! Motivo de Consulta
const input_motivo_consulta = document.getElementById('input_motivo_consulta');
const input_fecha_llegada = document.getElementById('input_fecha_llegada');


//! Antecedentes no Patologicos
const alcoholismo = document.getElementsByName('alcoholismo');
const tabaquismo = document.getElementsByName('tabaquismo');
const drogadiccion = document.getElementsByName('drogadiccion');
const alergias = document.getElementsByName('alergias');
const cirugias = document.getElementsByName('cirugias');


//! Antecedentes Patologicos
const pumonares = document.getElementsByName('pumonares');
const cardiacos = document.getElementsByName('cardiacos');
const digestivos = document.getElementsByName('digestivos');
const endocrinos = document.getElementsByName('endocrinos');
const genitourinarios = document.getElementsByName('genitourinarios');
const hematologicos = document.getElementsByName('hematologicos');
const neurologicos = document.getElementsByName('neurologicos');
const psiquiatricos = document.getElementsByName('psiquiatricos');
const traumatologicos = document.getElementsByName('traumatologicos');


//!diagnostico presuntivo
const diagnostico_presuntivo = document.getElementById('diagnostico_presuntivo');
const btn_submit = document.getElementById('btn_submit');


let sexo = '';
let embarazo_ = '';
let alcoholismo_ = '';
let tabaquismo_ = '';
let drogadiccion_ = '';
let alergias_ = '';
let cirugias_ = '';
let pumonares_ = '';
let cardiacos_ = '';
let digestivos_ = '';
let endocrinos_ = '';
let genitourinarios_ = '';
let hematologicos_ = '';
let neurologicos_ = '';
let psiquiatricos_ = '';
let traumatologicos_ = '';



btn_submit.addEventListener('click', function(){
    sexo = input_sexo[0].checked ? 'M' : 'F';
    embarazo[0].checked ? embarazo_ = 1 : embarazo_ = 0;
    alcoholismo[0].checked ? alcoholismo_ = 1 : alcoholismo_ = 0;
    tabaquismo[0].checked ? tabaquismo_ = 1 : tabaquismo_ = 0;
    drogadiccion[0].checked ? drogadiccion_ = 1 : drogadiccion_ = 0;
    alergias[0].checked ? alergias_ = 1 : alergias_ = 0;
    cirugias[0].checked ? cirugias_ = 1 : cirugias_ = 0;
    pumonares[0].checked ? pumonares_ = 1 : pumonares_ = 0;
    cardiacos[0].checked ? cardiacos_ = 1 : cardiacos_ = 0;
    digestivos[0].checked ? digestivos_ = 1 : digestivos_ = 0;
    endocrinos[0].checked ? endocrinos_ = 1 : endocrinos_ = 0;
    genitourinarios[0].checked ? genitourinarios_ = 1 : genitourinarios_ = 0;
    hematologicos[0].checked ? hematologicos_ = 1 : hematologicos_ = 0;
    neurologicos[0].checked ? neurologicos_ = 1 : neurologicos_ = 0;
    psiquiatricos[0].checked ? psiquiatricos_ = 1 : psiquiatricos_ = 0;
    traumatologicos[0].checked ? traumatologicos_ = 1 : traumatologicos_ = 0;


    if([input_nombres.value, input_apellidos.value,input_documento.vlue, input_edad.value, sexo, input_fecha_nacimiento.value, input_email.value, input_telefono.value, input_direccion.value, input_peso.value, input_estatura.value, input_frecuencia_cardiaca.value, input_frecuencia_respiratoria.value, input_presion_arterial.value, embarazo_, input_descripcion.value, input_motivo_consulta.value, input_fecha_llegada.value, alcoholismo_, tabaquismo_, drogadiccion_, alergias_, cirugias_, pumonares_, cardiacos_, digestivos_, endocrinos_, genitourinarios_, hematologicos_, neurologicos_, psiquiatricos_, traumatologicos_, diagnostico_presuntivo.value].includes('')){
        alert('Todos los campos son obligatorios');
        return;
    }

    const body = {
        nombres: input_nombres.value,
        apellidos: input_apellidos.value,
        documento: input_documento.value,
        edad: input_edad.value,
        fecha_nacimiento: input_fecha_nacimiento.value,
        email: input_email.value,
        direccion: input_direccion.value,
        telefono: input_telefono.value,
        sexo: sexo,
        diagnostico_presuntivo: [
            {
                descripcion: diagnostico_presuntivo.value,
            }
        ],
        motivo_consulta: [
            {
                motivo: input_motivo_consulta.value,
                hora_llegada: input_fecha_llegada.value,
            }
        ],
        antecedentes_no_patologicos: [
            {
                
                alcoholismo : alcoholismo_,
                tabaquismo : tabaquismo_,
                drogadiccion : drogadiccion_,
                alergias : alergias_,
                cirugias : cirugias_,
            }
        ],
        antecedentes_patologicos: [
            {
                pulmonares : pumonares_,
                cardiacos : cardiacos_,
                digestivos : digestivos_,
                endocrinos : endocrinos_,
                genitourinarios : genitourinarios_,
                hematologicos : hematologicos_,
                neurologicos : neurologicos_,
                psiquiatricos : psiquiatricos_,
                traumatologicos : traumatologicos_,
            }
        ],
        exploracion_fisica: [
            {
                peso: input_peso.value,
                estatura: input_estatura.value,
                frecuencia_cardiaca: input_frecuencia_cardiaca.value,
                frecuencia_respiratoria: input_frecuencia_respiratoria.value,
                presion_arterial: input_presion_arterial.value,
                embarazo: embarazo_,
                descripcion: input_descripcion.value,
            }
        ]
    }


    if (queryString == ''){
        fetch('http://localhost:8080', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
        alert(`Se ha registrado el paciente ${data.nombres} ${data.apellidos}`)
        window.location.href = './historias.html';
    })
    } else {
        fetch(`http://localhost:8080/${queryString}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
        alert(`Se ha actualizado el paciente ${data.nombres} ${data.apellidos}`)
        window.location.href = './historias.html';
    })
    }
})




if (queryString !== ""){
    fetch(`http://localhost:8080/${queryString}`)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        input_nombres.value = data.nombres;
        input_apellidos.value = data.apellidos;
        input_documento.value = data.documento;
        input_edad.value = data.edad;
        input_fecha_nacimiento.value = data.fecha_nacimiento;
        input_email.value = data.email;
        input_telefono.value = data.telefono;
        input_direccion.value = data.direccion;
        input_peso.value = data.exploracion_fisica[0].peso;
        input_estatura.value = data.exploracion_fisica[0].estatura;
        input_frecuencia_cardiaca.value = data.exploracion_fisica[0].frecuencia_cardiaca;
        input_frecuencia_respiratoria.value = data.exploracion_fisica[0].frecuencia_respiratoria;
        input_presion_arterial.value = data.exploracion_fisica[0].presion_arterial;
        input_descripcion.value = data.exploracion_fisica[0].descripcion;
        input_motivo_consulta.value = data.motivo_consulta[0].motivo;
        input_fecha_llegada.value = data.motivo_consulta[0].hora_llegada;
        diagnostico_presuntivo.value = data.diagnostico_presuntivo[0].descripcion;

        data.sexo === 'Masculino' ? input_sexo[0].checked = true : input_sexo[1].checked = true;
        data.exploracion_fisica[0].embarazo === 1 ? embarazo[0].checked = true : embarazo[1].checked = true;
        data.antecedentes_no_patologicos[0].alcoholismo === 1 ? alcoholismo[0].checked = true : alcoholismo[1].checked = true;
        data.antecedentes_no_patologicos[0].tabaquismo === 1 ? tabaquismo[0].checked = true : tabaquismo[1].checked = true;
        data.antecedentes_no_patologicos[0].drogadiccion === 1 ? drogadiccion[0].checked = true : drogadiccion[1].checked = true;
        data.antecedentes_no_patologicos[0].alergias === 1 ? alergias[0].checked = true : alergias[1].checked = true;
        data.antecedentes_no_patologicos[0].cirugias === 1 ? cirugias[0].checked = true : cirugias[1].checked = true;
        data.antecedentes_patologicos[0].pulmonares === 1 ? pumonares[0].checked = true : pumonares[1].checked = true;
        data.antecedentes_patologicos[0].cardiacos === 1 ? cardiacos[0].checked = true : cardiacos[1].checked = true;
        data.antecedentes_patologicos[0].digestivos === 1 ? digestivos[0].checked = true : digestivos[1].checked = true;
        data.antecedentes_patologicos[0].endocrinos === 1 ? endocrinos[0].checked = true : endocrinos[1].checked = true;
        data.antecedentes_patologicos[0].genitourinarios === 1 ? genitourinarios[0].checked = true : genitourinarios[1].checked = true;
        data.antecedentes_patologicos[0].hematologicos === 1 ? hematologicos[0].checked = true : hematologicos[1].checked = true;
        data.antecedentes_patologicos[0].neurologicos === 1 ? neurologicos[0].checked = true : neurologicos[1].checked = true;
        data.antecedentes_patologicos[0].psiquiatricos === 1 ? psiquiatricos[0].checked = true : psiquiatricos[1].checked = true;
        data.antecedentes_patologicos[0].traumatologicos === 1 ? traumatologicos[0].checked = true : traumatologicos[1].checked = true;

    })
}