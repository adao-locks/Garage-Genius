google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Mês', 'Tempo Médio (min)', { role: "style" } ],
        ['Jan',  10, "#6A5ACD"],
        ['Fev',  15, "#800080"],
        ['Mar',  20, "#8B008B"],
        ['Abr',  18, "#9932CC"],
        ['Mai',  22, "#9400D3"],
        ['Jun',  25, "#9370DB"],
        ['Jul',  28, "#8A2BE2"],
        ['Ago',  26, "#663399"],
        ['Set',  24, "#4B0082"],
        ['Out',  30, "#7B68EE"],
        ['Nov',  32, "#483D8B"],
        ['Dez',  35, "#9931CC"]
    ]);

    var options = {
        width: 'max-content',
        height: 180,
        title: 'Tempo Médio de Atendimento ao Cliente Mensal',
        hAxis: {title: 'Mês'},
        vAxis: {title: 'Tempo Médio (min)'},
        legend: { position: 'none' },
        backgroundColor: "#B9D6F2",
        isStacked: true
    };

    var chart = new google.visualization.BarChart(document.getElementById('bar_chart'));
    chart.draw(data, options);
}