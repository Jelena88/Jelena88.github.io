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
