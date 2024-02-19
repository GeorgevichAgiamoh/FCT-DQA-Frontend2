google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Student Distribution"],
    ["SS1", 11],
    ["SS2", 2],
    ["SS3", 2],
    ["Others", 7],
  ]);

  var options = {
    title: "Distribution of Students",
    pieHole: 0.2,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("donutchart")
  );
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ]);

  var options = {
    title: "REVENUE PROJECTION",
    vAxis: { title: "Revenue" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
    legend: "none",
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartLine);
function drawChartLine() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ]);

  var options = {
    title: "",
    curveType: "function",
    legend: "none",
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartLine2);
function drawChartLine2() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ]);

  var options = {
    title: "",
    curveType: "function",
    legend: "none",
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart2")
  );

  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartLine3);
function drawChartLine3() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ]);

  var options = {
    title: "",
    curveType: "function",
    legend: "none",
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart3")
  );

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChartLine4);
function drawChartLine4() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ]);

  var options = {
    title: "",
    curveType: "function",
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart4")
  );

  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawVisualization2);

function drawVisualization2() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ]);

  var options = {
    title: "",
    vAxis: { title: "Revenue" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
    legend: "none",
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("chart_div2")
  );
  chart.draw(data, options);
}
