console.log(document.location);

console.log(document.location.search);

const querystring = document.location.search;

const params = new URLSearchParams(querystring);
console.log(params);
console.log(params.get("shool"));

const mySchoolParam = params.get("school");


//  I want to check that I have a param called school

if (params.has("school")){
    console.log("I have the param");
}
// console log I have the param
else if (params.get("school") === "noroff") {
    console.log("okay the param is noroff")
}
// I want to check that this param is equal to noroff
// okay the param is Noroff
else {
    document.location.href = "second.html";
}

// else redirect to another page