google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Mês', 'Índice de Satisfação (%)', { role: "style" }],
        ['Jan',  85, "#6A5ACD"],
        ['Fev',  88, "#800080"],
        ['Mar',  90, "#8B008B"],
        ['Abr',  85, "#9932CC"],
        ['Mai',  92, "#9400D3"],
        ['Jun',  87, "#9370DB"],
        ['Jul',  91, "#8A2BE2"],
        ['Ago',  89, "#663399"],
        ['Set',  88, "#4B0082"],
        ['Out',  93, "#7B68EE"],
        ['Nov',  95, "#483D8B"],
        ['Dez',  94, "#9931CC"]
    ]);

    var options = {
        width: 'max-content',
        height: 180,
        title: 'Índice de Satisfação do Cliente Mensal',
        hAxis: {title: 'Mês'},
        vAxis: {title: 'Índice de Satisfação (%)'},
        backgroundColor: "#B9D6F2",
        legend: { position: 'none' }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('satisfaction_chart'));
    chart.draw(data, options);
}