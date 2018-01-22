window.onload = function(){
    getData();
    getClinicalInformation();
    getClaimsInfromation();
}

function getData(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/InsuranceCard/card",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("name").innerHTML = obj.patientFirstName+" "+obj.patientLastName;
            document.getElementById("insuranceid").innerHTML = obj.patientInsuranceId;
        }
    };
    xhttp.send(null)
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
                        document.getElementById("hospitalid").innerHTML = obj[0].hospitalId;
                        document.getElementById("hospitalname").innerHTML = obj[0].hospitalName;
                        document.getElementById("physicianname").innerHTML = obj[0].physicianId;
                        document.getElementById("diagnosiscode").innerHTML = obj[0].diagnosisCode;
                        document.getElementById("diagnosisdetail").innerHTML = obj[0].diagnosisDescription;
                        document.getElementById("lengthofstay").innerHTML = obj[0].lengthOfStay;
                        document.getElementById("treatmentamount").innerHTML = obj[0].requestedTreatmentAmount;
                    
                    
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