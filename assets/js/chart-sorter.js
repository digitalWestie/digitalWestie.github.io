var ChartSorter = {
  // sort a dataset
  sort: function (chart, datasetIndex) {
    var data = chart.data.datasets[1].data;
    _.sortBy(data, function(num, i){ return ; });

    chart.datasets.forEach(function (dataset, i) {
      //set it
    });

    chart.update();
  },
  // reload data
  reload: function (chart, datasetIndex, labels, values) {
    var diff = chart.datasets[datasetIndex].bars.length - values.length;
    if (diff < 0) {
      for (var i = 0; i < -diff; i++)
        chart.addData([0], "");
    } else if (diff > 0) {
      for (var i = 0; i < diff; i++)
        chart.removeData();
    }
    
    chart.datasets[datasetIndex].bars.forEach(function (bar, i) {
      chart.scale.xLabels[i] = labels[i];
      bar.value = values[i];
    })
    chart.update();
  }
}