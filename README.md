# autonomie.github.io
projet autonomie
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ÉcoAutonomie</title>

  <style>
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      background: linear-gradient(180deg, #020617, #0f172a);
      color: white;
    }

    .container {
      padding: 20px;
      padding-bottom: 80px;
    }

    h1 {
      font-size: 26px;
      margin-bottom: 5px;
    }

    .subtitle {
      color: #94a3b8;
      margin-bottom: 20px;
    }

    .card {
      background: rgba(30, 41, 59, 0.8);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }

    .big {
      font-size: 42px;
      font-weight: bold;
    }

    .green {
      color: #22c55e;
    }

    .row {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }

    .button {
      display: block;
      background: linear-gradient(90deg, #22c55e, #4ade80);
      padding: 15px;
      border-radius: 14px;
      text-align: center;
      margin-top: 10px;
      font-weight: bold;
    }

    .nav {
      position: fixed;
      bottom: 0;
      width: 100%;
      display: flex;
      background: rgba(2, 6, 23, 0.95);
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .nav div {
      flex: 1;
      text-align: center;
      padding: 12px;
      font-size: 14px;
      color: #94a3b8;
    }

    .nav div.active {
      color: white;
    }
  </style>
</head>

<body>

<div class="container">
  <h1>Bonjour 👋</h1>
  <div class="subtitle">Votre maison aujourd’hui</div>

  <div class="card">
    <div>Autonomie</div>
    <div class="big green">62%</div>
  </div>

  <div class="card">
    <div class="row">
      <div>⚡ Consommation</div>
      <div>2.4 kW</div>
    </div>
    <div class="row">
      <div>☀️ Production</div>
      <div>1.5 kW</div>
    </div>
  </div>

  <div class="card">
    🌦️ <b>Demain :</b> fort ensoleillement<br><br>
    👉 Lance tes appareils entre <b>13h et 16h</b>
  </div>

  <div class="card">
    💡 Conseil du jour<br><br>
    Réduis le chauffage de 1°C ce soir pour économiser ~7%
  </div>

  <div class="button">Voir plus de conseils</div>
</div>

<div class="nav">
  <div class="active">🏠</div>
  <div>🌦️</div>
  <div>⚡</div>
  <div>💡</div>
</div>

</body>
</html>
