const personas = [
    new Persona ('Juan','Perez'), 
    new Persona ('Omar','Gonzalez')
]

function mostrarPersonas(){
    let texto = '';
    for (let persona of personas){
        texto += `<li> ${persona.nombre} ${persona.apellido} </li>` ;
    }

    document.getElementById('personas').innerHTML = texto;
 
}

function agregarPersonas(){

    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];

    if(nombre.value != '' & apellido.value != '')
    {
        console.log(nombre.value);
        const persona = new Persona(nombre.value,apellido.value);
        personas.push(persona);
    }
    else
    console.log('Debe llenar los parametros');

    mostrarPersonas();
}