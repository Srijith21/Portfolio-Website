var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
} 
var side = document.getElementById("sidemenu");

function openmenu(){
    side.style.right=0;
}
function closemenu(){
    side.style.right= "-200px";
}


var header = document.getElementById("header");
var about = document.getElementById("about");
var skills = document.getElementById("skills");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");


function brightmode(){
    header.style.backgroundColor='#fff';
    about.style.backgroundColor='#fff';
    skills.style.backgroundColor='#fff';
    projects.style.backgroundColor='#fff';
    contact.style.backgroundColor='#fff';
}
function darkmode(){
    header.style.backgroundColor='#181818';
    about.style.backgroundColor='#181818';
    skills.style.backgroundColor='#181818';
    projects.style.backgroundColor='#181818';
    contact.style.backgroundColor='#181818';
}