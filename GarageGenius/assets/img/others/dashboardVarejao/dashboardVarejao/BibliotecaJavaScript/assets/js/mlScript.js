google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Mês', 'Margem de Lucro (%)', { role: "style" }],
        ['Jan',  10, '#7B68EE'],
        ['Fev',  14, '#7B68EE'],
        ['Mar',  20, '#7B68EE'],
        ['Abr',  18, '#7B68EE'],
        ['Mai',  25, '#7B68EE'],
        ['Jun',  30, '#7B68EE'],
        ['Jul',  35, '#7B68EE'],
        ['Ago',  32, '#7B68EE'],
        ['Set',  28, '#7B68EE'],
        ['Out',  40, '#7B68EE'],
        ['Nov',  42, '#7B68EE'],
        ['Dez',  50, '#7B68EE']
    ]);

    var options = {
        width: 600,
        height: 250,
        title: 'Margem de Lucro Mensal',
        hAxis: {title: 'Mês'},
        vAxis: {title: 'Margem de Lucro (%)'},
        backgroundColor: "#B9D6F2",
        curveType: 'function',
        legend: { position: 'none' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve2_chart'));
    chart.draw(data, options);
}