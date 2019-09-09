function setColors(c0, c1){
    var color0 = document.getElementsByClassName("c0")
    var color1 = document.getElementsByClassName("c1")

    for (i=0; i < color0.length; i++){
        color0[i].style.background = c0
        if (i < color1.length){
            color1[i].style.background = c1
        }
    }
}