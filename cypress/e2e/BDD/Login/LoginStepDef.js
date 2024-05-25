import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import EmployeePage from '../../../PageObject/EmployeePage'
const employeePage= new EmployeePage()
Given("Visit the emplyee page", function() {
  cy.visit('/');
  employeePage.getLoginTitle().should('be.visible').and('include.text','Login')
  
});

When('Enter valid User Name', function () {
  // Get the username field and type a valid username
  employeePage.getUserNameField().type(this.data.ValidUserName)
});

When('Enter valid Password', function () {
  // Get the password field and type a valid password
  employeePage.getPasswordField().type(this.data.ValidPassword)
});
When('Enter empty User Name', function () {
  // Get the username field and type a empty username
  employeePage.getUserNameField().clear()
});
When('Enter empty Password', function () {
  // Get the password field and type a empty password
  employeePage.getPasswordField().clear()
});
When('Click Login button', function () {
  // Click on login buttin
  employeePage.getLoginButton().should('be.visible').click()
});
Then('Successful login', function () {
  // Validate the success login
  employeePage.getLoginSussessPop().should('be.visible').and('include.text',this.data.LoginSuccess)
});
When('Enter invalid User Name', function () {
  // Get the username field and type a invalid username
  employeePage.getUserNameField().type(this.data.InvalidUserName)
});
When('Enter invalid Password', function () {
  // Get the password field and type a invalid password
  employeePage.getPasswordField().type(this.data.InvalidPassword)
});
Then('A message The username or password not correct is showing', ()=>{
  //Valiate the error message when username or password is incorect
  employeePage.LoginMessageBox().should('be.visible').and('include.text','The username or password not correct')
})
Then('A message Enter the username is showing', ()=>{
  //Valiate the error message when username is missing
  employeePage.getUserNameMsg().should('be.visible').and('include.text','Enter the username')
})
Then('A message Enter the password is showing', ()=>{
  //Valiate the error message when password is missing
  employeePage.getUserNameMsg().should('be.visible').and('include.text','Enter the password')
})
Then('The Password field is with type Password',()=>{
  //Valiate the password field type is "password"
  employeePage.getPasswordField().should('have.attr', 'type', 'password');
})