Feature: Login

Scenario: Verify error for invalid login
    Given I am on facebook
    When I type '*$&$(%*&' as username
    And I type 'abcd@1234' as password
    And I click login button
    Then I verify error is displayed
