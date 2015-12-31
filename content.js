var content_db = 
{
    "ABOUT": {
        "content": "Dion Low grew up in Valparaiso, Indiana where in 2012, he graduated Valparaiso High School(VHS) with an IB Diploma at the top of his class. Currently he is finishing his undergraduate degree in Computer Science (6-3) at Massachusetts Institute of Technology. He is an All-American Swimmer."
    },
    
    "HACKER":{
        "content": "I am working on an IOS app in the transportation industry with a non-technical partner. "
    },
    
    "HIPSTER":{
        "content": "I am prototyping websites for personal use, the Korean Student Association, and Phi Beta Epsilon (pbe.mit.edu).  "
    },
    
    "HUSTLER":{
        "content": "I am leading two clubs: MIT Poker Club (Co-Founder, President) and MIT Korean Student Association (President)"
    }
    
};

function isString(o) {
    return typeof o == "string" || (typeof o == "object" && o.constructor === String);
}

// fetches the content of a specific section. 
function getContent(section){
    if (isString(section)){
        section = section.toUpperCase();
    
        if (section === "ABOUT"){
            return content_db.ABOUT.content;
        } else if (section === "HACKER"){
            return content_db.HACKER.content;
        } else if (section === "HIPSTER"){
            return content_db.HIPSTER.content;
        } else if (section === "HUSTLER"){
            return content_db.HUSTLER.content;
        } else {
            return "ERROR-NO-KEY" + section;
        }
    } else {
        return "INPUT-NOT-STRING"; 
    }
}

console.log("js file loaded");

function auxClick(string){
    $("#header").fadeOut(function(){
        $(this).text(string).fadeIn();
    });
    
    $("#content-text").fadeOut(function(){
        $(this).text(getContent(string)).fadeIn();
    });
    
};

$("#go-hacker").click(function(){
    var HACKER = "HACKER";
    auxClick(HACKER);
});

$("#go-hipster").click(function(){
    var HIPSTER = "HIPSTER";
    auxClick(HIPSTER);
});

$("#go-hustler").click(function(){
    var HUSTLER = "HUSTLER";
    auxClick(HUSTLER);
});

