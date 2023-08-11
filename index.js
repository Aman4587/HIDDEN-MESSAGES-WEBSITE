var showing = false;
document.querySelector("img").style.display = "none";
colors = ["crimson","aliceblue","antiquewhite","aquamarine","azure","beige","bisque","blanchedalmond"]
messages = ["You are wearing a grey nike shirt I can see you","Are you in the dead???? Watch behind you 💀","IM WATCHING YOU 👀","What are you doing alone in the dark....","I KNOW WHEN TO DO SOMETHING, BUT WHAT IS IT??????????????????"]

function show_image() {
    document.querySelector("img").style.display = "block";
    showing = true
    document.querySelector("h1").style.display = "block";
    c = colors [Math.floor(Math.random()*colors.length)]
    document.querySelector("h1").style.color = c
    rm = messages [Math.floor(Math.random()*messages.length)]
    document.querySelector("h1").textContent = rm
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