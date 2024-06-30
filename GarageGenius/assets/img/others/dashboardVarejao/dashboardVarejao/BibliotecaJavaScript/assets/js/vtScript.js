google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Trimestre',   'Vendas'],
    ['1ºTri',    33649.31],
    ['2ºTri',     76659.45],
    ['3ºTri',    105252.67],
    ['4ºTri',      55967.05]
  ]);

  var options = {
    width: 400,
    height: 250,
    title: 'Vendas totais',
    backgroundColor: "#B9D6F2",
    curveType: 'function',
    colors: ['#7B68EE'],
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}