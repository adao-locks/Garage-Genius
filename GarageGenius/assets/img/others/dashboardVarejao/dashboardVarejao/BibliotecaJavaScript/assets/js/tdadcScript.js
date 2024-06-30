google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Status', 'Percentual'],
        ['Abandonado',  60],
        ['Completado',  40]
    ]);

    var options = {
        width: 400,
        height: 250,
        title: 'Taxa de Abandono de Carrinho',
        pieHole: 0.4,
        backgroundColor: "#B9D6F2",
        slices: {
            0: { color: '#8A2BE2' },
            1: { color: '#7B68EE' }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
    chart.draw(data, options);
}