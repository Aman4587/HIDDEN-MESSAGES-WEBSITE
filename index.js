var showing = false;
document.querySelector("img").style.display = "none";

function show_image() {
    document.querySelector("img").style.display = "block";
    showing = true
    document.querySelector("h1").style.display = "block";
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