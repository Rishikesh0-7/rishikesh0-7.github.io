window.onload = function () {
    if (window.matchMedia("(max-width : 600px)").matches){
        console.log("No")
        document.getElementById("logo").innerHTML = "RA"
        document.getElementById("logo").style = 'color:#c3073f;'
    }
    else {
        console.log("Hey!   ")
    }
}