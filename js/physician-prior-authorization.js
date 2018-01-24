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


function getData(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/InsuranceCard/"+queries[0].replace("param1",""),false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("patientnameicf").innerHTML = obj.patientFirstName;
            document.getElementById("insuranceidicf").innerHTML = obj.patientInsuranceId;
            document.getElementById("insuranceResponse").value = obj.insuranceResponseId;
            document.getElementById("date").value = obj.dateOfExpiry;
            console.log(obj.isActive);
            if(obj.isActive === "Active"){
                document.getElementById("insuranceStatus").value = "Active"
            }else{
                document.getElementById("insuranceStatus").value = "In Active"
            }
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
        document.getElementById("hospitalname").value = "Test Hospital";
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
        document.getElementById("hospitalname").value = "Block Chain Hospital";
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
        document.getElementById("hospitalname").value = "Healthy Hospital";
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
        document.getElementById("hospitalname").value = "Multy Hospital";
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
        document.getElementById("hospitalname").value = "Caring Hospital";
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
        document.getElementById("hospitalname").value = "Welfare Hospital";
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

