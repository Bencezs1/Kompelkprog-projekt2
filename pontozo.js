function check(){
    var a = document.pontozo.Haloi.value;
    var b = document.pontozo.Progi.value;
    var c = document.pontozo.Webi.value;
    var d = document.pontozo.Halo.value;
    var e = document.pontozo.Prog.value;
    var f = document.pontozo.Web.value,
    var ossz = 0;
    ossz = a + b + c + d + e + f;

    var pont;
    if (ossz>=168) {
        pont = 5
    }
    if (ossz>=126) {
        pont = 4
    }
    if (ossz>=84) {
        pont = 3
    }
    if (ossz>=52) {
        pont = 2
    }
    if (ossz<52) {
        pont = 1
    }

    document.getElementById("kuldes").style.visibility = "visible";
    document.getElementById("mennyi").innerHTML = "Neked " + ossz + " pontod van.";

}