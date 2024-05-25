class EmployeePage{
    constructor() {
        this.usernameInput = 'input[placeholder="username"]';
        this.passwordInput = 'input[placeholder="password"]';
        this.loginButton = 'input[type="submit"]';
        this.logintitle = '#button';
        this.loginSussessPop= '';
        this.LoginMessageBox='';
        this.UserNameMsg='';
        this.PasswordMsg='';
        this.Datatable='#treeGrid';
        this.EmployeeCheckBox='.jqx-tree-grid-checkbox';
        this.FirstNameColumns='.jqx-tree-grid-title';
        this.ViewSelectedDataBtn='#btn';
        this.CityColumns='tbody>tr>:nth-child(4)';
        this.ListCityDisplayd='.jqx-listitem-state-normal'
    }
    getLoginTitle(){
        return cy.get(this.logintitle)
    }
    getUserNameField(){
        return cy.get(this.usernameInput)
    }
    getPasswordField(){
        return cy.get(this.passwordInput)
    }
    getLoginButton(){
        return cy.get(this.loginButton)
    }
    getLoginSussessPop(){
        return cy.get(this.loginSussessPop)
    }
    getLoginMessageBox(){
        return cy.get(this.LoginMessageBox)
    }
    getUserNameMsg(){
        return cy.get(this.UserNameMsg)
    }
    getPasswordMsg(){
        return cy.get(this.PasswordMsg)
    }
    getDataTable(){
        return cy.get(this.Datatable)
    }
    getEmployeeCheckBox(){
        return cy.get(this.EmployeeCheckBox)
    }
    getFirstNameColumns(){
        return cy.get(this.FirstNameColumns)
    }
    getCityColumns(){
        return cy.get(this.CityColumns)
    }
    getViewSelectedDataBtn(){
        return cy.get(this.ViewSelectedDataBtn)
    }
    getListCityDisplayed(){
        return cy.get(this.ListCityDisplayd)
    }
}

export default EmployeePage