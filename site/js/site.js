let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  slideIndex += n;
  const slides = document.getElementsByClassName("mySlides");
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  showDivs(slideIndex);
}

function showDivs(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {n = 1}
  if (n < 1) {n = slides.length}
  slideIndex = n;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > 0 && slideIndex <= slides.length) {
    slides[slideIndex-1].style.display = "block";
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
    //renderYear("webYear", new Date(2008, 0, 1));
    renderYear("angularYear", new Date(2016, 0, 1));
    renderYear("golangYear", new Date(2023, 0, 1));
}

function renderYear(spanId, date){
    document.getElementById(spanId).innerHTML = calculateYearsDifference(date);
}

function calculateYearsDifference(date) { 
    const yearDiff = Date.now() - date.getTime();
    return Math.floor(yearDiff / (1000 * 60 * 60 * 24 * 365.25));
}