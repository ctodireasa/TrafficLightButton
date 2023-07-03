function changingColorsonTrafficLights() {
  let traficLights = document.getElementById("nextColor").style.backgroundColor
  if (traficLights === 'red') {
      document.getElementById("nextColor").style.backgroundColor = 'yellow'
  } else if (traficLights === 'yellow') {
      document.getElementById("nextColor").style.backgroundColor = 'green'
  } else {
      document.getElementById("nextColor").style.backgroundColor = 'red'
  }
}

setInterval(changingColorsonTrafficLights,10000)
