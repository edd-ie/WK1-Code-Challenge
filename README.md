# WK1-Code-Challenge
A multifunction project used to solve different asked prompts

## Table of Contents
1. Grade calculator
2. Speed Radar Detection System
3. Net Income Calculator


## Grade Calculator
This JS script prompts the user to enter their marks and calculates their grade based on a switch statement in ```gradeGenerator(input)```.

### Usage
The initial value of the variable grade is undefined.
The user is prompted to input their marks.
If the user inputs a number between 0 and 100 (inclusive), the program determines their grade based on the following ranges:
* Marks greater than 79 receive an A.
* Marks between 60 and 79 (inclusive) receive a B.
* Marks between 49 and 60 (inclusive) receive a C.
* Marks between 40 and 49 (inclusive) receive a D.
* Marks less than 40 (inclusive) receive an E.
* If the user inputs a number outside of the range 0-100, the program will output 'Invalid marks!'.

The final calculated grade is displayed.


## Speed Radar Detection System
This JavaScript code assists the police radar detection unit to determine if drivers are overspeeding, and the corresponding punishment (if applicable). It accepts user input for speed, and automatically validates it before computing the penalty all compress in ```merit(input)```.

### Usage
To use the program, please follow these instructions:
* Input the speed in m/s where prompted.
* The program will check whether the driver is overspeeding or not
* If the driver is overspeeding, it will display the number of points they have lost on their license
* If the driver has lost more than 12 points, it means the license has suspended



## Net Income Calculator
This code calculates the net income for an employee based on their salary, benefits, and other factors. The program prompts the user to enter the frequency of their salary payment (monthly or annually), the amount of their salary, and any benefits they receive.

### Code Explanation:
### __Prompting User__
The let frequency tab prompts the user to input whether their salary is paid monthly or annually and saves the result.
The let salary tab prompts the user to input their salary amount and saves the result.
The let benefits tab prompts the user to input any benefits they receive and saves the result.
The let disability tab prompts the user if they have any disability and saves the result.
### __Taxable Salary Calculation__
The function ```taxable()``` calculates the taxable salary by subtracting any exempt amounts from the initial salary. This function returns the taxable salary value.
### __National Hospital Insurance Fund (NHIF) Deduction Calculation__
The function ```nhif()``` calculates NHIF deductions based on the salary bracket in which the employee falls. This function returns the NHIF deduction value.
### __Relief Deduction Calculation__
The function ```deductions()``` calculates the deduction amount based on the relief provided by the government. This function returns the relief amount.
### __Pay As You Earn (PAYE) Calculation__
The function ```paye()``` calculates the PAYE amount based on the taxable amount and a set rate that varies with the income bracket. This function returns the PAYE amount.
### __Net Salary Calculation__
The function ```netIncome()``` calculates the net salary by subtracting the PAYE amount from the gross salary. This function returns the net salary amount.
### Conclusion
This code can be used as a starting point for developing a more comprehensive tool for calculating employee net incomes.
