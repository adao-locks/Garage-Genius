google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();
data.addColumn('string', 'Day');
data.addColumn('number', 'Faturado no mês');

data.addRows([
    ['Jan',  1405.76],
    ['Fev',  2300.91],
    ['Mar',  9850.27],
    ['Abr',  11245.22],
    ['Mai',   14023.51],
    ['Jun',   16213.25],
    ['Jul',  17024.6],
    ['Ago',  23045.21],
    ['Set', 25023.2],
    ['Out',  29981.23],
    ['Nov',  31625.6],
    ['Dez',  51468.92]
]);

var options = {
  chart: {
    title: 'Faturamento'
  },
  'titleTextStyle': {
    'color': 'black',
    'font-style': 'bold'
  },
  width: 900,
  height: 500
};

var chart = new google.charts.Line(document.getElementById('linechart_material'));

chart.draw(data, google.charts.Line.convertOptions(options));
}

