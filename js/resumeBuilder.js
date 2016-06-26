/*
This is empty on purpose! Your code to build the resume will go here.
 */


//var awesomeThoughts;
//awesomeThoughts = "I am Ryan and I am AWESOME!";
//console.log(awesomeThoughts);

//var funToughts;
//funToughts = awesomeThoughts.replace("AWESOME","FUN");

 //$("#main").append("Ryan NA");
 /*append in the 'main' section*/
 //$("#main").append(funToughts);

//var name = "Ryan NA";
//var role = "Web Developer";

//var formmattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formmattedName);
//$("#header").prepend(formattedRole);

//console.log(formattedRole);

var skills = ["awesome","programming", "teaching", "JS"];
var contactInfo = {
	"e-mail": "ryanna_unimelb@outlook.com", 
	"mobile" : "0405908701",
	"github" : "nayankira",
	"twitter" : "",
	"location" : "Australia"
};
var bio = {
	"name" : "Ryan Na",
	"role" : "Web Developer",
	"age" : 32,
	"contact info" : contactInfo,
	"picture URL" : "images/me.jpg",
	"welcome message" : "Hello", 
	"skills" : skills
};

var work = {};
work.Job_postion = "Melbourne";
work.employer = "Ofoghi";
work.date = "April 5,2016";
work.cityOfBusiness = "beijing";
work.title = "web develper";
work.description = "fdsffasdf";

var works = [work];
//var education = {};
//education["lash school"] = "the University of Melbourne";
//education["years"] = "2013";
//education["city"] = "Melbourne";
projects = {
	projects : [
	{
		"title" : "web project 1",
		"date" : "April 24, 2014",
		"description" : "This is a udacity project",
		"images" : ""
	}
	],
	display : function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		theProject = projects.projects[project];
		$("#projects").append(HTMLprojectTitle.replace("%data%",theProject.title));
		$("#projects").append(HTMLprojectDates.replace("%data%",theProject.date));
		$("#projects").append(HTMLprojectDescription.replace("%data%",theProject.description));
		$("#projects").append(HTMLprojectImage.replace("%data%",theProject.images));
		console.log(HTMLprojectTitle.replace("%data%",theProject.title));
	}
}
};

education = [
{
	"name" :"Beijing University",
	"city" :"beijing",
	"major" :"Biotechnologies",
	"minors" :"",
	"graduation year" :"2013",
	"degree" : "bachelor",
	"date" : "2009",
	"url" : "",
	"onlineCourses" : [
	{
		"title" : "",
		"school" : "",
		"date" : "",
		"url" : ""
	}
	]
},
{
	"name" : "the University of Melbourne",
	"city" : "Melbourne",
	"major" : "Information Technologies",
	"minors" : "",
	"graduation year" : "2016",
	"degree" : "master",
	"date" : "2013",
	"url" : "",
	"onlineCourses" : ""
}
];

$("#header").append(HTMLheaderName.replace("%data%", bio.name));

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	console.log(HTMLskillsStart);
	theSkill = HTMLskills.replace("%data%", bio.skills[0]);
	//console.log(theSkill);
	$("#skills").append(theSkill);
	theSkill = HTMLskills.replace("%data%", bio.skills[1]);
	//console.log(theSkill);
	$("#skills").append(theSkill);
	theSkill = HTMLskills.replace("%data%", bio.skills[2]);
	//console.log(theSkill);
	$("#skills").append(theSkill);
	theSkill = HTMLskills.replace("%data%", bio.skills[3]);
	//console.log(theSkill);
	$("#skills").append(theSkill);
}

function displayWork() {
	
	for (work in works) {
	var theJob = works[work];
	$("#workExperience").append(HTMLworkStart);
	console.log(HTMLworkStart);
	var theEmployer = HTMLworkEmployer.replace("%data%",theJob.employer);
	console.log(theEmployer);
	var theTitle = HTMLworkTitle.replace("%data%",theJob.title);
	console.log(theTitle);
	var theloca = HTMLworkLocation.replace("%data%",theJob.Job_postion);
	var theDate = HTMLworkDates.replace("%data%", theJob.date);
	var thedesc = HTMLworkDescription.replace("%data%", theJob.description);
	var theEmployerTitle = theEmployer + theTitle;
	$(".work-entry:last").append(theEmployerTitle);
	$(".work-entry:last").append(theloca);
	$(".work-entry:last").append(theDate);
	$(".work-entry:last").append(thedesc);
    }
}

displayWork();

$("#main").append(internationalizeButton);

function displayProjects() {
	for (project in projects){
		$("#projects").append(HTMLprojectStart);
		theProject = projects[project];
		$("#projects").append(HTMLprojectTitle.replace("%data%",theProject.title));
		$("#projects").append(HTMLprojectDates.replace("%data%",theProject.date));
		$("#projects").append(HTMLprojectDescription.replace("%data%",theProject.description));
		$("#projects").append(HTMLprojectImage.replace("%data%",theProject.images));
		console.log(HTMLprojectTitle.replace("%data%",theProject.title));
	}	
}


projects.display();
//$("#main").append(workExper["employer"]);