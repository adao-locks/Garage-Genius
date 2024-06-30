google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Definir os dados do gráfico
    var data = google.visualization.arrayToDataTable([
        ['Mês', 'Rotatividade de Estoque', { role: "style" }],
        ['Jan',  2.5,"#6A5ACD"],
        ['Fev',  2.8,"#800080"],
        ['Mar',  3.0,"#8B008B"],
        ['Abr',  3.2,"#9932CC"],
        ['Mai',  3.5,"#9400D3"],
        ['Jun',  3.8,"#9370DB"],
        ['Jul',  4.0,"#8A2BE2"],
        ['Ago',  3.9,"#663399"],
        ['Set',  3.7,"#4B0082"],
        ['Out',  4.2,"#7B68EE"],
        ['Nov',  4.5,"#483D8B"],
        ['Dez',  5.0,"#9931CC"]
    ]);

    // Definir as opções do gráfico
    var options = {
        width: 'max-content',
        height: 180,
        title: 'Rotatividade de Estoque Mensal',
        hAxis: {title: 'Mês'},
        backgroundColor: "#B9D6F2",
        vAxis: {title: 'Rotatividade de Estoque'},
        legend: { position: 'none' }
    };

    // Desenhar o gráfico
    var chart = new google.visualization.ColumnChart(document.getElementById('column2_chart'));
    chart.draw(data, options);
}