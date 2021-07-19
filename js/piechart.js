const toDoFormAll = document.getElementById("todo-form-all");
const scoreList = document.getElementById("score-list");
const pieChart = document.getElementById("user-pie-chart");
const checkPortfolio = document.getElementById("check-portfolio");
const getusertag = document.getElementById("userName");

//const savedToDos = localStorage.getItem('todos');
const username = localStorage.getItem("username");
const a =parseInt(localStorage.getItem("sumNum"));
const b =parseInt(localStorage.getItem("sumNumSecond"));
const c =parseInt(localStorage.getItem("sumNumThird"));
const d =parseInt(localStorage.getItem("sumNumFourth"));
const e =parseInt(localStorage.getItem("sumNumFifth"));
const f =parseInt(localStorage.getItem("sumNumSixth"));

const totalsum = a + b + c + d + e + f;
let persentA = a/totalsum * 100;
let persentB = b/totalsum * 100;
let persentC = c/totalsum * 100;
let persentD = d/totalsum * 100;
let persentE = e/totalsum * 100;
let persentF = f/totalsum * 100;


console.log(persentA);
getusertag.innerHTML = "Hello, " + username;


        google.charts.load('current', {'packages':['corechart']}); 
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', '비중');
  data.addRows([
    ['기술주',a],
    ['경기방어주', b],
    ['배당주', c],
    ['해외주식', d],
    ['안전자산', e],
    ['현금', f]
  ]);
  
 
  const options = {
                'is3D': 'true',
                'title': username + "'s" + ' Portfolio ',
                'titleTextStyle' : {'color':'#4267b2',
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

const idealPercentA = 40;
const idealPercentB = 20;
const idealPercentC = 10;
const idealPercentD = 10;
const idealPercentE = 10;
const idealPercentF = 10;



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawIdealChart);

function drawIdealChart() {

  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['기술주',  40],
    ['경기방어주', 20],
    ['배당주', 10],
    ['테마주', 10],
    ['안전자산', 10],
    ['현금', 10]
  ]);
  const options = {'title': 'The ideal Portfolio ',
                    'is3D': 'true',
                    'titleTextStyle' : {'color':'#4267b2',
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

  console.dir(data);
  console.log()
}

let scoreOfA = 0;
let scoreOfB = 0;
let scoreOfC = 0;
let scoreOfD = 0;
let scoreOfE = 0;
let scoreOfF = 0;
let totalScore = 0;


function calculYourScore() {
  if(persentA == 40) {
    console.log("기술주:40점");
    scoreOfA = 40;
  }else if((persentA < 40  && persentA >= 30) || (persentA > 40 && persentA < 60)){
    console.log("기술주:30점");
    scoreOfA = 30;
  }else if((persentA < 30 && persentA >= 20) || (persentA >= 60 && persentA < 70)){
    console.log("기술주:20점");
    scoreOfA = 20;
  }else if((persentA < 20 && persentA >= 10) || (persentA >= 70 && persentA < 80)){
    console.log("기술주:10점");
    scoreOfA = 10;
  }else if((persentA < 10 && persentA > 0) || (persentA >= 90 && persentA < 100)){
    console.log("기술주:5점");
    scoreOfA = 5;
  }else{
    console.log("기술주:0점");
    scoreOfA = 0;
  }

  if(persentB == 20) {
    console.log("경기방어주:20점");
    scoreOfB = 20;
  }else if((persentB < 20  && persentB >= 15) || (persentB > 20 && persentB < 40)){
    console.log("경기방어주:15점");
    scoreOfB = 15;
  }else if((persentB < 15 && persentB >= 10) || (persentB >= 40 && persentB < 60)){
    console.log("경기방어주:10점");
    scoreOfB = 10;
  }else if((persentB < 10 && persentB >= 5) || (persentB >= 60 && persentB < 80)){
    console.log("경기방어주:5점");
    scoreOfB = 5;
  }else if((persentB < 5 && persentB > 0) || (persentB >= 80 && persentB < 100)){
    console.log("경기방어주:3점");
    scoreOfB = 3;
  }else{
    console.log("경기방어주:0점");
    scoreOfB = 0;
  }


  if(persentC == 10) {
    console.log("배당주:20점");
    scoreOfC = 10;
  }else if((persentC < 10  && persentC >= 8) || (persentC > 10 && persentC < 15)){
    console.log("배당주:8점");
    scoreOfC = 8;
  }else if((persentC < 8 && persentC >= 6) || (persentC >= 15 && persentC < 20)){
    console.log("배당주:6점");
    scoreOfC = 6;
  }else if((persentC < 6 && persentC >= 4) || (persentC >= 20 && persentC < 35)){
    console.log("배당주:4점");
    scoreOfC = 4;
  }else if((persentC < 4 && persentC > 2) || (persentC >= 35 && persentC < 100)){
    console.log("배당주:2점");
    scoreOfC = 2;
  }else{
    console.log("배당주:0점");
    scoreOfC = 0;
  }


  if(persentD == 10) {
    console.log("테마주:20점");
    scoreOfD = 10;
  }else if((persentD < 10  && persentD >= 8) || (persentD > 10 && persentD < 15)){
    console.log("테마주:8점");
    scoreOfD = 8;
  }else if((persentD < 8 && persentD >= 6) || (persentD >= 15 && persentD < 20)){
    console.log("테마주:6점");
    scoreOfD = 6;
  }else if((persentD < 6 && persentD >= 4) || (persentD >= 20 && persentD < 35)){
    console.log("테마주:4점");
    scoreOfD = 4;
  }else if((persentD < 4 && persentD > 2) || (persentD >= 35 && persentD < 100)){
    console.log("테마주:2점");
    scoreOfD = 2;
  }else{
    console.log("테마주:0점");
    scoreOfD = 0;
  }

  if(persentE == 10) {
    console.log("안전자산:20점");
    scoreOfE = 10;
  }else if((persentE < 10  && persentE >= 8) || (persentE > 10 && persentE < 15)){
    console.log("안전자산:8점");
    scoreOfE = 8;
  }else if((persentE < 8 && persentE >= 6) || (persentE >= 15 && persentE < 20)){
    console.log("안전자산:6점");
    scoreOfE = 6;
  }else if((persentE < 6 && persentE >= 4) || (persentE >= 20 && persentE < 35)){
    console.log("안전자산:4점");
    scoreOfE = 4;
  }else if((persentE < 4 && persentE > 2) || (persentE >= 35 && persentE < 100)){
    console.log("안전자산:2점");
    scoreOfE = 2;
  }else{
    console.log("안전자산:0점");
    scoreOfE = 0;
  }

  if(persentF == 10) {
    console.log("현금:20점");
    scoreOfF = 10;
  }else if((persentF < 10  && persentF >= 8) || (persentF > 10 && persentF < 15)){
    console.log("현금:8점");
    scoreOfF = 8;
  }else if((persentF < 8 && persentF >= 6) || (persentF >= 15 && persentF < 20)){
    console.log("현금:6점");
    scoreOfF = 6;
  }else if((persentF < 6 && persentF >= 4) || (persentF >= 20 && persentF < 35)){
    console.log("현금:4점");
    scoreOfF = 4;
  }else if((persentF < 4 && persentF > 2) || (persentF >= 35 && persentF < 100)){
    console.log("현금:2점");
    scoreOfF = 2;
  }else{
    console.log("현금:0점");
    scoreOfF = 0;
  }

  totalScore = scoreOfA + scoreOfB + scoreOfC + scoreOfD + scoreOfE + scoreOfF;
console.log("your total score is : " + totalScore);
  const spanScore = document.createElement("span");
  const spanScoreA = document.createElement("span");
  const spanScoreB = document.createElement("span");
  const spanScoreC = document.createElement("span");
  const spanScoreD = document.createElement("span");
  const spanScoreE = document.createElement("span");
  const spanScoreF = document.createElement("span");

  
  scoreList.appendChild(spanScore);
  scoreList.appendChild(spanScoreA);
  scoreList.appendChild(spanScoreB);
  scoreList.appendChild(spanScoreC);
  scoreList.appendChild(spanScoreD);
  scoreList.appendChild(spanScoreE);
  scoreList.appendChild(spanScoreF);

  toDoFormAll.appendChild(scoreList);

  spanScore.innerText = username + '님의 최종 점수 : ' + totalScore +'점 / 100점';
  spanScoreA.innerText = '기술주 점수 : ' + scoreOfA +'점 / 40점';
  spanScoreB.innerText = '경기방어주 점수 : ' + scoreOfB +'점 / 20점';
  spanScoreC.innerText = '배당주 점수 : ' + scoreOfC +'점 / 10점';
  spanScoreD.innerText = '테마주 점수 : ' + scoreOfD +'점 / 10점';
  spanScoreE.innerText = '안전자산 점수 : ' + scoreOfE +'점 / 10점';
  spanScoreF.innerText = '현금 점수 : ' + scoreOfF +'점 / 10점';



}
calculYourScore();



 