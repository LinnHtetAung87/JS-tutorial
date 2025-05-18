let getsignupbtn = document.getElementById("signup-btn");
let getfullscreenbtn = document.getElementById("fullscreen-btn");
let getclosefullscreenbtn = document.getElementById("closefullscreen-btn");

let getmodal = document.querySelector(".modal");
let getbtnclose = document.querySelector(".btn-close");

// Open modal
getsignupbtn.addEventListener("click", function () {
  getmodal.style.display = "block";
});

// Close modal
getbtnclose.addEventListener("click", function () {
  getmodal.style.display = "none";
});

// Click outside modal to close
window.onclick = function (e) {
  if (e.target === getmodal) {
    getmodal.style.display = "none";
  }
};

const getdoele = document.documentElement;

// Enter fullscreen
getfullscreenbtn.addEventListener("click", function () {
  if (getdoele.requestFullscreen) {
    getdoele.requestFullscreen();
  } else if (getdoele.webkitRequestFullscreen) {
    getdoele.webkitRequestFullscreen();
  } else if (getdoele.msRequestFullscreen) {
    getdoele.msRequestFullscreen();
  }
});

// Exit fullscreen
getclosefullscreenbtn.addEventListener("click", function () {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
});
