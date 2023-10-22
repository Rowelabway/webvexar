// Obtiene la fecha objetivo para la cuenta regresiva
const targetDate = new Date("2024-06-06T19:00:00Z");

// Funci��n para actualizar el contador
function updateCountdown() {
  // Obtiene la fecha y hora actual
  const currentDate = new Date();

  // Calcula la diferencia entre la fecha objetivo y la fecha actual
  const timeDiff = targetDate - currentDate;

  // Verifica si ya ha pasado la fecha objetivo
  if (timeDiff <= 0) {
    // Mostrar mensaje de "Enhorabuena!"
    document.getElementById("countdown").textContent = "LIVE PRESALE!";
    return;
  }

  // Calcula los d��as, horas, minutos y segundos restantes
  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Actualiza los elementos del contador en el DOM
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);