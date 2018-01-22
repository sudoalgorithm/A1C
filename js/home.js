console.log("Home JS is active");

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    console.log(text)
    return text;
}

function onBoardPatientInsuranceCard(){
    var xhttp = new XMLHttpRequest();
    var patientInsuranceId = makeid();
    var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
    xhttp.open("POST", "http://localhost:3000/api/OnboardPatientInsuranceCard", true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.send(JSON.stringify(
        {
            "$class": "org.acme.health.OnboardPatientInsuranceCard",
             "card":{
                "$class": "org.acme.health.InsuranceCard",
                "insuranceRequestId": "card",
                "patientInsuranceId": patientInsuranceId,
                "patientFirstName": "Aisha",
                "patientLastName": "Mohammed",
                "date": timeStampInMs
             }
        }
    ));
    alert("Data Sent To Insurance Company"); 
}

function getInsuranceStatus(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/CoverageDetails", false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        if(obj[0].isCovered === true){
            document.getElementById("insuranceStatus").innerHTML = "Covered";
        }else{
            document.getElementById("insuranceStatus").innerHTML = "Not Covered";
        }
        
    }
    
    };
    xhttp.send();
    }

window.onload = function(){
    getInsuranceStatus();
}

function getSearch(){
    console.log(typeof document.getElementById("patientid").value);
    if(document.getElementById("patientid").value === "1234"){
        document.getElementById("paitentname").value = "Aisha Mohammed";
        document.getElementById("age").value = "44";
        document.getElementById("emiratesid").value = "123456789";
        document.getElementById("contactnumber").value = "971543651972";
        document.getElementById("email").value = "ishamohammed@test.com"
        document.getElementById("patientnameicf").innerHTML = "Aisha Mohammed";
    }
    if(document.getElementById("insuranceid").value === null){
        document.getElementById("insuranceidicf").innerHTML = " ";
    }
    if(document.getElementById("insuranceid") !== null){
        document.getElementById("insuranceidicf").innerHTML = document.getElementById("insuranceid").value;
    }
    
}