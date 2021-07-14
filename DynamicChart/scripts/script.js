const options = {
    chart: {
      type: "line",
      height: "100%"
    },
    series: [],
    noData: {
      text: "Loading..."
    }
};
  
function updateChart(data, chart, searchTerms) {
    let series = transformData(data, searchTerms.year, searchTerms.country)
    chart.updateSeries([
        {
        name: "Sales",
        data: series
        }
    ]);
}
  
let data;
let chart;
 
window.addEventListener("DOMContentLoaded", async () => {
  // create the chart
  chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  data = await loadData();
 
  // can only update after we render
  updateChart(data, chart, {
    year: 2020,
    country: ""
  });
});
 
document.querySelector("#search-btn").addEventListener("click", function() {
  let country = document.querySelector("#search-terms").value;
  updateChart(data, chart, {
    year: 2020,
    country: country
  });
});

