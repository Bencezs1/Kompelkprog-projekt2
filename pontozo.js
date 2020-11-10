function check(){
    var a = Number(document.getElementById('haloi').value);
    var b = Number(document.getElementById('progi').value);
    var c = Number(document.getElementById('webi').value);
    var d = Number(document.getElementById('halo').value);
    var e = Number(document.getElementById('prog').value);
    var f = Number(document.getElementById('web').value);
    var ossz = document.getElementById('eredmeny').innerHTML = a+b+c+d+e+f;
    return false;


    var pont;
    if (ossz>=168) {
        pont = 5;
    }
    if (ossz>=126) {
        pont = 4;
    }
    if (ossz>=84) {
        pont = 3;
    }
    if (ossz>=52) {
        pont = 2;
    }
    if (ossz<52) {
       pont = 1;
   }

   document.getElementById("mennyi").innerHTML = pont;


}