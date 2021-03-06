var date = ["July, 2018","October, 2018","November, 2018"];

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    console.log(text)
    return text;
}

function onBoardPatientInsuranceCard(){
    var patientid = document.getElementById("patientid").value;
    var patientInsuranceId = document.getElementById("insuranceid").value;
    var paitentname = document.getElementById("paitentname").value;
    var dateOfExpiry = "";
    var randomblahblahblah = makeid();
    var active = "Active";
    var inactive = "Inactive";
    var status = "";
    if(patientid === "123"){
        dateOfExpiry = date[0];
        status = active;
        document.getElementById("insuranceStatus").innerHTML = active;
        document.getElementById("eligibilityrequestid").innerHTML = "ABCD";
        document.getElementById("dateofexpiry").innerHTML = date[0];
    }
    if(patientid === "234"){
        dateOfExpiry = date[1];
        status = active;
        document.getElementById("insuranceStatus").innerHTML = active;
        document.getElementById("eligibilityrequestid").innerHTML = "EFGH";
        document.getElementById("dateofexpiry").innerHTML = date[1];
    }
    if(patientid === "345"){
        dateOfExpiry = date[2];
        status = inactive;
        document.getElementById("insuranceStatus").innerHTML = inactive;
        document.getElementById("eligibilityrequestid").innerHTML = "IJKL"
        document.getElementById("dateofexpiry").innerHTML = date[2];
    }
    if(patientid === "456"){
        dateOfExpiry = date[0];
        status = active;
        document.getElementById("insuranceStatus").innerHTML = active;
        document.getElementById("eligibilityrequestid").innerHTML = "MNOP";
        document.getElementById("dateofexpiry").innerHTML = date[0];
    }
    if(patientid === "678"){
        dateOfExpiry = date[1];
        status = active;
        document.getElementById("insuranceStatus").innerHTML = active;
        document.getElementById("eligibilityrequestid").innerHTML = "QRST";
        document.getElementById("dateofexpiry").innerHTML = date[1];
    }
    if(patientid === "789"){
        dateOfExpiry = date[1];
        status = inactive;
        document.getElementById("insuranceStatus").innerHTML = nactive;
        document.getElementById("eligibilityrequestid").innerHTML = "UVWX";
        document.getElementById("dateofexpiry").innerHTML = date[2];
    }
    alert("Notification sent to Insurance Company and Patient"); 
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/api/InsuranceCard",true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.send(JSON.stringify(
        {
            "$class": "org.acme.health.InsuranceCard",
            "insuranceRequestId": patientid, 
            "insuranceResponseId": randomblahblahblah,
            "patientInsuranceId": patientInsuranceId,
            "patientFirstName": paitentname,
            "patientLastName": paitentname,
            "dateOfExpiry": dateOfExpiry,
            "isActive": status
          }
    ));
    setTimeout(function(){
        var xhttp = new XMLHttpRequest();
        var patientInsuranceId = makeid();
        var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
        xhttp.open("POST", "http://localhost:3000/api/OnboardPatientInsuranceCard", true);
        xhttp.setRequestHeader("Content-type","application/json");
        xhttp.send(JSON.stringify(
            {
                "$class": "org.acme.health.OnboardPatientInsuranceCard",
                "card": "resource:org.acme.health.InsuranceCard#"+patientid
            }
        ));
    
    }, 5000);
}


function getSearch(){
    if(document.getElementById("patientid").value === "123"){
        document.getElementById("paitentname").value = "Aisha Mohammed";
        document.getElementById("age").value = "44";
        document.getElementById("sex").value = "Female";
        document.getElementById("emiratesid").value = "784-1974-123456-2";
        document.getElementById("insuranceid").value = "AA-001-900"
        document.getElementById("contactnumber").value = "971765432612";
        document.getElementById("email").value = "aishamohammed@test.com"
        document.getElementById("patientnameicf").innerHTML = "Aisha Mohammed";
        document.getElementById("insuranceidicf").innerHTML = "AA-001-900";
        
    }
    if(document.getElementById("patientid").value === "234"){
        document.getElementById("paitentname").value = "Aamina Ali";
        document.getElementById("age").value = "57";
        document.getElementById("sex").value = "Female";
        document.getElementById("emiratesid").value = "784-1964-123456-3";
        document.getElementById("insuranceid").value = "BB-007-600";
        document.getElementById("contactnumber").value = "971765432619";
        document.getElementById("email").value = "aamina.ali@test.com"
        document.getElementById("patientnameicf").innerHTML = "Aamina Ali";
        document.getElementById("insuranceidicf").innerHTML = "BB-007-600";
        
    }
    if(document.getElementById("patientid").value === "345"){
        document.getElementById("paitentname").value = "AbdulRazzak Ahmed";
        document.getElementById("age").value = "34";
        document.getElementById("sex").value = "Male";
        document.getElementById("emiratesid").value = "784-1980-123456-4";
        document.getElementById("insuranceid").value = "CC-002-400"
        document.getElementById("contactnumber").value = "971765432676";
        document.getElementById("email").value = "aahmed@test.com";
        document.getElementById("patientnameicf").innerHTML = "AbdulRazzak Ahmed";
        document.getElementById("insuranceidicf").innerHTML = "CC-002-400";
        
    }
    if(document.getElementById("patientid").value === "456"){
        document.getElementById("paitentname").value = "Hanifa Shaheen";
        document.getElementById("age").value = "56";
        document.getElementById("sex").value = "Female";
        document.getElementById("emiratesid").value = "764-1974-123456-2";
        document.getElementById("insuranceid").value = "AA-001-950"
        document.getElementById("contactnumber").value = "971765432632";
        document.getElementById("email").value = "hanifa.shaheen@test.com"
        document.getElementById("patientnameicf").innerHTML = "Hanifa Shaheen";
        document.getElementById("insuranceidicf").innerHTML = "AA-001-950";
        
    }
    if(document.getElementById("patientid").value === "678"){
        document.getElementById("paitentname").value = "Hakeem Hassan";
        document.getElementById("age").value = "65";
        document.getElementById("sex").value = "Male";
        document.getElementById("emiratesid").value = "774-1964-123456-3";
        document.getElementById("insuranceid").value = "BB-007-650"
        document.getElementById("contactnumber").value = "971765432609";
        document.getElementById("email").value = "hakeem.hassan@test.com"
        document.getElementById("patientnameicf").innerHTML = "Hakeem Hassan";
        document.getElementById("insuranceidicf").innerHTML = "BB-007-650";
        
       
    }
    if(document.getElementById("patientid").value === "789"){
        document.getElementById("paitentname").value = "Hesham Osama";
        document.getElementById("age").value = "27";
        document.getElementById("sex").value = "Male";
        document.getElementById("emiratesid").value = "794-1990-123456-4";
        document.getElementById("insuranceid").value = "CC-002-450";
        document.getElementById("contactnumber").value = "971765432614";
        document.getElementById("email").value = "hesham.osama@test.com"
        document.getElementById("patientnameicf").innerHTML = "Hesham Osama";
        document.getElementById("insuranceidicf").innerHTML = "CC-002-450";
        
    }

    setTimeout(function(){
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3000/api/PatientRecord", true);
        xhttp.setRequestHeader("Content-type","application/json");
        xhttp.send(JSON.stringify( 
            {
            "$class": "org.acme.health.PatientRecord",
            "patientId": document.getElementById("patientid").value,
            "patientFirstName": document.getElementById("paitentname").value,
            "patientLastName": document.getElementById("paitentname").value,
            "patientAge": document.getElementById("age").value,
            "patientGender": document.getElementById("sex").value,
            "patientEmiratesId": document.getElementById("emiratesid").value,
            "patientInsuranceId": document.getElementById("insuranceid").value,
            "patientContactNumber": document.getElementById("contactnumber").value,
            "patientEmailId": document.getElementById("email").value,
            "patientVisitType": "Inpatient",
            "dateOfExpiry": date[0]
            }
        ));
    
    }, 3000);
}

function deleteDataIC(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/InsuranceCard/123",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataPR(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/PatientRecord/123",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataCA(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/ClinicalAsset/ZZ123",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataIC1(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/InsuranceCard/234",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataPR1(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/PatientRecord/234",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataCA1(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/ClinicalAsset/ZZ124",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataIC2(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/InsuranceCard/345",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataPR2(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/PatientRecord/345",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataCA2(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/ClinicalAsset/ZZ125",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataIC3(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/InsuranceCard/456",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataPR3(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/PatientRecord/456",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataCA3(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/ClinicalAsset/ZZ126",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataIC4(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/InsuranceCard/567",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataPR4(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/PatientRecord/567",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataCA4(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/ClinicalAsset/ZZ127",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataIC5(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/InsuranceCard/678",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataPR5(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/PatientRecord/678",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataCA5(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/ClinicalAsset/ZZ128",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataIC6(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/InsuranceCard/789",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataPR6(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/PatientRecord/789",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}

function deleteDataCA6(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/ClinicalAsset/ZZ129",true);
    xhttp.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhttp.send(null);

}



function sendDataPA(){
    var patientid = document.getElementById("patientid").value;
    queryBuilder = "?param1" + patientid; 
    window.location.href = "physician-prior-authorization.html" + queryBuilder;
}

function sendDataIC(){
    var patientid = document.getElementById("patientid").value;
    queryBuilder = "?param1" + patientid;
    window.location.href = "insurance-company.html" + queryBuilder;
}

function sendDataHCT(){
    
    var patientid = document.getElementById("patientid").value;
    queryBuilder = "?param1" + patientid;
    window.location.href = "hospital-claims-teams.html" + queryBuilder;
}

function sendDataP(){
    var patientid = document.getElementById("patientid").value;
    queryBuilder = "?param1" + patientid;
    window.location.href = "patient.html" + queryBuilder;
}

document.cookie = document.getElementById("patientid").value;
var cookie = document.cookie;



