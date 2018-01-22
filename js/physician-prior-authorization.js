window.onload = function(){
    getInsuranceStatus();
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

var querryString = decodeURIComponent(window.location.search);
querryString = querryString.substring(1);
var queries = querryString.split("&");
for(var i = 0; i < queries.length; i++){
    var incremeter = i++;
    document.getElementById("patientid").innerHTML = queries[0].replace("param1","");
    document.getElementById("patientname").innerHTML = queries[1].replace("param2","");
    document.getElementById("age").innerHTML = queries[2].replace("param3","");
    document.getElementById("sex").innerHTML = queries[3].replace("param4","");
    document.getElementById("emiratesid").innerHTML = queries[4].replace("param5","");
    document.getElementById("insuranceid").innerHTML = queries[5].replace("param6","");
    document.getElementById("contactnumber").innerHTML = queries[6].replace("param","");
    document.getElementById("visittype").innerHTML = "Inpatient"
    document.getElementById("email").innerHTML = queries[7].replace("param7","");
}

