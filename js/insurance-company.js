var querryString = decodeURIComponent(window.location.search);
querryString = querryString.substring(1);
var queries = querryString.split("&");

function getData(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/InsuranceCard/123",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("name").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidpr").innerHTML = obj.patientInsuranceId;
            document.getElementById("eligibilityid").value = obj.insuranceResponseId;
            document.getElementById("dateofexpiry").value = obj.dateOfExpiry;
            console.log(obj.isActive);
            if(obj.isActive === "Active"){
                document.getElementById("insuranceidstatus").value = "Active"
            }else{
                document.getElementById("insuranceidstatus").value = "In Active"
            }
        }
    };
    xhttp.send();
}

function getPatientData(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/PatientRecord/123",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("patientid").innerHTML = obj.patientId;
            document.getElementById("patientname").innerHTML = obj.patientFirstName;
            document.getElementById("age").innerHTML = obj.patientAge;
            document.getElementById("sex").innerHTML = obj.patientGender;
            document.getElementById("emiratesid").innerHTML = obj.patientEmiratesId;
            document.getElementById("insuranceid").innerHTML = obj.patientInsuranceId;
            document.getElementById("contactnumber").innerHTML = obj.patientContactNumber;
            document.getElementById("visittype").innerHTML = obj.patientVisitType;
            document.getElementById("email").innerHTML = obj.patientEmailId;
            document.getElementById("patientnameci").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidci").innerHTML = obj.patientInsuranceId;
            
        }
    };
    xhttp.send();
}

function getData1(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/InsuranceCard/234",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("name").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidpr").innerHTML = obj.patientInsuranceId;
            document.getElementById("eligibilityid").value = obj.insuranceResponseId;
            document.getElementById("dateofexpiry").value = obj.dateOfExpiry;
            console.log(obj.isActive);
            if(obj.isActive === "Active"){
                document.getElementById("insuranceidstatus").value = "Active"
            }else{
                document.getElementById("insuranceidstatus").value = "In Active"
            }
        }
    };
    xhttp.send();
}

function getPatientData1(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/PatientRecord/234",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("patientid").innerHTML = obj.patientId;
            document.getElementById("patientname").innerHTML = obj.patientFirstName;
            document.getElementById("age").innerHTML = obj.patientAge;
            document.getElementById("sex").innerHTML = obj.patientGender;
            document.getElementById("emiratesid").innerHTML = obj.patientEmiratesId;
            document.getElementById("insuranceid").innerHTML = obj.patientInsuranceId;
            document.getElementById("contactnumber").innerHTML = obj.patientContactNumber;
            document.getElementById("visittype").innerHTML = obj.patientVisitType;
            document.getElementById("email").innerHTML = obj.patientEmailId;
            document.getElementById("patientnameci").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidci").innerHTML = obj.patientInsuranceId;
            
        }
    };
    xhttp.send();
}

function getData2(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/InsuranceCard/345",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("name").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidpr").innerHTML = obj.patientInsuranceId;
            document.getElementById("eligibilityid").value = obj.insuranceResponseId;
            document.getElementById("dateofexpiry").value = obj.dateOfExpiry;
            console.log(obj.isActive);
            if(obj.isActive === "Active"){
                document.getElementById("insuranceidstatus").value = "Active"
            }else{
                document.getElementById("insuranceidstatus").value = "In Active"
            }
        }
    };
    xhttp.send();
}

function getPatientData2(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/PatientRecord/345",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("patientid").innerHTML = obj.patientId;
            document.getElementById("patientname").innerHTML = obj.patientFirstName;
            document.getElementById("age").innerHTML = obj.patientAge;
            document.getElementById("sex").innerHTML = obj.patientGender;
            document.getElementById("emiratesid").innerHTML = obj.patientEmiratesId;
            document.getElementById("insuranceid").innerHTML = obj.patientInsuranceId;
            document.getElementById("contactnumber").innerHTML = obj.patientContactNumber;
            document.getElementById("visittype").innerHTML = obj.patientVisitType;
            document.getElementById("email").innerHTML = obj.patientEmailId;
            document.getElementById("patientnameci").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidci").innerHTML = obj.patientInsuranceId;
            
        }
    };
    xhttp.send();
}

function getData3(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/InsuranceCard/456",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("name").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidpr").innerHTML = obj.patientInsuranceId;
            document.getElementById("eligibilityid").value = obj.insuranceResponseId;
            document.getElementById("dateofexpiry").value = obj.dateOfExpiry;
            console.log(obj.isActive);
            if(obj.isActive === "Active"){
                document.getElementById("insuranceidstatus").value = "Active"
            }else{
                document.getElementById("insuranceidstatus").value = "In Active"
            }
        }
    };
    xhttp.send();
}

function getPatientData3(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/PatientRecord/456",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("patientid").innerHTML = obj.patientId;
            document.getElementById("patientname").innerHTML = obj.patientFirstName;
            document.getElementById("age").innerHTML = obj.patientAge;
            document.getElementById("sex").innerHTML = obj.patientGender;
            document.getElementById("emiratesid").innerHTML = obj.patientEmiratesId;
            document.getElementById("insuranceid").innerHTML = obj.patientInsuranceId;
            document.getElementById("contactnumber").innerHTML = obj.patientContactNumber;
            document.getElementById("visittype").innerHTML = obj.patientVisitType;
            document.getElementById("email").innerHTML = obj.patientEmailId;
            document.getElementById("patientnameci").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidci").innerHTML = obj.patientInsuranceId;
            
        }
    };
    xhttp.send();
}

function getData4(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/InsuranceCard/567",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("name").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidpr").innerHTML = obj.patientInsuranceId;
            document.getElementById("eligibilityid").value = obj.insuranceResponseId;
            document.getElementById("dateofexpiry").value = obj.dateOfExpiry;
            console.log(obj.isActive);
            if(obj.isActive === "Active"){
                document.getElementById("insuranceidstatus").value = "Active"
            }else{
                document.getElementById("insuranceidstatus").value = "In Active"
            }
        }
    };
    xhttp.send();
}

function getPatientData4(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/PatientRecord/567",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("patientid").innerHTML = obj.patientId;
            document.getElementById("patientname").innerHTML = obj.patientFirstName;
            document.getElementById("age").innerHTML = obj.patientAge;
            document.getElementById("sex").innerHTML = obj.patientGender;
            document.getElementById("emiratesid").innerHTML = obj.patientEmiratesId;
            document.getElementById("insuranceid").innerHTML = obj.patientInsuranceId;
            document.getElementById("contactnumber").innerHTML = obj.patientContactNumber;
            document.getElementById("visittype").innerHTML = obj.patientVisitType;
            document.getElementById("email").innerHTML = obj.patientEmailId;
            document.getElementById("patientnameci").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidci").innerHTML = obj.patientInsuranceId;
            
        }
    };
    xhttp.send();
}

function getData5(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/InsuranceCard/678",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("name").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidpr").innerHTML = obj.patientInsuranceId;
            document.getElementById("eligibilityid").value = obj.insuranceResponseId;
            document.getElementById("dateofexpiry").value = obj.dateOfExpiry;
            console.log(obj.isActive);
            if(obj.isActive === "Active"){
                document.getElementById("insuranceidstatus").value = "Active"
            }else{
                document.getElementById("insuranceidstatus").value = "In Active"
            }
        }
    };
    xhttp.send();
}

function getPatientData5(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/PatientRecord/678",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("patientid").innerHTML = obj.patientId;
            document.getElementById("patientname").innerHTML = obj.patientFirstName;
            document.getElementById("age").innerHTML = obj.patientAge;
            document.getElementById("sex").innerHTML = obj.patientGender;
            document.getElementById("emiratesid").innerHTML = obj.patientEmiratesId;
            document.getElementById("insuranceid").innerHTML = obj.patientInsuranceId;
            document.getElementById("contactnumber").innerHTML = obj.patientContactNumber;
            document.getElementById("visittype").innerHTML = obj.patientVisitType;
            document.getElementById("email").innerHTML = obj.patientEmailId;
            document.getElementById("patientnameci").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidci").innerHTML = obj.patientInsuranceId;
            
        }
    };
    xhttp.send();
}

function getData6(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/InsuranceCard/678",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("name").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidpr").innerHTML = obj.patientInsuranceId;
            document.getElementById("eligibilityid").value = obj.insuranceResponseId;
            document.getElementById("dateofexpiry").value = obj.dateOfExpiry;
            console.log(obj.isActive);
            if(obj.isActive === "Active"){
                document.getElementById("insuranceidstatus").value = "Active"
            }else{
                document.getElementById("insuranceidstatus").value = "In Active"
            }
        }
    };
    xhttp.send();
}

function getPatientData6(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/PatientRecord/678",false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("patientid").innerHTML = obj.patientId;
            document.getElementById("patientname").innerHTML = obj.patientFirstName;
            document.getElementById("age").innerHTML = obj.patientAge;
            document.getElementById("sex").innerHTML = obj.patientGender;
            document.getElementById("emiratesid").innerHTML = obj.patientEmiratesId;
            document.getElementById("insuranceid").innerHTML = obj.patientInsuranceId;
            document.getElementById("contactnumber").innerHTML = obj.patientContactNumber;
            document.getElementById("visittype").innerHTML = obj.patientVisitType;
            document.getElementById("email").innerHTML = obj.patientEmailId;
            document.getElementById("patientnameci").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidci").innerHTML = obj.patientInsuranceId;
            
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
    xhttp.open("GET", "http://localhost:3000/api/ClinicalAsset/ZZ123", false);
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

function sendDataPA(){
    var patientid = document.getElementById("patientid").value;
    queryBuilder = "?param1" + patientid; 
    window.location.href = "physician-prior-authorization.html" + queryBuilder;
}

function sendDataHome(){
    var patientid = document.getElementById("patientid").value;
    queryBuilder = "?param1" + patientid;
    window.location.href = "home.html" + queryBuilder;
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


