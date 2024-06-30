google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['País', 'Compras'],
      ['Alemanha', 542],
      ['US', 354],
      ['Brasil', 613],
      ['Canada', 782],
      ['França', 752],
      ['Russia', 867],
      ['Polônia', 142],
      ['Chile', 375]
    ]);

    var options = {
      width: 'max-content',
      height: 720,
      backgroundColor: "#B9D6F2",
      colors: ['#8A2BE2','#8B008B']
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }