/**
     * wait
     * sleep
     * 
     * 
     * waitForDisplayed()   - to wait until the element is displayed on the screen
     * waitForClickable()   - to wait until the element is clickable
     * waitForEnabled()     - to wait until the element is enabled
     * waitForExist()       - to wait until the element exists in the dom
     * waitUntil()          - to wait until mention condition(s) are true
     *                         
     * 
     * waitUntil()
     *      takes async function as input
     *      waitUntil keeps executing the input-function until it returns true
     *      1. takes async function as input
     *      2. async function must return a boolean
     *      3. wait until the condition result into true within wa-time-period.
     * 
     * 
     * 
     * For all wait-functions, we need to set some attributes:
     *      timeout - defines the maximum time (milliseconds) browser should wait for condition to be true
     *      timeoutMsg - defines error message to be displayed in wait-time is over
     *      reverse - true/false - defines the wait until the condition is false
     * 
     * 
     * 
*/