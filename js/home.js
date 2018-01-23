var date = ["July, 2018","January, 2018","November, 2018"];

var patientid = document.getElementById("patientid").value;
var patientInsuranceId = document.getElementById("insuranceid").value;
var paitentname = document.getElementById("paitentname").value;
var dateofexpiry = document.getElementById("dateofexpiry").innerText;

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
    xhttp.open("POST", "http://localhost:3000/api/InsuranceCard", true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.send(JSON.stringify(
        {
            "$class": "org.acme.health.InsuranceCard",
            "insuranceRequestId": patientid,
            "patientInsuranceId": patientInsuranceId,
            "patientFirstName": paitentname,
            "patientLastName": paitentname,
            "dateOfExpiry": dateofexpiry
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
    if(document.getElementById("patientid").value === "123"){
        document.getElementById("paitentname").value = "Aisha Mohammed";
        document.getElementById("age").value = "44";
        document.getElementById("sex").value = "Female";
        document.getElementById("emiratesid").value = "784-1974-123456-2";
        document.getElementById("insuranceid").value = "AA-001-900"
        document.getElementById("contactnumber").value = "971765432612";
        document.getElementById("email").value = "aishamohammed@test.com"
        document.getElementById("patientnameicf").innerHTML = "Aisha Mohammed";
        document.getElementById("insuranceidicf").innerHTML = "AA-001-900"
        document.getElementById("insuranceStatus").innerHTML = "Active";
        document.getElementById("eligibilityrequestid").innerHTML = "ABCD";
        document.getElementById("dateofexpiry").innerHTML = date[0];
        setTimeout(function(){
            alert("Data Sent To Physician Prior Authorization")
        }, 1000);
    }
    if(document.getElementById("patientid").value === "234"){
        document.getElementById("paitentname").value = "Aamina Ali";
        document.getElementById("age").value = "57";
        document.getElementById("sex").value = "Female";
        document.getElementById("emiratesid").value = "784-1964-123456-3";
        document.getElementById("insuranceid").value = "BB-007-600"
        document.getElementById("contactnumber").value = "971765432619";
        document.getElementById("email").value = "aamina.ali@test.com"
        document.getElementById("patientnameicf").innerHTML = "Aamina Ali";
        document.getElementById("insuranceidicf").innerHTML = "BB-007-600"
        document.getElementById("insuranceStatus").innerHTML = "Active";
        document.getElementById("eligibilityrequestid").innerHTML = "EFGH";
        document.getElementById("dateofexpiry").innerHTML = date[1];
        setTimeout(function(){
            alert("Data Sent To Physician Prior Authorization")
        }, 1000);
    }
    if(document.getElementById("patientid").value === "345"){
        document.getElementById("paitentname").value = "AbdulRazzak Ahmed";
        document.getElementById("age").value = "34";
        document.getElementById("sex").value = "Male";
        document.getElementById("emiratesid").value = "784-1980-123456-4";
        document.getElementById("insuranceid").value = "CC-002-400"
        document.getElementById("contactnumber").value = "971765432676";
        document.getElementById("email").value = "aahmed@test.com"
        document.getElementById("patientnameicf").innerHTML = "AbdulRazzak Ahmed";
        document.getElementById("insuranceidicf").innerHTML = "CC-002-400"
        document.getElementById("insuranceStatus").innerHTML = "Inactive";
        document.getElementById("eligibilityrequestid").innerHTML = "IJKL"
        document.getElementById("dateofexpiry").innerHTML = date[2];
        setTimeout(function(){
            alert("Data Sent To Physician Prior Authorization")
        }, 1000);
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
        document.getElementById("insuranceidicf").innerHTML = "AA-001-950"
        document.getElementById("insuranceStatus").innerHTML = "";
        document.getElementById("eligibilityrequestid").innerHTML = "";
        document.getElementById("dateofexpiry").innerHTML = "";
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
        document.getElementById("insuranceidicf").innerHTML = "BB-007-650"
        document.getElementById("insuranceStatus").innerHTML = "Active";
        document.getElementById("eligibilityrequestid").innerHTML = "ABCD";
        document.getElementById("dateofexpiry").innerHTML = "July, 2018";
        document.getElementById("insuranceStatus").innerHTML = "";
        document.getElementById("eligibilityrequestid").innerHTML = "";
        document.getElementById("dateofexpiry").innerHTML = "";
    }
    if(document.getElementById("patientid").value === "789"){
        document.getElementById("paitentname").value = "Hesham Osama";
        document.getElementById("age").value = "27";
        document.getElementById("sex").value = "Male";
        document.getElementById("emiratesid").value = "794-1990-123456-4";
        document.getElementById("insuranceid").value = "CC-002-450"
        document.getElementById("contactnumber").value = "971765432614";
        document.getElementById("email").value = "hesham.osama@test.com"
        document.getElementById("patientnameicf").innerHTML = "Hesham Osama";
        document.getElementById("insuranceidicf").innerHTML = "CC-002-450"
        document.getElementById("insuranceStatus").innerHTML = "";
        document.getElementById("eligibilityrequestid").innerHTML = "";
        document.getElementById("dateofexpiry").innerHTML = "";
    }
}

function sendDataPA(){
    var patientid = document.getElementById("patientid").value;
    var paitentname = document.getElementById("paitentname").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var emiratesid = document.getElementById("emiratesid").value;
    var insuranceid = document.getElementById("insuranceid").value;
    var contactnumber = document.getElementById("contactnumber").value;
    var email = document.getElementById("email").value;

    queryBuilder = "?param1" + patientid + "&param2" + paitentname + "&param3" + age + "&param4" + sex + "&param5" + emiratesid + "&param6" + insuranceid + "&param6" + contactnumber + "&param7" + email;
    window.location.href = "physician-prior-authorization.html" + queryBuilder;
}

function sendDataIC(){
    console.log("SendData PA");
    var patientid = document.getElementById("patientid").value;
    var paitentname = document.getElementById("paitentname").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var emiratesid = document.getElementById("emiratesid").value;
    var insuranceid = document.getElementById("insuranceid").value;
    var contactnumber = document.getElementById("contactnumber").value;
    var email = document.getElementById("email").value;

    queryBuilder = "?param1" + patientid + "&param2" + paitentname + "&param3" + age + "&param4" + sex + "&param5" + emiratesid + "&param6" + insuranceid + "&param6" + contactnumber + "&param7" + email;
    window.location.href = "insurance-company.html" + queryBuilder;
}

function sendDataHCT(){
    console.log("SendData PA");
    var patientid = document.getElementById("patientid").value;
    var paitentname = document.getElementById("paitentname").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var emiratesid = document.getElementById("emiratesid").value;
    var insuranceid = document.getElementById("insuranceid").value;
    var contactnumber = document.getElementById("contactnumber").value;
    var email = document.getElementById("email").value;

    queryBuilder = "?param1" + patientid + "&param2" + paitentname + "&param3" + age + "&param4" + sex + "&param5" + emiratesid + "&param6" + insuranceid + "&param6" + contactnumber + "&param7" + email;
    window.location.href = "hospital-claims-teams.html" + queryBuilder;
}

function sendDataP(){
    console.log("SendData PA");
    var patientid = document.getElementById("patientid").value;
    var paitentname = document.getElementById("paitentname").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var emiratesid = document.getElementById("emiratesid").value;
    var insuranceid = document.getElementById("insuranceid").value;
    var contactnumber = document.getElementById("contactnumber").value;
    var email = document.getElementById("email").value;

    queryBuilder = "?param1" + patientid + "&param2" + paitentname + "&param3" + age + "&param4" + sex + "&param5" + emiratesid + "&param6" + insuranceid + "&param6" + contactnumber + "&param7" + email;
    window.location.href = "patient.html" + queryBuilder;
}