google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ['Semana', 'Entradas', 'Vendas'],
          ['1ªSemana',  165,      147],
          ['2ªSemana',  135,      134],
          ['3ªSemana',  157,      147],
          ['4ªSemana',  139,      135]
        ]);

        var options = {
          width: 400,
          height: 250,
          title : 'Taxa de conversão',
          seriesType: 'bars',
          backgroundColor: "#B9D6F2",
          colors: ['#8A2BE2','#8B008B'],
          series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }