var showing = false;
document.querySelector("img").style.display = "none";
colors = ["crimson","aliceblue","antiquewhite","aquamarine","azure","beige","bisque","blanchedalmond"]


function show_image() {
    document.querySelector("img").style.display = "block";
    showing = true
    document.querySelector("h1").style.display = "block";
    c = colors [Math.floor(Math.random()*colors.length)]
    document.querySelector("h1").style.color = c
}

function hide_image(){
    document.querySelector("img").style.display = "none";
    document.querySelector("h1").style.display = "none";
    showing = false

}
 
function bp() {
    if (showing == true){
        hide_image()
    }
    else{
        show_image()
    }
}