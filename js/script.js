function updateTime() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  let timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("time").textContent = timeString;
}

setInterval(updateTime, 1000);


function determinarElValorMayor(lista){
  let mayor = lista[0];
  for(let i = 0; i < lista.length; i++){
    if(lista[i] > mayor){
      mayor = lista[i];
    }
  }
  return mayor;
}

alert(determinarElValorMayor([100, 27, 300, 4, 5, 6]));