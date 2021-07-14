const pieChart = document.getElementById("user-pie-chart");
const checkPortfolio = document.getElementById("check-portfolio");
//const savedToDos = localStorage.getItem('todos');

const a =parseInt(localStorage.getItem("sumNum"));
console.log(a+"this is first column's sum");


        google.charts.load('current', {'packages':['corechart']}); 
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', '비중');
  data.addRows([
    ['Large-cap',a],
    ['Mid-cap', 2],
    ['Small-cap', 3],
    ['Risk-free assets', 4],
    ['Cash', 50]
  ]);
  
 
  const options = {
                'is3D': 'true',
                'title': savedUsername+ "'s" + ' Portfolio ',
                'titleTextStyle' : {'color':'#315aac',
                                    'fontSize':'20', 
                                    'bold':'true' , 
                                    'italic':'true'},
                'fontSize':'14',
                'width':400,
                'height':400,
                'backgroundColor': 'none',
                'legend':'none'
                };
 
  const chart = new google.visualization.PieChart(document.getElementById('user-pie-chart'));
 
  chart.draw(data, options);
 
  
}




google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawIdealChart);

function drawIdealChart() {

  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Large-cap',  40],
    ['Mid-cap', 30],
    ['Small-cap', 20],
    ['Risk-free assets', 5],
    ['Cash', 5]
  ]);
  const options = {'title': 'The ideal Portfolio ',
                    'is3D': 'true',
                    'titleTextStyle' : {'color':'#315aac',
                              'fontSize':'20', 
                              'bold':'true' , 
                              'italic':'true'},

                    'fontSize':'14',
                    'width':400,
                    'height':400,
                    'backgroundColor': 'none',
                    'legend':'none'
  };
  const chart = new google.visualization.PieChart(document.getElementById('ideal-pie-chart'));
  chart.draw(data, options);
}
