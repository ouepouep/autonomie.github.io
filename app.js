// Météo réelle (Open-Meteo)
fetch("https://api.open-meteo.com/v1/forecast?latitude=44.1&longitude=4.8&current_weather=true")
  .then(res => res.json())
  .then(data => {
    const temp = data.current_weather.temperature;
    document.getElementById("meteo").innerText = "Température : " + temp + "°C";

    // Conseil intelligent simple
    if (temp > 20) {
      document.getElementById("conseil").innerText = "☀️ Bon moment pour utiliser tes appareils";
    } else {
      document.getElementById("conseil").innerText = "🔥 Attention au chauffage";
    }
  })
  .catch(() => {
    document.getElementById("meteo").innerText = "Impossible de charger la météo";
  });
