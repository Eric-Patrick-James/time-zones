
function wrap_time(time) {

    while (time >= 24) {

        time = time - 24

    }

    while (time < 0) {

        time = time + 24

    }

    return time

}

function update_eric() {

    var hour = Number(eric_input.value)+6

    fer_input.value = wrap_time(hour-6).toString()
    elizabeth_input.value = wrap_time(hour-4).toString()
    sebas_input.value = wrap_time(hour+1).toString()
    pieter_input.value = wrap_time(hour+1).toString()
    nagiho_input.value = wrap_time(hour+9).toString()

}

function update_fer() {

    var hour = Number(fer_input.value)+6

    eric_input.value = wrap_time(hour-6).toString()
    elizabeth_input.value = wrap_time(hour-4).toString()
    sebas_input.value = wrap_time(hour+1).toString()
    pieter_input.value = wrap_time(hour+1).toString()
    nagiho_input.value = wrap_time(hour+9).toString()

  }

function update_elizabeth() {

    var hour = Number(elizabeth_input.value)+4

    eric_input.value = wrap_time(hour-6).toString()
    fer_input.value = wrap_time(hour-6).toString()
    sebas_input.value = wrap_time(hour+1).toString()
    pieter_input.value = wrap_time(hour+1).toString()
    nagiho_input.value = wrap_time(hour+9).toString()

}

function update_sebas() {

    var hour = Number(sebas_input.value)-1

    eric_input.value = wrap_time(hour-6).toString()
    fer_input.value = wrap_time(hour-6).toString()
    elizabeth_input.value = wrap_time(hour-4).toString()
    pieter_input.value = wrap_time(hour+1).toString()
    nagiho_input.value = wrap_time(hour+9).toString()

}

function update_pieter() {

    var hour = Number(pieter_input.value)-1

    eric_input.value = wrap_time(hour-6).toString()
    fer_input.value = wrap_time(hour-6).toString()
    elizabeth_input.value = wrap_time(hour-4).toString()
    sebas_input.value = wrap_time(hour+1).toString()
    nagiho_input.value = wrap_time(hour+9).toString()

}

function update_nagiho() {

    var hour = Number(nagiho_input.value)-9

    eric_input.value = wrap_time(hour-6).toString()
    fer_input.value = wrap_time(hour-6).toString()
    elizabeth_input.value = wrap_time(hour-4).toString()
    sebas_input.value = wrap_time(hour+1).toString()
    pieter_input.value = wrap_time(hour+1).toString()

}

eric_input = document.getElementById("eric_input")
fer_input = document.getElementById("fer_input")
elizabeth_input = document.getElementById("elizabeth_input")
sebas_input = document.getElementById("sebas_input")
pieter_input = document.getElementById("pieter_input")
nagiho_input = document.getElementById("nagiho_input")

var today = new Date()
var hour = today.getHours()
var timeZoneDif = today.getTimezoneOffset()/60

if (timeZoneDif == 6) {

    eric_input.value = hour
    update_eric()

} else if (timeZoneDif == 4) {

    elizabeth_input.value = hour
    update_elizabeth()

} else if (timeZoneDif == 1) {

    sebas_input.value = hour
    update_sebas()

} else if (timeZoneDif == 9) {

    nagiho_input.value = hour
    update_nagiho()

}
