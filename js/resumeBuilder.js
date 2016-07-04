/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    "name": "Sangjin Kim",
    "role": "Professor",
    "contacts": {
        "mobile": "+82-01-6450-4378",
        "email": "sangjin@koreatech.ac.kr",
        "github": "kimjohn89",
        "twitter": "kimjohn89",
        "location": "Hwasung, Gyeonggi, Rep. of Korea"
    },
    "welcomeMessage": "Welcome to My Homepage!!!",
    "skills": ["C","C++","Java","Python","html5","css3","javascript"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLmobile.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLmobile.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLmobile.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);


var formattedPic = HTMLbioPic.replace("%data%", "images/free1.jpeg");
$("#header").append(formattedPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length>0){
    $("#header").append(HTMLskillsStart);
    for(i in bio.skills){
        var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}

var work = {
    "jobs": [
        {
            "employer": "KoreaTech",
            "title": "Professor",
            "location": "Cheonan",
            "dates": 13,
            "description": "Teachs at School of Computer Science and Engineering"
        }
    ]
};


function displayWork(){
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedJob = formattedEmployer+formattedTitle;
        $(".work-entry:last").append(formattedJob);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

var education = {
    "schools": [
        {
        "name": "Hanyang Univ.",
        "location": "Ansan",
        "degree": "Ph.D.",
        "dates": "2003-08",
        "major": "ComSci"
        },
        {
        "name": "Hanyang Univ.",
        "location": "Ansan",
        "degree": "Master",
        "dates": "1997-02",
        "major": "ComSci"
        }
    ],
    "onlineCourses": [
        {
            "title": "javascript",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://classroom.udacity.com/courses/ud804/"

        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Resume Project",
            "dates": 2016,
            "description": "Web Project using Javascript",
            "images": ["images/free1.jpeg", "images/free2.jpeg", "images/free3.jpeg"]
        }
    ]
};

projects.display = function(){
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDescription);
        for(image in projects.projects[project].images){
            var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
}

$("#main").append(internationalizeButton);

function inName(name){
    var names = name.trim().split(" ");
    var internationalName = names[0].charAt(0).toUpperCase()
        +names[0].slice(1).toLowerCase()+" "
        +names[1].toUpperCase();
    return internationalName;
}

projects.display();

$("#mapDiv").append(googleMap);
