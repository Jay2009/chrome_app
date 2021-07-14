const pieChart = document.getElementById("user-pie-chart");
const checkPortfolio = document.getElementById("check-portfolio");
//const savedToDos = localStorage.getItem('todos');

const a =localStorage.getItem("sumNum");
console.log(a+"this is first column's sum");






google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  
  
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Large-cap',  1],
    ['Mid-cap', 2],
    ['Small-cap', 3],
    ['Risk-free assets', 4],
    ['Cash', 50]
  ]);
  const savedUsername = localStorage.getItem("username");
 
  const options = {
    
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
 
  const chart = new google.visualization.PieChart(document.getElementById('pie-chart'));
 
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