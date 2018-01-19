function sendContact() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/explorer/api/InsuranceCard", true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);

}