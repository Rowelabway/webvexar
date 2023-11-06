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
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Obtener el MAX TOTAL SUPPLY de tu moneda
function getMaxTotalSupply() {
    fetch(url)
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
























// // Obtener la dirección del contrato de tu moneda
// const address = "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE";

// // Obtener el MAX TOTAL SUPPLY del contrato
// async function getSupply() {
//   const response = await fetch(
//     `https://api.etherscan.io/api?module=contract&action=getSupply&contractAddress=${address}&apikey=${R3TKAHKAXRWV4CHRNHUH2DZSPDB352JXR1}`
//   );
//   const data = await response.json();
//   return data.result;
// }

// // Actualizar la gráfica cada 1 hora
// setInterval(async () => {
//   // Obtener el nuevo MAX TOTAL SUPPLY
//   const supply = await getSupply();

//   // Actualizar la gráfica
//   const chart = document.getElementById("chart");
//   chart.data.datasets[0].data.push(supply);
//   chart.update();
// }, 3600000);

// const chartData = {
//   labels: ["0", "24 horas", "48 horas"],
//   datasets: [
//     {
//       label: "MAX TOTAL SUPPLY",
//       data: [],
//       fill: false,
//       lineTension: 0.1,
//       pointRadius: 5,
//       pointBackgroundColor: "#fff",
//       pointBorderColor: "#000",
//       pointHoverBackgroundColor: "#fff",
//       pointHoverBorderColor: "#000",
//     },
//   ],
// };

// const ctx = document.getElementById("chart").getContext("2d");
// new Chart(ctx, chartData);
