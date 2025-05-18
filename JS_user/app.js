const slides = document.getElementsByClassName('carousel-item');
const dots = document.querySelectorAll('.dot');

let currslide = 1;
document.getElementById('prev').addEventListener('click', function(){
  carousel(--currslide);
})

document.getElementById("next").addEventListener("click", function () {
  carousel(++currslide);
});

carousel(currslide);

function carousel(slidenum) {
  let x,y;
  for (x =0; x < slides.length; x++) {
    slides[x].style.display = "none"   
  }

  for (y = 0; y < slides.length; y++) {
    dots[y].classList.remove("active");
  }

  if (slidenum > slides.length){
    currslide = 1;
  }else if(slidenum < 1){
    currslide = slides.length;
  }
  
  slides[currslide - 1].style.display = "block";
  dots[currslide - 1].classList.add("active");
  // dots[currslide - 1].classList.add("active");
  // console.log(currslide);

  for(let q =0; q < dots.length; q++){
    dots[q].addEventListener('click',function(){
      currslide = this.getAttribute("data-bs-slide-top");
      carousel(currslide);
    })
  }
}