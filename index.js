let gradeBtn = document.getElementById('grade')
let gradeTxt = document.getElementById("txt1");

let speedBtn = document.getElementById('merit')
let speedTxt = document.getElementById("txt2");



let incomeBtn = document.getElementById('income');
let incomeTxt = document.getElementById("txt3");



//TODO: Challenge 1: Student Grade Generator (Toy Problem)
//Todo: prompts the user to input student marks. 
//todo: The input should be between 0 and 100. 
//todo: Then output the correct grade: 
//todo: A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
function gradeGenerator(input){
    let grade;
    let marks = input;
    console.log(marks);
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

    }else{return ("Invalid marks!")}

    return grade;
}

gradeBtn.addEventListener('mousedown', function (){
    let marksValue = parseInt(document.getElementById("marks").value);
    if (marksValue < 0)
        alert("Check marks!");    
    gradeTxt.textContent = `Grade: ${gradeGenerator(marksValue)}`;
    console.log(marksValue, typeof marksValue);    
})


//TODO: Challenge 2: Speed Detector (Toy Problem)
//Todo: program that takes as input the speed of a car e.g 80.
//todo: If speed < 70, print “Ok”. 
//todo: Otherwise, for every 5 km/s above limit (70), 
//todo: it should give the driver one demerit point 
//todo: print the total number of demerit points.
function merit(input){
    let speed = input;
    let above;
    if (speed < 70){
        return("Ok");
    }else{
        above = Math.floor((speed - 70)/5)
        if (above < 13){
            return(`Points: ${above}`);
        }
        else{return ("License suspended")}
    }
}

speedBtn.addEventListener('mousedown', function(){
    let speedValue = parseInt(document.getElementById('speed').value);
    if (speedValue < 0){
        speedTxt.textContent = "Invalid speed!"
        alert("Check speed value!");
    }
    else{
        speedTxt.textContent = `Demerits: ${merit(speedValue)}`;
    }    
    
})


//TODO: Challenge 3: Net Salary Calculator (Toy Problem)
//Todo: program that calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
//todo: Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

//todo: salary - exempts = Taxable - deductions = to be taxed * taxable bracket%

let relief,health,netSalary;

function taxable(disability, benefits, salary, frequency){
    let compenstation, exempt, taxableSalary;

    if (disability == "Yes"){
        if (frequency == "Monthly"){
            compenstation = 150000;
            if (salary > compenstation){                
                exempt = compenstation + benefits;
                console.log(exempt)
                taxableSalary = salary - exempt;
                return taxableSalary;
            }
            else{
                taxableSalary = 0
                return taxableSalary}
        }
        else if (frequency == "Annually"){
            compenstation = 1800000;
            if (salary > compenstation){
                exempt = compenstation + benefits;
                taxableSalary = salary - exempt;
                return taxableSalary;
            }else{
                taxableSalary = 0
                return taxableSalary}
        }
    }
    else if(disability == "No"){exempt = benefits;
        taxableSalary = salary - exempt;
        return taxableSalary;
    }
    
}


function nhif(salary){
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

function deduction(frequency){
    if (frequency == "Monthly"){
        relief = 2400;
        return (relief+nhif())

    }
    else if (frequency == "Annually"){
        relief = 28,800;
        return (relief+nhif())
    }

}


function paye(frequency, salary, taxable, deduction){
    let taxed;
    let rate;
    if(taxable <= 0){
        taxed = 0
        return taxed;
    }
    else{
        taxed = taxable - deduction
        if(frequency == "Annually"){
            if (salary < 288001){
                rate = 0.1;
            }else if(salary === 288001 || salary < 388001){
                rate = 0.25;
            }else{
                rate = 0.3;
            }
        }else if(frequency == "Monthly"){
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

function netIncome(salary, paye){
    netSalary = salary - paye;
    return netSalary;
}

incomeBtn.addEventListener('mousedown', function(){
    let salaryValue = document.getElementById('salary').value;
    if (salaryValue < 0){
        incomeTxt.textContent = "Invalid input!"
        alert("Check salary!")
    }
    else{
        let benefitsValue = document.getElementById('benefits').value;
        let freqValue = document.getElementById('frequency').value;
        let disValsValue = document.getElementById('disability').value;

        let salary = parseInt(salaryValue);
        let benefit = parseInt(benefitsValue);
        let disabilities = disValsValue
        let frequency = freqValue

        let taxables = taxable(disabilities, benefit, salary, frequency);    
        let health = nhif(salary);
        console.log(taxables)

        let deductions = deduction(frequency);
        let payeGov = paye(frequency, salary, taxables, deductions);
        let netSalary = netIncome(salary, payeGov);
        incomeTxt.textContent = (`Taxable income: ${taxables}    
        \nNHIF: ${health}   
        \nDeductions: ${deductions}    
        \nPaye: ${payeGov}   
        \nNet Salary: ${netSalary}`);
    }
    
})


