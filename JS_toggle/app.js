const getdownloadbtn = document.querySelector(".download-btn");
const getprogressbar = document.querySelector(".progress-bar");
const seturl = "https://linkedin.com";

getdownloadbtn.addEventListener("click", function () {
  let setwidth = 0;
  let setinv = setInterval(progressinc, 100);

  function progressinc() {
    if (setwidth >= 100) {
      clearInterval(setinv);
      window.location.href = seturl;
    } else {
      setwidth++;
      getprogressbar.style.width = `${setwidth}%`; // Use backticks here
      getprogressbar.setAttribute("data-inc", `${setwidth}%`); // Use backticks here too
      getdownloadbtn.setAttribute("disabled", true);
    }
  }
});
