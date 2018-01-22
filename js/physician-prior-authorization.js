console.log("Physician Prior Authorization JS is active")

window.onload = function(){
    getInsuranceStatus();
    getPatientData();
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
            document.getElementById("insuranceResponse").innerHTML = obj[0].insuranceResponseId;
            document.getElementById("date").innerHTML = obj[0].date;
                    
        }
    };
    xhttp.send();
}

function sendClinicalInformation(){
    var hospitalid = document.getElementById("hospitalid").value;
    var hospitalname = document.getElementById("hospitalname").value;
    var physicianname = document.getElementById("physicianname").value;
    var clinicalrequestid = document.getElementById("clinicalrequestid").value;
    var dateofadmission = document.getElementById("dateofadmission").value;
    var diagnosiscode = document.getElementById("diagnosiscode").value;
    var diagnosisdetail = document.getElementById("diagnosisdetail").value;
    var lengthofstay = document.getElementById("lengthofstay").value;
    var treatmentamount = document.getElementById("treatmentamount").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/api/IssuePriorAuthorization", true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.send(JSON.stringify({
        "$class": "org.acme.health.IssuePriorAuthorization",
        "clinical": {
            "$class": "org.acme.health.ClinicalAsset",
            "physicianId": physicianname,
            "hospitalId": hospitalid,
            "hospitalName": hospitalname,
            "dateOfAdmission": dateofadmission,
            "diagnosisCode": diagnosiscode,
            "diagnosisDescription": diagnosisdetail,
            "lengthOfStay": lengthofstay,
            "requestedTreatmentAmount": treatmentamount
        }
        }));
    alert("Data Send To Insurance Company");    
}

function getPatientData(){
    document.getElementById("patientid").innerHTML = "1234";
    document.getElementById("patientname").innerHTML = "Aisha Mohammed";
    document.getElementById("age").innerHTML = "44";
    document.getElementById("sex").innerHTML = "Female";
    document.getElementById("emiratesid").innerHTML = "123456789";
    document.getElementById("insuranceid").innerHTML = "";
    document.getElementById("contactnumber").innerHTML = "971543651972";
    document.getElementById("visittype").innerHTML = "Inpatient";
    document.getElementById("email").innerHTML = "ishamohammed@test.com";
}