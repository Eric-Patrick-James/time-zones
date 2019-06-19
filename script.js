
eric_input = document.getElementById("eric_input")
fer_input = document.getElementById("fer_input")
elizabeth_input = document.getElementById("elizabeth_input")
sebas_input = document.getElementById("sebas_input")
pieter_input = document.getElementById("pieter_input")
naghio_input = document.getElementById("naghio_input")

function time_to_number(time) {
  
  var index = time.indexOf(":")
  
  return Number(time.slice(0, index)), Number(time.slice(index+1))
  
}

function number_to_time(hour, minute) {
  
  while (hour > 24) {
    
    hour = hour - 24
    
  }
  
  while (hour < 0) {
    
    hour = hour + 24
    
  }
  
  return hour.toString() + ":" + minute.toString()
  
}

function update_eric() {
  
  var hour, minute = time_to_number(eric_input.value)
  hour = hour + 6
  minute = minute + 6
  
  fer_input.value = number_to_time(hour-6, minute)
  elizabeth_input.value = number_to_time(hour-4, minute)
  sebas_input.value = number_to_time(hour+1, minute)
  pieter_input.value = number_to_time(hour+1, minute)
  naghio_input.value = number_to_time(hour+9, minute-6)
  
}
