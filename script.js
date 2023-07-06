window.onscroll = function(){topNav()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function topNav(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky");
    }
}

const body = document.querySelector("body")
const icon = document.querySelector("#darkmode")
icon.addEventListener("click", function(){
    body.classList.toggle("darktheme")
    body.style.transition = '2s'
    document.querySelector("#navbar").style.transition = '2s'
    document.querySelector(".logos").style.transition = '2s'
    icon.classList.toggle("bi-sun-fill")

    var set;
    if(body.classList.contains('darktheme')){
        console.log('dark mode')
        set = 'DARK'
    } else{
        console.log('light mode')
        set = 'LIGHT'
    }
    localStorage.setItem("ModeTheme", JSON.stringify(set))
})

let GetMode = JSON.parse(localStorage.getItem("ModeTheme"))
if(GetMode === 'DARK'){
    body.classList = 'darktheme'
}

window.addEventListener('load', function(){
    if(body.classList.contains('darktheme')){
        icon.classList.add('bi-sun-fill')
    }else{
        icon.classList.add('bi-moon-fill')
    }
})

var closeNavi = document.getElementById("closeNav")
var openNavi = document.getElementById("openNav")
openNavi.onclick = function(){openNav()}
function openNav(){
    document.getElementById("sidenav").style.width = "250px";
}
closeNavi.onclick = function(){closeNav()}
function closeNav(){
    document.getElementById("sidenav").style.width = "0"
}

var modalFeedback = document.getElementById("sendModal")
var btnFeedback = document.getElementById("send")
var spanFeed = document.getElementsByClassName("closeFeed")[0]
btnFeedback.onclick = function(){displayModalFeed()}
function displayModalFeed(){
    var inputFeed = document.getElementById("inputFeedback").value
    if(inputFeed != ""){
        modalFeedback.style.display = "block"
        return true
    }
}
spanFeed.onclick = function(){closeFeed(); resetFeed()}
function closeFeed(){modalFeedback.style.display = "none"}
function resetFeed(){document.getElementById("formFeed").reset();}
window.onclick = function(event){
    if(event.target == modalFeedback){
        modalFeedback.style.display = "none";
    }
}