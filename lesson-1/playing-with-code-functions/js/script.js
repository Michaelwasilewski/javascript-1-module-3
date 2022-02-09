const showPetName = function (name) {
    console.log("The pet name is : " + name);
}



const showPetNameTwo = (name, age) => 
    console.log("example 2: The pet name is Milo : " + name + "the age is " + age);


showPetName("rhino");
showPetNameTwo("lion", "14");


// concatenation
const name = "Michael";
const age = "27";
console.log("my name is" + " " + name + " " + age)
console.log(`my name is ${name} my age is ${age}`)


const cityName = "Oslo";

function showMeTheCityName () {
    console.log("The city name is: " + cityName);
}
showMeTheCityName();

console.log(cityName);

function isScania() {
    if(cityName === "Oslo") {
        console.log(cityName + " " + "is scandinavian")
    } else {
        console.log("not scandinavian");
    }
}
isScania(cityName);


{
    const name = "Uzo";
    const car = "tesla";
    let someBuildingNumber = 21;
    var someAge = 27;
    console.log(name);
    console.log(car);
}


const myObject = {
    number: 10,
    myFunction: function() {
        console.log(this.number);
    }
}

myObject.myFunction();

const pet = "rhino";

let isDangerous;

if(pet === "rhino") {
    isDangerous = true;
} else {
    isDangerous = false;
}

isDangerous = pet === "rhino" ? true : false;

