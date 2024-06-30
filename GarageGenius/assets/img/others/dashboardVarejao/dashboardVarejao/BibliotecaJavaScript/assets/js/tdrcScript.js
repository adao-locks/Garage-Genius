google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Mês', 'Taxa de Retorno (%)'],
        ['Jan',  30],
        ['Fev',  35],
        ['Mar',  40],
        ['Abr',  38],
        ['Mai',  45],
        ['Jun',  50],
        ['Jul',  55],
        ['Ago',  52],
        ['Set',  48],
        ['Out',  60],
        ['Nov',  62],
        ['Dez',  70]
    ]);

    var options = {
        width: 'max-content',
        height: 180,
        title: 'Taxa de Retorno de Clientes Mensal',
        hAxis: {title: 'Mês'},
        vAxis: {title: 'Taxa de Retorno (%)'},
        backgroundColor: "#B9D6F2",
        colors: ['#663399'],
        legend: { position: 'bottom' },
        areaOpacity: 0.4
    };

    var chart = new google.visualization.AreaChart(document.getElementById('area_chart'));
    chart.draw(data, options);
}