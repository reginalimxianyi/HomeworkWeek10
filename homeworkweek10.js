var vg_1 = "homework_week_10_choropleth_map.vg.json";
vegaEmbed("#hw10_choropleth_map", vg_1, {"actions":false}).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "homework_week_10_bar_chart.vg.json";
vegaEmbed("#hw10_bar_chart", vg_2, {"actions":false}).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
