function hide(){
    var lbar = document.getElementById("analyzer");
    var rbar = document.getElementById("trnav");
    lbar.style.backgroundImage="linear-gradient(90deg, rgba(153,178,183,.1),transparent 100%)";
    lbar.style.color="rgba(256,256,256,.5)";
    rbar.style.backgroundImage="linear-gradient(90deg, transparent, rgba(153,178,183,.1))";
    rbar.style.color="rgba(256,256,256,.5)";
}

function expose(){
    var lbar = document.getElementById("analyzer");
    var rbar = document.getElementById("trnav");
    lbar.style.backgroundImage="linear-gradient(90deg, rgba(153,178,183,.8),transparent 100%)";
    lbar.style.color="#fff";
    rbar.style.backgroundImage="linear-gradient(90deg, transparent, rgba(153,178,183,.8))";
    rbar.style.color="#fff";
}

document.addEventListener("scroll",hide);
var lbar = document.getElementById("analyzer");
var rbar = document.getElementById("trnav");
lbar.addEventListener("mouseenter", expose);
lbar.addEventListener("mouseleave", hide);
rbar.addEventListener("mouseenter", expose);
rbar.addEventListener("mouseleave", hide);
