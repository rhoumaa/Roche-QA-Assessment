
Feature: Verify Login feature
  
  Scenario: Verify the login using Valid username and password
    Given Visit the emplyee page
    When Enter valid User Name
    And Enter valid Password
    And Click Login button
    Then Successful login

  Scenario: Verify the login using Valid username and invalid password
    Given Visit the emplyee page
    When Enter valid User Name
    And Enter invalid Password
    And Click Login button
    Then A message The username or password not correct is showing

  Scenario: Verify the login using invalid username and valid password
    Given Visit the emplyee page
    When Enter invalid User Name
    And Enter valid Password
    And Click Login button
    Then A message The username or password not correct is showing

  Scenario: Verify the login using invalid username and password
    Given Visit the emplyee page
    When Enter invalid User Name
    And Enter invalid Password
    And Click Login button
    Then A message The username or password not correct is showing 

  Scenario: Verify the login using empty username and valid password
    Given Visit the emplyee page
    When Enter empty User Name
    And Enter valid Password
    And Click Login button
    Then A message Enter the username is showing

  Scenario: Verify the login using valid username and empty password
    Given Visit the emplyee page
    When Enter valid User Name
    And Enter empty Password
    And Click Login button
    Then A message Enter the password is showing

  Scenario: Verify the login using empty username and password
    Given Visit the emplyee page
    When Enter empty User Name
    And Enter empty Password
    And Click Login button
    Then A message username and password are required is showing

  Scenario: Verify password field is showing stars instead of the password
    Given Visit the emplyee page
    When Enter valid Password
    Then The Password field is with type Password