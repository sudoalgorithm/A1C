window.onload = function(){
    getInsuranceCardInfromation();
    getClinicalInformation();
    getResponseInformation();
}

function sendClaimsInfromation(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/api/IssueClaimsInformation", true);
    xhttp.setRequestHeader("Content-type","application/json");
    console.log(document.getElementById("diagnosiscode").value); 
    xhttp.send(JSON.stringify({
            "$class": "org.acme.health.IssueClaimsInformation",
            "claims": {
                "$class": "org.acme.health.ClaimsInformation",
                "claimsRequestId": document.getElementById("claimsrequestid").value,
                "diagnosisCode": document.getElementById("diagnosisCode").value,
                "loincCode": document.getElementById("loinccode").value,
                "cptCode": document.getElementById("cptcode").value,
                "amount": document.getElementById("amount").value
            }
            }));
    alert("Send Data To Insurance Company");        
}
function getInsuranceCardInfromation(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost:3000/api/CoverageDetails/coverage", false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("patientname").innerHTML = obj.patientFirstName+" "+obj.patientLastName;
            document.getElementById("insuranceid").innerHTML = obj.patientInsuranceId;
            if(obj.isCovered === true){
                document.getElementById("insuranceidstatus").innerHTML = "Covered";
            }else{
                document.getElementById("insuranceidstatus").innerHTML = "UnCovered";
            }
            
            document.getElementById("insuranceresponseid").innerHTML = "coverage";
            document.getElementById("date").innerHTML = obj.date;
        }
    };
    xhttp.send();
}
function getClinicalInformation(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost:3000/api/ClinicalAsset/clinical", false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("hospitalid").innerHTML = obj.hospitalId;
            document.getElementById("hospitalname").innerHTML = obj.hospitalName;
            document.getElementById("physicianname").innerHTML = "clinical";
            document.getElementById("clinicalrequestdD").innerHTML = "";
            document.getElementById("dateofadmission").innerHTML = obj.dateOfAdmission;
            document.getElementById("diagnosiscode").innerHTML = obj.diagnosisCode;
            document.getElementById("diagnosisdescription").innerHTML = obj.diagnosisDescription;
            document.getElementById("lengthofstay").innerHTML = obj.lengthOfStay;

        }
    };
    xhttp.send();
}

function getResponseInformation(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost:3000/api/ClinicalAssetResponse/response", false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("clinicalresponseid").innerHTML = "response";
            if(obj.isApproved === true){
                document.getElementById("clinicalrequeststatus").innerHTML = "Approved";
            }else{
                document.getElementById("clinicalrequeststatus").innerHTML = "Not Approved";
            }
            

        }
    };
    xhttp.send();
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
    document.getElementById("contactnumber").innerHTML = queries[6].replace("param6","");
    document.getElementById("visittype").innerHTML = "Inpatient"
    document.getElementById("email").innerHTML = queries[7].replace("param7","");
}