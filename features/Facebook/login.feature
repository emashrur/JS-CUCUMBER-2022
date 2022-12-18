@login @regression
Feature: Login

    Background: 
        Given I am on facebook
        # Background keyword is for Gherkin lines that will run before every single scenario.

    @fieldsEnabled-1
    Scenario: Verify login fields are enabled
        Then I verify email field is enabled
        Then I verify password field is enabled
        Then I verify login button is enabled
    
    @login-1
    Scenario: Verify error for invalid login
        When I type '*$&$%*&' as username
        And I type 'abcd@1234' as password
        And I click on login button
        Then I verify error is displayed

    @login-2
    Scenario: Verify error for empty login flow
        And I click on login button
        Then I verify error is displayed

    @login-3
    Scenario: Verify error for invalid password
        When I type 'validUser@gmail.com' as username
        And I type 'incorrectPassword' as password
        And I click on login button
        Then I verify error is displayed

    @login-all @imp @smoke
    Scenario Outline: Verify error for invalid <flowName>
        When I type '<username>' as username
        And I type '<password>' as password
        And I click on login button
        Then I verify error is displayed
    Examples:
        | flowName  | username              | password          |
        | login     | *$&$%*&               | abcd@1234         |
        | password  | validUser@gmail.com   | incorrectPassword |

    @smoke
    Scenario Outline: Verify user gets a new page when clicking <pageName>
        When I click on '<pageName>'
        Then I verify '<pageName>' opens in a new window
    Examples: 
        | pageName  |
        | Instagram |
        | Oculus    |
        | Meta Pay  |
        | Portal    |