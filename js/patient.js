document.body.onload = function(){
    getPatientData();
    getPatientData1();
    getPatientData2();
    getPatientData3();
    getPatientData4();
    getPatientData5();
    getPatientData6();
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
 
            
        }
    };
    xhttp.send();
}
function getPatientData6(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/PatientRecord/789",false);
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
            
        }
    };
    xhttp.send();
}

function getClinicalInformation(){
    var Approved = true;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/ClinicalAsset/ZZ123", false);
    xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var obj = JSON.parse(this.responseText);
                        if(obj.isApproved === Approved){
                            document.getElementById("requeststatus").innerHTML = "Approved.";
                            document.getElementById("reason").innerHTML = "Send detailed clinical info along with the claims.";
                        }else{
                            document.getElementById("requeststatus").innerHTML = "Reject.";
                            document.getElementById("reason").innerHTML = "This treatment is not covered by insured policy.";
                        }
                         
                }
                
    };
    xhttp.send();

}

function getClinicalInformation1(){
    var Approved = true;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/ClinicalAsset/ZZ124", false);
    xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var obj = JSON.parse(this.responseText);
                        if(obj.isApproved === Approved){
                            document.getElementById("requeststatus").innerHTML = "Approved.";                            
                        }else{
                            document.getElementById("requeststatus").innerHTML = "Reject.";

                        }
                }
                
    };
    xhttp.send();

}
function getClinicalInformation2(){
    var Approved = false;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/ClinicalAsset/ZZ125", false);
    xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var obj = JSON.parse(this.responseText);
                        if(obj.isApproved === Approved){
                            document.getElementById("requeststatus").innerHTML = "Approved.";
                        }else{
                            document.getElementById("requeststatus").innerHTML = "Reject.";
                        }
                }
                
    };

    xhttp.send();

}
function getClinicalInformation3(){
    var Approved = true;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/ClinicalAsset/ZZ126", false);
    xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var obj = JSON.parse(this.responseText);
                        if(obj.isApproved === Approved){
                            document.getElementById("requeststatus").innerHTML = "Approved.";
                        }else{
                            document.getElementById("requeststatus").innerHTML = "Reject.";
                        }
                    
                    
                }
                
    };
    xhttp.send();

}
function getClinicalInformation4(){
    var Approved = true;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/ClinicalAsset/ZZ127", false);
    xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var obj = JSON.parse(this.responseText);
                        if(obj.isApproved === Approved){
                            document.getElementById("requeststatus").innerHTML = "Approved.";
                            
                        }else{
                            document.getElementById("requeststatus").innerHTML = "Reject.";
                        }
                        
                    
                    
                }
                
    };
    xhttp.send();

}
function getClinicalInformation5(){
    var Approved = false;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/ClinicalAsset/ZZ128", false);
    xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var obj = JSON.parse(this.responseText);
                        if(obj.isApproved === Approved){
                            document.getElementById("requeststatus").innerHTML = "Approved.";
                        }else{
                            document.getElementById("requeststatus").innerHTML = "Reject.";
                        }

                    }
                
    };
    xhttp.send();

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

function sendDataHome(){
    var patientid = document.getElementById("patientid").value;
    queryBuilder = "?param1" + patientid;
    window.location.href = "home.html" + queryBuilder;
}