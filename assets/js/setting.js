/*
    Public variable area
    FHIRURL: FHIR Server URL
    FHIRResponseType: Requested data type returned by the server
*/
var FHIRURL=  'https://hapi.fhir.org/baseR4/';	//default FHIR Server API
var ResponseType= 'json';			//default response 

/*
    VClaim variable area
*/
var VCLAIM_API_URL= 'https://apijkn-dev.bpjs-kesehatan.go.id/vclaim-rest-dev'
var cons_id= "2907";
var user_key= "10cda652f3c52080ecb7e352a8a0cbd8";
var secret_key= "2wAB5210A1";
var signature= "";

//Page initialization: Show FHIR Resource Type drop down list
$(document).ready(function(){
	var temp= "";
	var resourceType= [ '... Other Resources', 'Endpoint', 'Immunization', 'Group', 'Menu',
						'Library', 'List', 'Patient', 'Appointment', 'Bundle',
						'Composition', 'Consent', 'Person', 'Organization', 'DiagnosticReport',
						'DocumentReference', 'Condition', 'Observation', 'Encounter', 'PlanDefinition',
						'Practitioner', 'PractitionerRole', 'Location', 'Schedule', 'ServiceRequest',
						'Slot', 'ImagingStudy', 'MessageHeader', 'Questionnaire', 'QuestionnaireResponse', 'RelatedPerson'];		
	resourceType.sort();
	
	//Resoure type code based on sequence number
	var resourceTypeCode= 0;
	for(const res of resourceType){
		temp+= "<option value='" + resourceTypeCode + "'>" + res + "</option>";
		resourceTypeCode++;
	}
	
	//document.getElementById("resourceType").innerHTML= temp;
	//document.getElementById("FHIRServer").value= FHIRURL;
});