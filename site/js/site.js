var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  slideIndex += n;
  if (slideIndex > document.getElementsByClassName("mySlides").length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = document.getElementsByClassName("mySlides").length}
  showDivs(slideIndex);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {n = 1}
  if (n < 1) {n = x.length}
  slideIndex = n;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  if (slideIndex > 0 && slideIndex <= x.length) {
    x[slideIndex-1].style.display = "block";
  }
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
    renderYear("angularYear", new Date(2016, 0, 1));
    renderYear("javaYear", new Date(2010, 0, 1));
}

function renderYear(spanId, date){
    document.getElementById(spanId).innerHTML = calculateYearsDifference(date);
}


function calculateYearsDifference(date) { 
    var yearDiff = Date.now() - date;
    return Math.abs(new Date(yearDiff).getUTCFullYear() - 1970);
  }