//宣告變數-指令有迴圈的時候使用let宣告
let slideIndex = 1;
//一次顯示一張投影
showSlides(slideIndex);

//宣告函數-切換投影片
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//宣告函數-顯示投影片
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //回傳mySlides設定值
  let dots = document.getElementsByClassName("dot"); //回傳dot設定值
  if (n > slides.length) { slideIndex = 1 } //顯示完Slide後從顯示
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //輪播之後不顯示
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");//不顯示點點的編號
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
