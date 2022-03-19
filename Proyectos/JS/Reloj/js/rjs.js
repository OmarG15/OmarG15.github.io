//el objeto mostrarReloj obtiene los datos de la clase DATE cada 1 segundo
const mostrarReloj = ()=> {
let fecha = new Date();
let hora = formatoHora(fecha.getHours());
let minutos = formatoHora(fecha.getMinutes());
let segundos = formatoHora(fecha.getSeconds());

document.getElementById('hora').innerHTML =`${hora}:${minutos}:${segundos}`;

const meses = ['Enero','febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];


let diaSemana= dias[fecha.getDay()];
let dia = fecha.getDate();
let mes = meses[fecha.getMonth()];
let año = fecha.getFullYear();
let fechaTexto = `${diaSemana}, ${dia} de ${mes} de ${año}`

document.getElementById('fecha').innerHTML = fechaTexto;
document.getElementById('contenedor').classList.toggle('animacion')
}

function launchFullScreen(element) {
    if(element.requestFullScreen) {
      element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
    document.getElementById('btn-full').style.display = "none";
    document.getElementById('btn-esc').style.display = "flex";
    document.getElementById('texto').style.display='none';
  }
  // Lanza en pantalla completa en navegadores que lo soporten
   function cancelFullScreen() {
       if(document.cancelFullScreen) {
           document.cancelFullScreen();
       } else if(document.mozCancelFullScreen) {
           document.mozCancelFullScreen();
       } else if(document.webkitCancelFullScreen) {
           document.webkitCancelFullScreen();
       }
       document.getElementById('btn-full').style.display = "flex";
       document.getElementById('btn-esc').style.display="none";
       document.getElementById('texto').style.display='block';
   }
   
const formatoHora = (hora)=>{
    if (hora < 10 )
        hora = '0'+hora;
    return hora

}
setInterval(mostrarReloj,1000)