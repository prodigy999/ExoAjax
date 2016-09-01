var xhhtp;

function valider() {

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("sortie").innerHTML = xhttp.responseText;
        }
    }
    
    xhttp.open('POST', 'inscription', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var data = "utilisateur=" + document.getElementsByName("utilisateur")[0].value;
    data = data + "&motDePasse=" + document.getElementsByName("motDePasse")[0].value;
    data = data + "&code=" + document.getElementsByName("code")[0].value;

    xhttp.send(data);
}


