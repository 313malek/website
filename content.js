var content_db = 
{
    "ABOUT": {
        "content": "Content about ABOUT..."
    },
    
    "HACKER":{
        "content": "Content about HACKER..."
    },
    
    "HIPSTER":{
        "content": "Content about HIPSTER..."
    },
    
    "HUSTLER":{
        "content": "Content about HUSTLER..."
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

