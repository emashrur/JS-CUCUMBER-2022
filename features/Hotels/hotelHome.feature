@Hotels
Feature: Hotels

    @codeTest @codeTest-1 @firstSprint @firstSprint-1
    Scenario Outline: Verify user is able to change language
        Given I am on hotels
        When I change language to <languageOption>
        Then I verify language got changed to <language>
        Examples:
            | languageOption           | language |
            | Español (Estados Unidos) | Español  |
            | English (United States)  | English  |

    @firstSprint @firstSprint-2
    Scenario: Hotels: Verify invalid phone number error
        Given I am on hotels
        When I scroll to "Get the app" button
        And I enter "0000000000" in Phone number
        And I click on “Get the app“ button
        Then I verify “Please enter a valid phone number.“ error is displayed

    @firstSprint @firstSprint-3
    Scenario: Hotels: Verify error is displayed when user submits the empty feedback form
        Given I am on hotels
        When I click on Sign In
        And I click feedback
        And I click on Submit button
        Then I verify error message is displayed
        And I verify star boxes section is in a red dotted box

    @firstSprint @firstSprint-4
    Scenario: Hotels: Verify user can submit feedback after completing the feedback form
        Given I am on hotels
        When I click on Sign In
        And I click feedback
        And I rate the page 3 stars
        And I enter "test" in comments
        And I select the option "Highly likely" for how likely are you to return to Hotels
        And I select "Yes" for have you ever booked on Hotels
        And I select "Yes" for did you accomplish what you wanted to on this page
        And I click on Submit button
        Then I verify "THANK YOU FOR YOUR FEEDBACK" message is displayed

    @firstSprint @firstSprint-5
    Scenario: Hotels : Verify past dates and back button on Current month's calendar is disabled
        Given I am on hotels
        When I click on dates
        And I go to current month if not displayed
        Then I verify for current month
        And I verify past dates are disabled
        And I verify back button on current month is disabled

    @firstSprint @firstSprint-6
    Scenario: Hotels : Verify user can update number of guests on Home page
        Given I am on hotels
        When I click on Travelers
        And I set "Adults" to 6
        And I set "Children" to 3
        And I set Child 1 age to 4
        And I set Child 2 age to Under 1
        And I set Child 3 age to 7
        And I click Done
        And I verify total number of guests in sum of adults and children as same as selected on step #3 and #4


        











    # @codeTest @codeTest-2
    # Scenario: Verify limit for adults count in a room
    #     Given I am on hotels
    #     When I select number of adults in Room 1 as 1
    #     Then I verify the minus button for adults is disabled
    #     Then I verify the plus button for adults is enabled
    #     When I select number of adults in Room 1 as 14
    #     Then I verify the plus button for adults is disabled
    #     Then I verify the minus button for adults is enabled

