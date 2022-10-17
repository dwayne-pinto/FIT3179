var vg_1 = "PPM_map.vl.json";
var vg_2 = "bubble_chart.json";
var vg_3 = "disease_chart.json";
var vg_4 = "timeseries_chart.json";

vegaEmbed("#ppm_map", vg_1).then(function(result) {}).catch(console.error);
vegaEmbed("#bubble_chart", vg_2).then(function(result) {}).catch(console.error);
vegaEmbed("#disease_chart", vg_3).then(function(result) {}).catch(console.error);
vegaEmbed("#timeseries_chart", vg_4).then(function(result) {}).catch(console.error);
