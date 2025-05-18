//UI

const getprogressbar = document.getElementById('progress-bar');
window.onscroll=function(){
    scrollpoint();
};

function scrollpoint(){
    let getscrolltop = document.documentElement.scrollTop;
    //console.log(getscrolltop);
    let getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);
    let getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight);
    let calheight = getscrollheight - getscrolltop;
    //console.log(calheight);
    let getfinal = Math.floor((getscrolltop/calheight)*100);
    //console.log(getfinal);

    getprogressbar.style.width = `${getfinal}%`;
    //getprogressbar.style.width = "${getfinal}%";

}

function printme() {
  window.print();
}