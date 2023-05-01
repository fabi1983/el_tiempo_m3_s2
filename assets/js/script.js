var miCheckbox = document.getElementById('miElementoCheckbox');

var msg = document.getElementById('msg');

var bigTemp = document.getElementById("bigTemp")
var bigC = document.getElementById("bigC")

var toggle = document.getElementById("toggle")

var sun = document.getElementById("sun")
var mon = document.getElementById("mon")
var tue = document.getElementById("tue")
var wed = document.getElementById("wed")
var thu = document.getElementById("thu")
var fri = document.getElementById("fri")
var sat = document.getElementById("sat")

/* alert('El valor inicial del checkbox es ' + miCheckbox.checked); */

miCheckbox.addEventListener('click', function() {
    if(miCheckbox.checked) {
       /*  msg.innerText = 'El elemento está marcado'; */
       
       bigTemp.innerText = (32  * 1.8 + 32).toFixed(0)
       bigC.innerText = "°F"
       
       toggle.innerText = "°F"
       
       sun.innerText = (30  * 1.8 + 32).toFixed(0)
       mon.innerText = (31  * 1.8 + 32).toFixed(0)
       tue.innerText = (28  * 1.8 + 32).toFixed(0)
       wed.innerText = (30  * 1.8 + 32).toFixed(0)
       thu.innerText = (29  * 1.8 + 32).toFixed(0)
       fri.innerText = (31  * 1.8 + 32).toFixed(0)
       sat.innerText = (32  * 1.8 + 32).toFixed(0)
       
       
    } else {
        /*           msg.innerText = 'Ahora está desmarcado'; */
        bigTemp.innerText = 32
        bigC.innerText = "°C"
        toggle.innerText = "°C"

        sun.innerText = 30
        mon.innerText = 31
        tue.innerText = 28
        wed.innerText = 30
        thu.innerText = 29
        fri.innerText = 31
        sat.innerText = 32
    }
});