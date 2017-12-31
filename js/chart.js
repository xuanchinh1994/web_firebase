google.charts.load('current', {'packages':['line']});
    //google.charts.setOnLoadCallback(drawChart);

    function drawChart(dataFill) {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day');
      data.addColumn('number', 'Guardians of the Galaxy');
      data.addColumn('number', 'The Avengers');

      data.addRows(dataFill);

      var options = {
        chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)'
        },
        width: 900,
        height: 500,
        hAxis: { ticks: [16, {v:32, f:'thirty two'}, {v:64, f:'sixty four'}, 128] }
      };

      var chart = new google.charts.Line(document.getElementById('linechart_material'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }