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
    document.getElementById("contactnumber").innerHTML = queries[6].replace("param6","");
    document.getElementById("visittype").innerHTML = "Inpatient"
    document.getElementById("email").innerHTML = queries[7].replace("param7","");
}

window.onload = function(){
    getData();
    getClinicalInformation();
    getClaimsInfromation();
}

function getData(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/InsuranceCard/"+queries[0].replace("param1",""),false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("name").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidpr").innerHTML = obj.patientInsuranceId;
            document.getElementById("eligibilityid").value = obj.insuranceResponseId;
            document.getElementById("dateofexpiry").value = obj.dateOfExpiry;
        }
    };
    xhttp.send();
}

function sendData(){
    var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/api/ApproveInsuranceCardRequest", true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.send(JSON.stringify(
        {
            "$class": "org.acme.health.ApproveInsuranceCardRequest",
            "coverage": {
              "$class": "org.acme.health.CoverageDetails",
              "insuranceResponseId": "coverage",
              "insuranceRequestId": document.getElementById("insuranceid").value,
              "patientFirstName": document.getElementById("name").value,
              "patientLastName": document.getElementById("name").value,
              "insuranceCardId": "12342351",
              "isCovered": false,
              "date": timeStampInMs
            }
          }
    ));
    alert("Please Data Sent To Prior Authorization"); 
}

function getClinicalInformation(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/ClinicalAsset", false);
    xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var obj = JSON.parse(this.responseText);
                        document.getElementById("hospitalid").innerHTML = obj.hospitalId;
                        document.getElementById("hospitalname").innerHTML = obj.hospitalName;
                        document.getElementById("physicianname").innerHTML = obj.physicianId;
                        document.getElementById("diagnosiscode").innerHTML = obj.diagnosisCode;
                        document.getElementById("diagnosisdetail").innerHTML = obj.diagnosisDescription;
                        document.getElementById("lengthofstay").innerHTML = obj.lengthOfStay;
                        document.getElementById("treatmentamount").innerHTML = obj.requestedTreatmentAmount;
                    
                    
                }
                
    };
    xhttp.send();

}

function sendInsuranceCompany(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/api/ApprovePriorAuthorization", true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.send(JSON.stringify(
        
            {
                "$class": "org.acme.health.ApprovePriorAuthorization",
                "clinical": {
                  "$class": "org.acme.health.ClinicalAssetResponse",
                  "clinicalResponseId": "response",
                  "clinicalRequestId": document.getElementById("clinicalresponseid").value,
                  "isApproved": true
                }
              }
          

    ));
    alert("Data Sent To Hospital Claims Team");
     
}

function getClaimsInfromation(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/ClinicalAsset", false);
    xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var obj = JSON.parse(this.responseText);
                        document.getElementById("claimsRequestid").innerHTML = obj.claimsRequestId;
                        document.getElementById("diagnosiscode").innerHTML = obj.diagnosisCode;
                        document.getElementById("loincode").innerHTML = obj.loincCode;
                        document.getElementById("cptcode").innerHTML = obj.cptCode;
                        document.getElementById("amount").innerHTML = obj.amount;
                    
                    
                    
                }
                
    };
    xhttp.send();
}

