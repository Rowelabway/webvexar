// Obtener la dirección del contrato de tu moneda
const contractAddress = "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE";
const apiKey = "R3TKAHKAXRWV4CHRNHUH2DZSPDB352JXR1";
const url = `https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${apiKey}`;

// Crear la gráfica
const ctx = document.getElementById("myChart").getContext("2d");
const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            label: "MAX TOTAL SUPPLY",
            data: [],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
        }]
    },
    options: {
      scales: {
          x: {
              type: "time",
              ticks: {
                  autoSkip: true,
                  maxTicksLimit: 20,
              },
              display: true,
              scaleLabel: {
                  display: true,
                  labelString: "Point"
              }
          },
          y: {
              display: true,
              scaleLabel: {
                  display: true,
                  labelString: "Value"
              }
          }
      }
  }
});


// Obtener el MAX TOTAL SUPPLY de tu moneda
function getMaxTotalSupply() {
    fetch(url, {
      method: 'GET',
      mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        }
    })
        .then(response => response.json())
        .then(data => {
            const maxTotalSupply = data.result / 1e18;
            const timestamp = new Date().toLocaleTimeString();
            chart.data.labels.push(timestamp);
            chart.data.datasets[0].data.push(maxTotalSupply);
            chart.update();
        })
        .catch(error => console.error(error));
}

// Actualizar la gráfica cada minuto
setInterval(getMaxTotalSupply, 60000);