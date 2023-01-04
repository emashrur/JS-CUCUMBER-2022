Feature: Code Test

    # @codeTest @codeTest-1 @firstSprint @firstSprint-1
    # Scenario Outline: Verify user is able to change language
    #     Given I am on hotels
    #     When I change language to <languageOption>
    #     Then I verify language got changed to <language>
    #     Examples:
    #         | languageOption           | language |
    #         | Español (Estados Unidos) | Español  |
    #         | English (United States)  | English  |

    # @codeTest @codeTest-2
    # Scenario: Verify limit for adults count in a room
    #     Given I am on hotels
    #     When I select number of adults in Room 1 as 1
    #     Then I verify the minus button for adults is disabled
    #     Then I verify the plus button for adults is enabled
    #     When I select number of adults in Room 1 as 14
    #     Then I verify the plus button for adults is disabled
    #     Then I verify the minus button for adults is enabled

    # @firstSprint
    # Scenario: Hotels : Verify past dates and back button on Current month's calendar is disabled
    #     Given I am on hotels
    #     When I click on dates
    #     And I go to current month if not displayed

    # @firstSprint @firstSprint-2
    # Scenario: Hotels: Verify invalid phone number error
    #     Given I am on hotels
    #     When I scroll to "Get the app" button
    #     When I enter "0000000000" in Phone number
    #     When I click on “Get the app“ button
    #     Then I verify “Please enter a valid phone number.“ error is displayed

    @firstSprint @firstSprint-3
    Scenario: Hotels: Verify error is displayed when user submits the empty feedback form
        Given I am on hotels
        When I click on Sign In
        And I click feedback
        And I click on Submit button
        Then I verify error message is displayed
        And I verify star boxes section is in a red dotted box
