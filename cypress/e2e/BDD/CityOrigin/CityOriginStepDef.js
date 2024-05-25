import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import EmployeePage from '../../../PageObject/EmployeePage'
const employeePage= new EmployeePage()
Given("Visit the employee page", function() {
  cy.visit('/');
  employeePage.getLoginTitle().should('be.visible').and('include.text','Login')
});

When('Select single employee', () => {
  //declare global variable for data validation in the next test case
  global.SingleEmployee = '';
  global.SingleCity=''
  employeePage.getEmployeeCheckBox().eq(0).click()   //check the first employee
  employeePage.getFirstNameColumns().eq(0).invoke('text').then(($text) => {  //get the name of the first employee
    
    global.SingleEmployee = $text.trim(); // Store the text content in SingleEmployee, trim() removes leading/trailing whitespace
  });
  employeePage.getCityColumns().eq(0).invoke('text').then(($text) => {
    
    global.SingleCity = $text.trim(); // Store the text content in SingleEmployee, trim() removes leading/trailing whitespace
  });

});

When('Click View selected data', () => {
    //Click on the view selected data button
    employeePage.getViewSelectedDataBtn().click({force:true})
})
Then('The city of origin of the selected employee is displayed', () => {
  // Validate the first filed is having the correct firstname and city of origin
  employeePage.getListCityDisplayed().eq(0).should('include.text',global.SingleEmployee+' is from '+global.SingleCity)
});
When('Select multiple emplyees',()=>{
  //Define global variable to be used in the next test cases
  global.EmployeesSelected=[];
  global.CitysSelected=[];
  //Check three employees
  employeePage.getEmployeeCheckBox().eq(0).click()
  employeePage.getEmployeeCheckBox().eq(1).click()
  employeePage.getEmployeeCheckBox().eq(2).click()
  //Get the first name of the selected employees ad store them in global variables
  for(let i=0;i<=2;i++){
    employeePage.getFirstNameColumns().eq(i).invoke('text').then(($text) => {
      // Store the text content in EmployeesSelected
      cy.log(global.SingleEmployee)
      global.EmployeesSelected[i]=($text.trim()) // trim() removes leading/trailing whitespace
      cy.log(global.EmployeesSelected)

    });
    employeePage.getCityColumns().eq(i).invoke('text').then(($text) => {
      // Store the text content in CitysSelected
      global.CitysSelected[i]= $text.trim(); // trim() removes leading/trailing whitespace
    });
  }
})

Then('The city of origin of the selected employees is displayed',()=>{
  //Verify the displayed city of origin for the selected employees
  for(let i=0; i<=2; i++){
  employeePage.getListCityDisplayed().eq(i).should('include.text',global.EmployeesSelected[i]+' is from '+global.CitysSelected[i])
  }
})

When('Select all emplyees',()=>{
  //Define global variable to store the first name of the selected employee and city of origin
  global.AllEmployeesSelected=new Array(9).fill('test');
  global.AllCitysSelected=new Array(9).fill('test');
  global.EmployeeNumber=0
  //Expand the list to have employees visible
  cy.get('.jqx-grid-group-collapse').click().wait(500)
  //Get the number of emplyee to select all of them
  cy.get('tbody ').find('tr').its('length').then((rowCount) => {
    global.EmployeeNumber=rowCount
  });
  cy.wrap(global.EmployeeNumber).then(()=>{
    for(let i=0;i<=EmployeeNumber-1;i++){
      //Check the emplyee
      employeePage.getEmployeeCheckBox().eq(i).click()
      //Get the employee first name and store it in a global variable
      employeePage.getFirstNameColumns().eq(i).invoke('text').then(($text) => {
        // Store the text content in SingleEmployee
        global.AllEmployeesSelected[i]=($text.trim()) // trim() removes leading/trailing whitespace
  
      });
      //Get the employee city of origin and store it in a global variable
      employeePage.getCityColumns().eq(i).invoke('text').then(($text) => {
        // Store the text content in SingleEmployee
        global.AllCitysSelected[i]= $text.trim(); // trim() removes leading/trailing whitespace
      });
    }

  })
  
})
Then('The city of origin of all selected employees is displayed',()=>{
  //Validate all employees data displayed
  for(let i=0; i<=global.EmployeeNumber-1; i++){
  employeePage.getListCityDisplayed().eq(i).should('include.text',global.AllEmployeesSelected[i]+' is from '+global.AllCitysSelected[i])
  }

})

When('Select an employee that do not have a country of origin',()=>{
  //Define global variable for employee without city of origin to be used in next test cases
  global.EmployeeWithoutCity=''

  cy.get('.jqx-grid-group-collapse').click().wait(500) //Expand the list to have employees visible
  employeePage.getEmployeeCheckBox().eq(7).click() //Check the employee
  employeePage.getFirstNameColumns().eq(7).invoke('text').then(($text) => {
    // Store the text content in SingleEmployee
    global.EmployeeWithoutCity=($text.trim()) // trim() removes leading/trailing whitespace
  });

})

Then('The employee do not have a city of origin is displayed',()=> {
  //Validate The data in the field
  employeePage.getListCityDisplayed().eq(0).should('include.text',global.EmployeesSelected[i]+' Does not have city origin!')
})