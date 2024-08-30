
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


/*charts*/

var options = {
    series: [{
    name: 'Sales',
    data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  forecastDataPoints: {
    count: 7
  },
  stroke: {
    width: 5,
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
    tickAmount: 10,
    labels: {
      formatter: function(value, timestamp, opts) {
        return opts.dateFormatter(new Date(timestamp), 'dd MMM')
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: [ '#FDD835'],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    },
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();


const table = document.querySelector('#table');
fetch("http://localhost:3000/leaves")
  .then((response) => response.json())
  .then((data) =>{
    data.forEach(element => {
        AddRow(element);
    });
  })
  .catch(error => console.log(error));

function AddRow(data){
    const tr = document.createElement("tr");
    tr.classList.add("row");
    table.appendChild(tr);

    const th1 = document.createElement("th");
    th1.classList.add("row-1");
    tr.appendChild(th1);
    th1.innerText = data.name;

    const th2 = document.createElement("th");
    th2.classList.add("row-2");
    tr.appendChild(th2);
    th2.innerText = data.leaveType;

    const th3 = document.createElement("th");
    th3.classList.add("row-3");
    tr.appendChild(th3);
    th3.innerText = data.leaveFrom;

    const th4 = document.createElement("th");
    th4.classList.add("row-4");
    tr.appendChild(th4);
    th4.innerText = data.leaveTo;

    const th5 = document.createElement("th");
    th5.classList.add("row-5");
    tr.appendChild(th5);
    th5.innerText = data.days;

    const th6 = document.createElement("th");
    th6.classList.add("row-6");
    tr.appendChild(th6);
    th6.innerText = data.status;
}   