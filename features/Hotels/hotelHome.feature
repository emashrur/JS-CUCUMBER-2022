@Hotels
Feature: Hotels

    # @codeTest @codeTest-1 @firstSprint @firstSprint-1
    # Scenario Outline: Verify user is able to change language
    #     Given I am on hotels
    #     When I change language to <languageOption>
    #     Then I verify language got changed to <language>
    #     Examples:
    #         | languageOption           | language |
    #         | Español (Estados Unidos) | Español  |
    #         | English (United States)  | English  |

    # @firstSprint @firstSprint-2
    # Scenario: Hotels: Verify invalid phone number error
    #     Given I am on hotels
    #     When I scroll to "Get the app" button
    #     And I enter "0000000000" in Phone number
    #     And I click on “Get the app“ button
    #     Then I verify “Please enter a valid phone number.“ error is displayed

    # @firstSprint @firstSprint-3
    # Scenario: Hotels: Verify error is displayed when user submits the empty feedback form
    #     Given I am on hotels
    #     When I click on Sign In
    #     And I click feedback
    #     And I click on Submit button
    #     Then I verify error message is displayed
    #     And I verify star boxes section is in a red dotted box

    # @firstSprint @firstSprint-4
    # Scenario: Hotels: Verify user can submit feedback after completing the feedback form
    #     Given I am on hotels
    #     When I click on Sign In
    #     And I click feedback
    #     And I rate the page 3 stars
    #     And I enter "test" in comments
    #     And I select the option "Highly likely" for how likely are you to return to Hotels
    #     And I select "Yes" for have you ever booked on Hotels
    #     And I select "Yes" for did you accomplish what you wanted to on this page
    #     And I click on Submit button
    #     Then I verify "THANK YOU FOR YOUR FEEDBACK" message is displayed

    # @firstSprint @firstSprint-5
    # Scenario: Hotels : Verify past dates and back button on Current month's calendar is disabled
    #     Given I am on hotels
    #     When I click on dates
    #     And I go to current month if not displayed
    #     Then I verify for current month
    #     And I verify past dates are disabled
    #     And I verify back button on current month is disabled

    # @firstSprint @firstSprint-6
    # Scenario: Hotels : Verify user can update number of guests on Home page
    #     Given I am on hotels
    #     When I click on Travelers
    #     And I set "Adults" to 6
    #     And I set "Children" to 3
    #     And I set Child 1 age to 4
    #     And I set Child 2 age to Under 1
    #     And I set Child 3 age to 7
    #     And I click Done
    #     Then I verify total number of guests in sum of adults and children as same as selected on step #3 and #4

    # @secondSprint @secondSprint-1
    # Scenario: Hotels: Verify filter-by and sort-by functionality works as expected
    #     Given I am on hotels
    #     When I search "Manhattan, NY"
    #     And I enter check-in date as Feb-10-2023
    #     And I enter check-out date as Feb-16-2023
    #     And I click on search button
    #     And I click on 5 stars from star-rating filter
    #     And I select "Price" from sort-by dropdown
    #     Then I verify the search results match 5 star-rating as selected in the above step
    #     And I verify all hotels are listed in increasing price order

    # @secondSprint @secondSprint-2
    # Scenario: Hotels: Verify Verification message for invalid sign in credentials
    #     Given I am on hotels
    #     When I click on Sign In
    #     And I click Sign In button
    #     And I enter invalid email address "invalidUser@domain.com"
    #     And I enter invalid password "123456"
    #     And I click Sign In button to submit credentials
    #     Then I verify error message is displayed "Email and password don't match"

    # @secondSprint @secondSprint-3
    # Scenario: Hotels: Verify error message for invalid data in SignUp form
    #     Given I am on hotels
    #     When I click on Sign In
    #     And I click on Sign up link
    #     And I type invalid email address "#@#&##"
    #     And I type invalid first name "$?&?$?"
    #     And I type invalid last name "$?&?$?"
    #     And I type "test" as password
    #     Then I verify invalid email error is displayed
    #     And I verify invalid first name error is displayed
    #     And I verify invalid last name error is displayed
    #     And I verify "Keep me signed in" checkbox is displayed and enabled
    #     And I verify "Continue" button is displayed but disabled

    # @secondSprint @secondSprint-4
    # Scenario Outline: Verify password strength bar and messages
    #     Given I am on hotels
    #     When I click on Sign In
    #     And I click on Sign up link
    #     And I enter "user@test.com" as email address
    #     And I enter "fUser" as first name
    #     And I enter "lUser" as last name
    #     And I type <password> as password
    #     Then I verify Password strength bar is <strengthBar> filled
    #     And I verify Password strength message is <strengthMsg>

    # Examples:
    #         | password     | strengthBar | strengthMsg |
    #         | abcd         | not         | weak        |
    #         | abcd@123     | half        | Weak        |
    #         | abcd@12324   | almost      | Strong      |
    #         | abcd@12@pl@2 | completely  | Very Strong |

    
    @secondSprint @secondSprint-5
    Scenario: Hotels: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
        Given I am on hotels
        When I click on Sign In
        And I click on Sign up link
        And I click "Terms and Conditions" link
        Then I verify "Terms and Conditions" page opens in new tab
        # And I verify "Last Revised" date format is as MM/dd/yy
        When I return to Sign Up page
        And I click "Privacy Statement" link
        Then I verify "Privacy Statement" page opens in new tab
        # And I verify "Last Updated" date format is as dd MMMM, yyyy











    # @codeTest @codeTest-2
    # Scenario: Verify limit for adults count in a room
    #     Given I am on hotels
    #     When I select number of adults in Room 1 as 1
    #     Then I verify the minus button for adults is disabled
    #     Then I verify the plus button for adults is enabled
    #     When I select number of adults in Room 1 as 14
    #     Then I verify the plus button for adults is disabled
    #     Then I verify the minus button for adults is enabled

