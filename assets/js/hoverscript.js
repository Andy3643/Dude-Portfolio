

/*Script For Automatic Slider Start*/
var slideIndex = 0;showSlides();function showSlides(){var i;var slides = document.getElementsByClassName("mySlides");var dots = document.getElementsByClassName("dot");for (i = 0;i < slides.length;i++){slides[i].style.display = "none";}slideIndex++;if (slideIndex > slides.length){slideIndex = 1;}for (i = 0;i < dots.length;i++){dots[i].className = dots[i].className.replace(" active","");}slides[slideIndex-1].style.display = "block";dots[slideIndex-1].className += " active";setTimeout(showSlides,8000)};
// Change image every 4 seconds
/*Script For Automatic Slider End*/















// image slider
let i=0;
let images=[];
const TIME=3000;
images[0] ="https://www.qries.com/images/banner_logo.png";
// images[1] ="../images/hotelimages/display2.jpg";
// images[2] ="../images/hotelimages/display3.jpg";
// images[3] ="../images/hotelimages/display4.jpg";
// images[4] ="../images/hotelimages/display5.jpg";

function slideshow(){

  document.querySelector('#display-photo').src= images[i];
  if(i<images.length-1){
    i++;
  }else{
    i=0;
  }

  setTimeout("slideshow()",TIME);
  console.log("function working");
};

window.onload=slideshow();

