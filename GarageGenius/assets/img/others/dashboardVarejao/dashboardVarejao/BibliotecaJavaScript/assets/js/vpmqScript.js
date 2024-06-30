google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["mês", "sold", { role: "style" } ],
        ["Jan", 19521.5, "#6A5ACD"],
        ["Fev", 22345.49, "#800080"],
        ["Mar", 11782.30, "#8B008B"],
        ["Apr", 28456.16, "#9932CC"],
        ["May", 17654.98, "#9400D3"],
        ["Jun", 30548.31, "#9370DB"],
        ["Jul", 43215.24, "#8A2BE2"],
        ["Ago", 29467.65, "#663399"],
        ["Set", 32569.78, "#4B0082"],
        ["Out", 21763.99, "#7B68EE"],
        ["Nov", 14326.32, "#483D8B"],
        ["Dec", 19876.74, "#9932CC"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        width: 500,
        height: 250,
        title: "Total vendido por mês",
        backgroundColor: "#B9D6F2",
        bar: {groupWidth: "65%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options);
  }