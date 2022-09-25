function miReloj() {
    var miHora = new Date();
    var hr = miHora.getHours();
    var min = miHora.getMinutes();
    var sec = miHora.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var curWeekDay = days[miHora.getDay()];
    var curDay = miHora.getDate();
    var curMonth = meses[miHora.getMonth()];
    var curYear = miHora.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ miReloj() }, 500);
}
 function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
} 