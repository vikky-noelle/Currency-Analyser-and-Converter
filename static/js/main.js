//new file script
function convertCurrency()
{
var image = document.getElementById("imageToSwap");
var dropd = document.getElementById("convertfrom");
image.src = "E:\\ccl\\flag\\"+dropd.value+".jpg";
var image = document.getElementById("imageToSwapr");
var dropd = document.getElementById("convertto");
image.src = "E:\\ccl\\flag\\"+dropd.value+".jpg";
var convertfrom=document.getElementById("convertfrom").value;
var convertto=document.getElementById("convertto").value;
var xmlhttp=new XMLHttpRequest();
var url = "https://ratesapi.io/api/latest?base="+convertfrom+"&symbols="+convertto;
xmlhttp.open("GET",url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
  if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
  {
    var result = xmlhttp.responseText;

    var jsResult = JSON.parse(result);
   var oneunit = jsResult.rates[convertto];
    var amount = document.getElementById("convertAmountfrom").value;
    document.getElementById("convertAmountto").value = (oneunit*amount).toFixed(3);
  }
}
}
  //end new file script

  //new file script
  function update()
  {  var todayyear = new Date();
     var todaymonth = new Date();
     var todaydate = new Date();
     var month = todaymonth.getMonth()+1;
     var date = todaydate.getDate()
     if(month<10){
       newmonth="0"+month;
     }
     else{
       newmonth=month;
     }
     if(date<10){
       date="0"+date;
     }
     today = todayyear.getFullYear()+"-"+newmonth+"-"+date;
     var targetdate=document.getElementById("from-datepicker").value;
     if(today<targetdate)
       {
         alert("Please enter correct date");
         document.getElementById("convertdateAmountto").value = 0.000;
       }
      else
        convertDateCurrency();
  }
  function convertDateCurrency()
  {
  var image = document.getElementById("imageToSwap2l");
  var dropd = document.getElementById("convertdatefrom");
  image.src = "E:\\ccl\\flag\\"+dropd.value+".jpg";
  var image = document.getElementById("imageToSwapr2r");
  var dropd = document.getElementById("convertdateto");
  image.src = "E:\\ccl\\flag\\"+dropd.value+".jpg";
  var convertdatefrom=document.getElementById("convertdatefrom").value;
  var convertdateto=document.getElementById("convertdateto").value;
  var convertdate=document.getElementById("from-datepicker").value;
  var xmlhttp=new XMLHttpRequest();
  var url = "https://ratesapi.io/api/"+convertdate+"?base="+convertdatefrom+"&symbols="+convertdateto;
  xmlhttp.open("GET",url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function(){
  if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
  {
    var result = xmlhttp.responseText;
    var jsResult = JSON.parse(result);
    var oneunit = jsResult.rates[convertdateto];
    var amount = document.getElementById("convertdateAmountfrom").value;
    document.getElementById("convertdateAmountto").value = (oneunit*amount).toFixed(3);
  }
  }
  }
  //end new file script
  //new file script
    $( document ).ready(function() {
      $("#from-datepicker1").datepicker({
        format: 'yyyy-mm-dd'
      });
      $("#from-datepicker1").on("change", function () {
        var fromdate = $(this).val();
        });
      });
  //end new file script

  //new file script
    $( document ).ready(function() {
      $("#from-datepicker2").datepicker({
        format: 'yyyy-mm-dd'
      });
      $("#from-datepicker2").on("change", function () {
        var fromdate = $(this).val();
        });
      });
  //end new file script

  //new file script
  function updateflag()
  {
    var image = document.getElementById("imageToSwap3l");
    var dropd = document.getElementById("currencybox1");
    image.src = "E:\\ccl\\flag\\"+dropd.value+".jpg";
    var image = document.getElementById("imageToSwap3r");
    var dropd = document.getElementById("currencybox2");
    image.src = "E:\\ccl\\flag\\"+dropd.value+".jpg";
  }
  //end new file script
  //new file script
  function checkdate()
  {  var todayyear = new Date();
     var todaymonth = new Date();
     var todaydate = new Date();
     var month = todaymonth.getMonth()+1;
     var date = todaydate.getDate()
     if(month<10){
       newmonth="0"+month;
     }
     else{
       newmonth=month;
     }
     if(date<10){
       date="0"+date;
     }
     today = todayyear.getFullYear()+"-"+newmonth+"-"+date;
     var targetdate=document.getElementById("from-datepicker1").value;
     var targetdate2=document.getElementById("from-datepicker2").value;
     if(today<targetdate)
       {
         alert("Please enter correct date");
       }
    else {

      if(today<targetdate2)
      alert("Please enter correct date");
      else
        currencydiff();
    }

  }
function currencydiff()
{
var date1=document.getElementById("from-datepicker1").value;
var date2=document.getElementById("from-datepicker2").value;
var basecurrencytype=document.getElementById("currencybox1").value;
var currencytype=document.getElementById("currencybox2").value;
var amount1;
var amount2;
var xmlhttp=new XMLHttpRequest();
var url1 = "https://ratesapi.io/api/"+date1+"?base="+basecurrencytype+"&symbols="+currencytype;
xmlhttp.open("GET",url1, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function()
{
  if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
  {
    var result = xmlhttp.responseText;

    var jsResult = JSON.parse(result);
   amount1 = jsResult.rates[currencytype];
   }
}
var xmlhttp2=new XMLHttpRequest();
var url2 = "https://ratesapi.io/api/"+date2+"?base="+basecurrencytype+"&symbols="+currencytype;
xmlhttp2.open("GET",url2, true);
xmlhttp2.send();
xmlhttp2.onreadystatechange = function()
{
  if(xmlhttp2.readyState == 4 && xmlhttp2.status == 200)
  {
    var result = xmlhttp2.responseText;
    var jsResult = JSON.parse(result);
   amount2 = jsResult.rates[currencytype];
   var diff = amount2-amount1;
   document.getElementById("currencyshowdiff").value = diff.toFixed(3);
 }
}
}
  //end new file script

  //new file script
    $( document ).ready(function() {
      $("#from-datepicker").datepicker({
        format: 'yyyy-mm-dd'
      });
      $("#from-datepicker").on("change", function () {
        var fromdate = $(this).val();
        });
      });
  //end new file script
