var querryString = decodeURIComponent(window.location.search);
querryString = querryString.substring(1);
var queries = querryString.split("&");
var getElementById = "";

function getData(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/InsuranceCard/"+queries[0].replace("param1",""),false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("patientnameicf").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidicf").innerHTML = obj.patientInsuranceId;
            document.getElementById("insuranceStatus").innerHTML = obj.insuranceResponseId;
            document.getElementById("date").innerHTML = obj.dateOfExpiry;
            console.log(obj.isActive);
            if(obj.isActive === true){
                document.getElementById("insuranceResponse").innerHTML = "Active"
            }else{
                document.getElementById("insuranceResponse").innerHTML = "In Active"
            }
        }
    };
    xhttp.send();    
}

function getPatientData(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/PatientRecord/"+queries[0].replace("param1",""),false);
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
            getElementById = obj.patientId;
            
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

function autoFile(){
    if(document.getElementById("hospitalid").value === "ZZ123"){
        document.getElementById("hospitalname").value = "Kuwait Hospital";
        document.getElementById("patientnamecf").value = "Aisha Mohammed";
        document.getElementById("insuranceidcf").value = "AA-001-900";
        document.getElementById("physicianname").value = "Dr Hananah";
        document.getElementById("clinicalrequestid").value = "";
        document.getElementById("dateofadmission").value = "01/02/2018";
        document.getElementById("diagnosiscode").value = "E11.6";
        document.getElementById("diagnosisdetail").value = "Type 2 diabetes mellitus with other speci- fied complications";
        document.getElementById("lengthofstay").value = "3";
        document.getElementById("treatmentamount").value = "25000";
    }
    if(document.getElementById("hospitalid").value === "ZZ124"){
        document.getElementById("hospitalname").value = "Saqar Hospital";
        document.getElementById("patientnamecf").value = "Aamina Ali";
        document.getElementById("insuranceidcf").value = "BB-007-600";
        document.getElementById("physicianname").value = "Dr Alex";
        document.getElementById("clinicalrequestid").value = "";
        document.getElementById("dateofadmission").value = "02/02/2018";
        document.getElementById("diagnosiscode").value = "E11.3219";
        document.getElementById("diagnosisdetail").value = "Type 2 diabetes mellitus with mild nonproliferative diabetic retinopathy with macular edema";
        document.getElementById("lengthofstay").value = "3";
        document.getElementById("treatmentamount").value = "30000";
    }
    if(document.getElementById("hospitalid").value === "ZZ125"){
        document.getElementById("hospitalname").value = "Al Fujairah Hospital";
        document.getElementById("patientname").value = "AbdulRazzak Ahmed";
        document.getElementById("insuranceid").value = "CC-002-400";
        document.getElementById("physicianname").value = "Dr Kunal";
        document.getElementById("clinicalrequestid").value = "";
        document.getElementById("dateofadmission").value = "03/02/2018";
        document.getElementById("diagnosiscode").value = "L30.8";
        document.getElementById("diagnosisdetail").value = "Dermatitis, unspecified";
        document.getElementById("lengthofstay").value = "3";
        document.getElementById("treatmentamount").value = "15000";
    }
    if(document.getElementById("hospitalid").value === "ZZ126"){
        document.getElementById("hospitalname").value = "Umm Al Quwain Hospital";
        document.getElementById("patientname").value = "Hanifa Shaheen";
        document.getElementById("insuranceid").value = "AA-001-950";
        document.getElementById("physicianname").value = "Dr Hananah";
        document.getElementById("clinicalrequestid").value = "";
        document.getElementById("dateofadmission").value = "04/02/2018";
        document.getElementById("diagnosiscode").value = "E11.6";
        document.getElementById("diagnosisdetail").value = "Type 2 diabetes mellitus with other speci- fied complications";
        document.getElementById("lengthofstay").value = "3";
        document.getElementById("treatmentamount").value = "25000";
    }
    if(document.getElementById("hospitalid").value === "ZZ127"){
        document.getElementById("hospitalname").value = "Kalba Hospital";
        document.getElementById("patientname").value = "Hakeem Hassan";
        document.getElementById("insuranceid").value = "BB-007-650";
        document.getElementById("physicianname").value = "Dr Alex";
        document.getElementById("clinicalrequestid").value = "";
        document.getElementById("dateofadmission").value = "05/02/2018";
        document.getElementById("diagnosiscode").value = "E11.3219";
        document.getElementById("diagnosisdetail").value = "Type 2 diabetes mellitus with mild nonproliferative diabetic retinopathy with macular edema";
        document.getElementById("lengthofstay").value = "3";
        document.getElementById("treatmentamount").value = "30000";
    }
    if(document.getElementById("hospitalid").value === "ZZ128"){
        document.getElementById("hospitalname").value = "Dibba Hospital";
        document.getElementById("patientname").value = "Hesham Osama";
        document.getElementById("insuranceid").value = "CC-002-450";
        document.getElementById("physicianname").value = "Dr Kunal";
        document.getElementById("clinicalrequestid").value = "";
        document.getElementById("dateofadmission").value = "06/02/2018";
        document.getElementById("diagnosiscode").value = "L30.8";
        document.getElementById("diagnosisdetail").value = "Dermatitis, unspecified";
        document.getElementById("lengthofstay").value = "3";
        document.getElementById("treatmentamount").value = "15000";
    }
    
}

function sendDataHome(){
    queryBuilder = "?param1" + getElementById; 
    window.location.href = "home.html" + queryBuilder;
}

function sendDataIC(){
    queryBuilder = "?param1" + getElementById;
    window.location.href = "insurance-company.html" + queryBuilder;
}

function sendDataHCT(){
    queryBuilder = "?param1" + getElementById;
    window.location.href = "hospital-claims-teams.html" + queryBuilder;
}

function sendDataP(){
    queryBuilder = "?param1" + getElementById;
    window.location.href = "patient.html" + queryBuilder;
}

