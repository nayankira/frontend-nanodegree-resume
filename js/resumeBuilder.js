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
	"location" : "Melbourne"
};
var bio = {
	"name" : "Ryan Na",
	"role" : "Web Developer",
	"age" : 32,
	"contact_info" : contactInfo,
	"picture_URL" : "images/me.jpg",
	"welcome message" : "Hello", 
	"skills" : skills,
	display: function(){
		theHeadRole = HTMLheaderRole
		.replace("%data%", bio.role);		
		console.log(theHeadRole);
		// $("#header").append(HTMLheaderName.replace("%data%", bio.name));
		$(HTMLheaderName
			.replace("%data%", bio.name))
		.insertBefore("#topContacts");
		// $("#header").append(theHeadRole);
		$(theHeadRole).insertBefore("#topContacts");
		$("#header").append(HTMLbioPic
			.replace("%data%", bio.picture_URL));
		if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		console.log(HTMLskillsStart);
		theSkill = HTMLskills
		.replace("%data%", bio.skills[0]);
		//console.log(theSkill);
		$("#skills").append(theSkill);
		theSkill = HTMLskills
		.replace("%data%", bio.skills[1]);
		//console.log(theSkill);
		$("#skills").append(theSkill);
		theSkill = HTMLskills
		.replace("%data%", bio.skills[2]);
		//console.log(theSkill);
		$("#skills").append(theSkill);
		theSkill = HTMLskills
		.replace("%data%", bio.skills[3]);
		//console.log(theSkill);
		$("#skills").append(theSkill);

		//display the contact information 
		// var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
		// var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
		// var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
		// var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
		// var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
		// var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
		// var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

		for (key in bio.contact_info){
			$("#topContacts")
			.append(HTMLcontactGeneric
				.replace("%contact%",key)
				.replace("%data%",bio.contact_info[key]));
		}
		

	}
	}
};

var job = {};
job.location = "Melbourne";
job.employer = "Ofoghi";
job.dates = "April 5,2016";
job.title = "web develper";
job.description = "fdsffasdf";

var jobs = [job];
//var education = {};
//education["lash school"] = "the University of Melbourne";
//education["years"] = "2013";
//education["city"] = "Melbourne";

var work = {
	"jobs":jobs,
	display:function(){
		for (job in work.jobs) {
		var theJob = work.jobs[job];
		$("#workExperience").append(HTMLworkStart);
		console.log(HTMLworkStart);
		var theEmployer = HTMLworkEmployer
		.replace("%data%",theJob.employer);
		console.log(theEmployer);
		var theTitle = HTMLworkTitle
		.replace("%data%",theJob.title);
		console.log(theTitle);
		var theloca = HTMLworkLocation
		.replace("%data%",theJob.location);
		var theDate = HTMLworkDates
		.replace("%data%", theJob.dates);
		var thedesc = HTMLworkDescription
		.replace("%data%", theJob.description);
		var theEmployerTitle = theEmployer + theTitle;
		$(".work-entry:last").append(theEmployerTitle);
		$(".work-entry:last").append(theloca);
		$(".work-entry:last").append(theDate);
		$(".work-entry:last").append(thedesc);
    }		
	}
};

projects = {
	projects : [
	{
		"title" : "web project 1",
		"date" : "April 24, 2014",
		"description" : "This is a udacity project",
		"images" : "images/udacity-infographic-blog.jpg"
	}
	],

	display : function() {
	// var HTMLprojectStart = '<div class="project-entry"></div>';
	// var HTMLprojectTitle = '<a href="#">%data%</a>';
	// var HTMLprojectDates = '<div class="date-text">%data%</div>';
	// var HTMLprojectDescription = '<p><br>%data%</p>';
	// var HTMLprojectImage = '<img src="%data%">';
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		theProject = projects.projects[project];
		$(".project-entry").append(HTMLprojectTitle
			.replace("%data%",theProject.title));
		$(".project-entry").append(HTMLprojectDates
			.replace("%data%",theProject.date));
		$(".project-entry").append(HTMLprojectDescription
			.replace("%data%",theProject.description));
		$(".project-entry").append(HTMLprojectImage
			.replace("%data%",theProject.images));
		
		console.log(HTMLprojectTitle
			.replace("%data%",theProject.title));
	}
}
};

var education = {};
education.schools = [
{
	"name" :"Beijing University",
	"city" :"beijing",
	"major" :"Biotechnologies",
	"minors" :"",
	"graduation year" :"2013",
	"degree" : "bachelor",
	"date" : "2009",
	"url" : ""
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
}
];

education.onlineCourses = [{
	"title":"Front-End Developer",
	"school":"Udacity",
	"dates": "2015",
	"url":"https://www.udacity.com/"
}];


education.display = function(){
	//schools
	$("#education").append(HTMLschoolStart);
	for (school in education.schools) {
		var theSchool = education.schools[school];
		var theName = HTMLschoolName
		.replace("%data%",theSchool.name)
		.replace("#",theSchool.url);
		var theDegree = HTMLschoolDegree
		.replace("%data%",theSchool.degree);
		var theDate = HTMLschoolDates
		.replace("%data%",theSchool.date);
		var theLocation = HTMLschoolLocation
		.replace("%data%",theSchool.city);
		var theMajor = HTMLschoolMajor
		.replace("%data%",theSchool.major);

		$(".education-entry").append(theName);
		$(".education-entry").append(theDegree);
		$(".education-entry").append(theDate);
		$(".education-entry").append(theLocation);
		$(".education-entry").append(theMajor);
	}
	//online courses
	$("#education").append(HTMLonlineClasses);
	$("#education").append('<div class="education-entry"
	 id="online-entry"></div>');
	for (course in education.onlineCourses){
		var theCourse = education.onlineCourses[course];
		var theTitle = HTMLonlineTitle
		.replace("%data%",theCourse.title)
		.replace("#",theCourse.url);
		var theSchool = HTMLonlineSchool
		.replace("%data%",theCourse.school);
		var theDate = HTMLonlineDates
		.replace("%data%",theCourse.dates);
		var theurl = HTMLonlineURL
		.replace("%data%",theCourse.url);
		
		$("#online-entry").append(theTitle);
		$("#online-entry").append(theSchool);
		$("#online-entry").append(theDate);
		$("#online-entry").append(theurl);

	}
}

// function displayWork() {	
// 	for (work in works) {
// 	var theJob = works[work];
// 	$("#workExperience").append(HTMLworkStart);
// 	console.log(HTMLworkStart);
// 	var theEmployer = HTMLworkEmployer.replace("%data%",theJob.employer);
// 	console.log(theEmployer);
// 	var theTitle = HTMLworkTitle.replace("%data%",theJob.title);
// 	console.log(theTitle);
// 	var theloca = HTMLworkLocation.replace("%data%",theJob.Job_postion);
// 	var theDate = HTMLworkDates.replace("%data%", theJob.date);
// 	var thedesc = HTMLworkDescription.replace("%data%", theJob.description);
// 	var theEmployerTitle = theEmployer + theTitle;
// 	$(".work-entry:last").append(theEmployerTitle);
// 	$(".work-entry:last").append(theloca);
// 	$(".work-entry:last").append(theDate);
// 	$(".work-entry:last").append(thedesc);
//     }
// }

// displayWork();

$("#main").append(internationalizeButton);

function displayProjects() {
	$("#projects").append(HTMLprojectStart);
	for (project in projects){
		theProject = projects[project];
		$("#projects").append(HTMLprojectTitle
			.replace("%data%",theProject.title));
		$("#projects").append(HTMLprojectDates
			.replace("%data%",theProject.date));
		$("#projects").append(HTMLprojectDescription
			.replace("%data%",theProject.description));
		$("#projects").append(HTMLprojectImage
			.replace("%data%",theProject.images));
		console.log(HTMLprojectTitle
			.replace("%data%",theProject.title));
	}	
}

function displayMap() {
	$("#mapDiv").append(googleMap);
}


bio.display();
work.display();
projects.display();
education.display();
displayMap();
//$("#main").append(workExper["employer"]);