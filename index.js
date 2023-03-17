//document.get.value


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

//todo: salary - exempts = Taxable - deductions = to be taxed * taxable bracket%
let frequency = prompt("Is salary monthly/annualy: m or a")
let salary = parseInt(prompt("Input salary: "));
let benefits = parseInt(prompt("Input benefits: "));
let disability = prompt("Any disabilty: y/n?")
let relief,health,netSalary;

function taxable(){
    let compenstation, exempt, taxableSalary;

    if (disability == "y"){
        if (frequency == "m"){
            compenstation = 150000;
            if (compenstation < salary){                
                exempt = compenstation + benefits;
            }else{return (0)}
        }
        else if (frequency == "a"){
            compenstation = 1800000;
            if (compenstation < salary){
                exempt = compenstation + benefits;
            }else{return (0)}
        }
    }
    else if(disability == "n"){
        exempt = benefits;
    }
   
    taxableSalary = salary - exempt;
    return taxableSalary;
}


function nhif(){
    switch(true){
        case (salary < 6000):
            health = 150;
            break;
        case (salary <= 7999):
            health = 300;
            break;
        case (salary <= 11999):
            health = 400;
            break;
        case (salary <= 14999):
            health = 500;
            break;
        case (salary <= 19999):
            health = 600;
            break;
        case (salary <= 24999):
            health = 750;
            break;
        case (salary <= 29999):
            health = 850;
            break;
        case (salary <= 34999):
            health = 950;
            break;
        case (salary <= 44999):
            health = 1000;
            break;
        case (salary <= 49999):
            health = 1100;
            break;
        case (salary <= 59999):
            health = 1200;
            break;
        case (salary <= 69999):
            health = 1300;
            break;
        case (salary <= 79999):
            health = 1400;
            break;
        case (salary <= 89999):
            health = 1500;
            break;
        case (salary <= 99999):
            health = 1600;
            break;
        default:
            health = 1700;
    }
    return health;
}

function deduction(grossSalary){
    if (frequency == "m"){
        relief = 2400;
        return (relief+nhif())

    }
    else if (frequency == "a"){
        relief = 28,800;
        return (relief+nhif())
    }

}


function paye(){
    let taxed = taxable() - deduction()
    let rate;
    if(taxable()===0){
        return 0;
    }
    else{
        taxed = taxable() - deduction()
        if(frequency == "a"){
            if (salary < 288001){
                rate = 0.1;
            }else if(salary === 288001 || salary < 388001){
                rate = 0.25;
            }else{
                rate = 0.3;
            }
        }else if(frequency == "m"){
            if (salary < 24001){
                rate = 0.1;
            }else if(salary === 24001 || salary <32334){
                rate = 0.25;
            }else{
                rate = 0.3;
            }
        }
        taxed = Math.round(taxed*rate);
        return taxed;
    }
}

function netIncome(){
    netSalary = salary - (paye());
    return netSalary;
}

console.log(
    taxable(),
    nhif(),
    deduction(),
    paye(),
    netIncome()
);
