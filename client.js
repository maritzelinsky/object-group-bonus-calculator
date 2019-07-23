const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

let ratingBonus = [];
let addBonus = [];

function bonus(employeesArray) {
  for (let i = 0; i < employeesArray.length; i++) {
    if (employeesArray[i].reviewRating == 5) {
      ratingBonus.push(employeesArray[i].annualSalary * .1);
    }
    else if (employeesArray[i].reviewRating == 3) {
      ratingBonus.push(employeesArray[i].annualSalary * .04);
    }
    else if (employeesArray[i].reviewRating == 4) {
      ratingBonus.push(employeesArray[i].annualSalary * .06);
    }
    else {
      ratingBonus.push('No bonus');
    }
  }
}
bonus(employees);
console.log(ratingBonus);

//check for employee Number length with loop 
// if employee number = 4 digits then recieve addtional 5%
// adjust bonus if salary over $65k -1%

function seniority(additionalBonus) {
  for (let i = 0; i < additionalBonus.length; i++) {
    if (additionalBonus[i].employeeNumber.length == 4) {
      addBonus.push(additionalBonus[i].annualSalary * .05);
    }
    else {
      addBonus.push('No bonus');
    }
  }
}
seniority(employees);
console.log(addBonus);

function addingBonus(bonusAdd) {
  
  for (let i = 0; i < bonusAdd.length; i++) {
   
    // dot notation
    console.log(bonusAdd[i].annualSalary);
    // also add the bonus to employee array
    bonusAdd[i].bonuses = ratingBonus[i];
    console.log(bonusAdd[i]);
  }
}
addingBonus(employees);

function addingSeniorityBonus(bonusAddAdditional) {

  for (let i = 0; i < bonusAddAdditional.length; i++) {

    // dot notation
    console.log(bonusAddAdditional[i].annualSalary);
    // also add the bonus to employee array
    bonusAddAdditional[i].senorityBonus = addBonus[i];
    console.log(bonusAddAdditional[i]);
  }
}
addingSeniorityBonus(employees);


function highRoller(tooMuch){
  for (let i = 0; i < tooMuch.length; i++){
    if(tooMuch[i].annualSalary > 65000 && tooMuch.reviewRating >= 3){
      console.log(tooMuch[i].annualSalary * .01);
      
    }
  }
}

highRoller(employees);
// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);


