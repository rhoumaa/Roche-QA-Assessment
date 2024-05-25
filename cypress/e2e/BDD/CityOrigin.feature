Feature: Verify Display city of origin of the employees

  Scenario: Verify display the city of origin of a single emloyee
    Given Visit the employee page
    When Select single employee
    And Click View selected data
    Then The city of origin of the selected employee is displayed

  Scenario: Verify display the city of origin of multiple employees
    Given Visit the employee page
    When Select multiple emplyees
    And Click View selected data
    Then The city of origin of the selected employees is displayed

  Scenario: Verify display the city of origin of all employees
    Given Visit the employee page
    When Select all emplyees
    And Click View selected data
    Then The city of origin of all selected employees is displayed

  Scenario: Verify display city of origin for an employee that do not have a city of origin
    Given Visit the employee page
    When Select an employee that do not have a country of origin
    And Click View selected data
    Then The employee do not have a city of origin is displayed