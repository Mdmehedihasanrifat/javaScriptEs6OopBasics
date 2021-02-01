var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
};


console.log(umbrella.open());








var patient={

    id:10,

    name:"don"

}

console.log(patient.name);

// document.write(patient.name);

//object function

var student={

    id:1,
    name:"rifat",
    display:function (){


        console.log(this.id);
        console.log(this.name);
    }
}

student.display();