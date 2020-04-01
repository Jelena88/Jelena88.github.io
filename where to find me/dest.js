function select() {
    var s = document.getElementById("select").value;
    var c = document.querySelector(".All").children;
    if (s === "All") {

        for (var i = 0; i <= c.length; i++) {
            c[i].style.display = "block";
        }
    } else {


        for (var i = 0; i <= c.length; i++) {
            c[i].style.display = "none";



            var r = document.getElementsByClassName(s)

            r[0].style.display = "block"
        }

    }
}


function displayBar(m) {

    var x = document.getElementById("menu");

    if (m.matches && x.style.display === "none") {
        x.style.display = "block";
    } else if (m.matches) {
        x.style.display = "none";
    }
    else {
        x.style.display = "flex";
        x.style.flexDirection = "row";

    }
}
var m = window.matchMedia("(max-width: 768px)");
displayBar(m)
m.addListener(displayBar)





