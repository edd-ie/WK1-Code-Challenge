//TODO: Challenge 1: Student Grade Generator (Toy Problem)
//Todo: prompts the user to input student marks. 
//todo: The input should be between 0 and 100. 
//todo: Then output the correct grade: 
//todo: A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
let grade;
let marks = prompt("Input marks: ")
if (marks >=0 && marks <= 100){
    switch (true){
        case marks > 79:
            grade = 'A';
            break;
        case marks <= 79 && marks >= 60:
            grade = 'B';
            break;
        case marks < 60 && marks >= 49:
            grade = 'C';
            break;
        case marks < 49 && marks >= 40:
            grade = 'D';
            break;
        default:
            grade = 'E';
    }
    console.log(grade);

}else{console.error("Invalid marks!")}




//TODO: Challenge 2: Speed Detector (Toy Problem)
//Todo: program that takes as input the speed of a car e.g 80.
//todo: If speed < 70, print “Ok”. 
//todo: Otherwise, for every 5 km/s above limit (70), 
//todo: it should give the driver one demerit point 
//todo: print the total number of demerit points.
let speed = prompt("Input speed in m/s: ");
let above;

if (speed < 70){
    console.log("Ok");
}else{
    above = Math.floor((speed - 70)/5)
    if (above < 13){
        console.log(`Points: ${above}`);
    }
    else{console.log("License suspended")}
}


//TODO: Challenge 3: Net Salary Calculator (Toy Problem)
//Todo: program that calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
//todo: Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
let frequency = prompt("Is salary monthly/annualy: m or a")
let salary = prompt("Input salary: ");
let benefits = prompt("Input benefits: ")

function exemptions(grossSalary){

}