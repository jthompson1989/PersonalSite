var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  else if (n < 1) {slideIndex = x.length}
  else {slideIndex = n;}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function loadSite(){
    showDivs(1);
    renderYears();
}

function renderYears(){
    renderYear("dotNetYear", new Date(2010, 0, 1));
    renderYear("msSqlYear", new Date(2010, 0, 1));
    renderYear("postgresYear", new Date(2023, 0, 1));
    renderYear("webYear", new Date(2008, 0, 1));
    renderYear("angularYear", new Date(2014, 0, 1));
    renderYear("javaYear", new Date(2010, 0, 1));
}

function renderYear(spanId, date){
    document.getElementById(spanId).innerHTML = calculateYearsDifference(date);
}


function calculateYearsDifference(date) { 
    var yearDiff = Date.now() - date;
    return Math.abs(new Date(yearDiff).getUTCFullYear() - 1970);
  }