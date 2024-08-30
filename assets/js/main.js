let btns = document.querySelectorAll(".item");
btns.forEach(element => {
    element.onclick = () => {
        element.classList.toggle("active");
    } 
});

let btn1 = document.querySelector(".btn");
let taskbar = document.querySelector(".sidebar");

function expandTaskbar(){
    taskbar.classList.toggle('active');
}

let btnExpand = document.querySelector(".btn-expand");
function toggleFullScreen (){
    document.documentElement.requestFullscreen();
}

var options = {
    series: [{
    name: 'Project A',
    type: 'column',
    data: [23, 11, 23, 27, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'Project B',
    type: 'line',
    data: [44, 55, 41, 67, 22, 43, 21, 31, 41, 56, 27, 43]
  },
  {
    name: 'Project C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 31, 52, 59, 36, 39]
  }],
    chart: {
    height: 400,
    width: 785,
    type: 'line',
  },
  stroke: {
    width: [0, 4]
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'Revenue',
    },
  
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();

  var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
    chart: {
    type: 'bar',
    height: 250,
    width: 400
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();


  var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 200,
    width: 380,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();


  var options = {
    series: [43, 55, 41, 17, 15],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#donut"), options);
  chart.render();

let btnFlag = document.querySelector(".btn-flag");
let flagSection = document.querySelector(".flags-section");

btnFlag.onclick = function (e){
  flagSection.classList.toggle("active");
}

let btnAccount = document.querySelector(".btn-user");
let accountSection = document.querySelector(".account-section");

btnAccount.onclick = function (e){
  accountSection.classList.toggle("active");
}