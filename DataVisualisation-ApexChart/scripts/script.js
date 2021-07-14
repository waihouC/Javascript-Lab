// 1. We define the chart options. 
const lineOptions =  {
    chart: {
        type: 'line',
        height:"100%"
    },
    // each series represents one set of data
    series:[
        {
            // name: 'sightings',
            // data:[10, 13, 15, 22, 34, 23, 55, 78, 44]
            name: 'Deals closed',
            data:[3000, 3200, 4100, 1500, 1000, 2000, 7000]
        },
        {
            // name: 'temperature',
            // data:[33, 21, 22, 24, 25, 26, 26, 21, 31, 44]
            name: 'Deals rejected',
            data:[1500, 1000, 500, 1200, 1500, 500, 2000]
        }
    ],
    // what is are the labels along the x-axis (horizontal line)
    xaxis: {
        //categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct']
        categories:['1999', '2000', '2001', '2002', '2003', '2004', '2005']
    },
    
}
 
// create the chart
const lineChart = new ApexCharts(document.querySelector('#line-chart'), lineOptions);
 
// render the chart
lineChart.render()

const barOptions =  {
    chart: {
        type:'bar',
        height:"100%"
    },
    // each series represents one set of data
    series:[
        {
            // name: 'revenue',
            // data:[120000, 75000, 80000, 45000, 33000, 55000]
            name: 'Number of male residents',
            data:[175000, 188000, 190000, 185000, 190760]
        },
        {
            // name: 'losses',
            // data:[25000, 15000, 30000, 5000, 12000, 12500]
            name: 'Number of female residents',
            data:[180000, 190000, 210000, 200000, 210000]
        }
    ],
    // what is are the labels along the x-axis (horizontal line)
    xaxis: {
        //categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        categories:['1999', '2000', '2001', '2002', '2003']
    },
}

// create the chart
const barChart = new ApexCharts(document.querySelector('#bar-chart'), barOptions);
 
// render the chart
barChart.render()

const pieOptions =  {
    chart: {
        type: 'pie',
        height:"100%"
    },
    // each series represents one set of data
    series:[21, 23, 22, 27, 45],
 
    // what is are the labels along the x-axis (horizontal line)
    labels:['English', 'Mathematics', 'Mother Tongue', 'Science', 'PE'],
    
    // primary colors
    colors:['#043380', '#9ae3aa', '#eba2bb', '#f4f7b7', '#dfa5fa']
}
 
// create the chart
const pieChart = new ApexCharts(document.querySelector('#pie-chart'), pieOptions);
 
// render the chart
pieChart.render()


const campaigns = [3, 5, 1, 8, 4, 10];
const reach = [5000, 17000, 2400, 25000, 14000, 55000];
const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
 
// Create the line chart
const campaignChartOptions = {
  chart: {
    id: "campaign",
    type: "line",
    height: "100%",
    width: "100%",
    group: "campaign-charts"
  },
  // each series represents one set of data
  series: [
    {
      name: "campaigns",
      data: campaigns
    }
  ],
  // what is are the labels along the x-axis (horizontal line)
  xaxis: {
    categories: categories
  },
  yaxis: {
    labels: {
      minWidth: 40
    }
  }
};
 
// create the chart
const campaignChart = new ApexCharts(
  document.querySelector("#campaignChart"),
  campaignChartOptions
);
 
// render the chart
campaignChart.render();
 
const reachChartOptions = {
  chart: {
    id: "reach",
    type: "line",
    height: "100%",
    group: "campaign-charts"
  },
  // each series represents one set of data
  series: [
    {
      name: "reach",
      data: reach
    }
  ],
  // what is are the labels along the x-axis (horizontal line)
  xaxis: {
    categories: categories
  },
  yaxis: {
    labels: {
      minWidth: 40
    }
  }
};
 
// create the chart
const reachChart = new ApexCharts(
  document.querySelector("#reachChart"),
  reachChartOptions
);

// render the bar chart
reachChart.render();


const extOptions =  {
  chart: {
      type: 'line',
      height:"100%"
  },
  series:[
      
  ],
  noData: {
      "text": "Loading..."
  }
 
  
}

// create the chart
const extChart = new ApexCharts(document.querySelector('#extdata-chart'), extOptions);

// render the chart
extChart.render();

window.addEventListener('DOMContentLoaded', async ()=>{
  let series = await loadData();
  extChart.updateSeries([{
      'name': 'Sales',
      'data': series
  }])
})


const hoOptions1 =  {
  chart: {
      type: 'line',
      height:"100%"
  },
  series:[
      
  ],
  noData: {
      "text": "Loading..."
  }
}

const hoChart1 = new ApexCharts(document.querySelector('#handson-chart1'), hoOptions1);

hoChart1.render();

const hoOptions2 =  {
  chart: {
      type: 'line',
      height:"100%"
  },
  series:[
      
  ],
  noData: {
      "text": "Loading..."
  }
}

const hoChart2 = new ApexCharts(document.querySelector('#handson-chart2'), hoOptions2);

hoChart2.render();

window.addEventListener('DOMContentLoaded', async ()=>{
  let series1 = await loadMeteors();
  let series2 = await loadSightings();
  hoChart1.updateSeries([{
      'name': 'Meteors',
      'data': series1
  }])
  hoChart2.updateSeries([{
    'name': 'Sightings',
    'data': series2
  }])
})

const csvOptions =  {
  chart: {
      type: 'line',
      height:"100%"
  },
  series:[
      
  ],
  noData: {
      "text": "Loading..."
  }
}

const csvChart = new ApexCharts(document.querySelector('#csv-chart'), csvOptions);

csvChart.render();

let dataURL = "data/live-births-deaths-natural-increase-by-ethnic-group-from-1971-onwards.csv";
window.addEventListener('DOMContentLoaded', async ()=>{
  let transformedObject = await loadCSVData(dataURL);
  csvChart.updateSeries([{
      'name': 'Crude Birth Rates',
      //'data': transformObjectToSeries(transformedObject.totalBirthsByYear)
      'data': transformedObject.totalBirthsByYear
  },
  {
      'name': 'Crude Death Rates',
      //'data': transformObjectToSeries(transformedObject.totalDeathsByYear)
      'data': transformedObject.totalDeathsByYear
  },
  {
      'name': 'Chinese Birth Rates',
      'data': transformedObject.birthsForChinese
  },
  {
      'name': 'Malay Birth Rates',
      'data': transformedObject.birthsForMalays
  },
  {
      'name': 'Indian Birth Rates',
      'data': transformedObject.birthsForIndians
  },
  {
      'name': 'Other Birth Rates',
      'data': transformedObject.birthsForOthers
  }])
})
