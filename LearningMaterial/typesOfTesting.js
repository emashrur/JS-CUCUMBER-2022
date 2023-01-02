/**
 * Types of testing:
 * 
 * REGRESSION TESTING - Testing all existing functionalities of a product.
 * SMOKE TESTING - High level testing done on all the important features of a product.
 * to run a particular feature file : npx wdio run ./wdio.conf.js --spec ./feature/**.js
 * 
 *      1.) Data Driven Testing (DDT)
 *      2.) Behavior Driven Development (BDD)
 *      3.) Test Driven Development (TDD)
 *      4.) Parallel Testing
 *      5.) Cross Browser Testing
 * 
 * 1.) Data Driven Testing (DDT) : Testcases which are having the same steps but with different data
 * 2.) Behavior Driven Development (BDD) : Mostly associated with cucumber scenarios, every scenario 
 *      mimics a user's behavior
 * 3.) Test Driven Development (TDD) : In this test cases will be performed in order to determine if 
 *      development is done or not.
 *      Ticket -> Dev -> QA -> Done
 *      Requirement Analysis -> Create testcase -> link testcases with the Ticket -> Ticket -> Dev
 *      -> Dev will perform all linked testcases -> if all testcases passed -> Done
 * 4.) Parallel Testing : Running multiple testcases silmultaneously. In mocha-framework or cucumber-
 *      framework, maxInstances will define the number of testcases can run silmultaneously.
 * 5.) Cross Browser Testing : Running the same testcases in multiple browsers.
 *      When we run same testcases on different browsers its called cross-browser testing
 * 
 * 
 * 
 * 
 * How do you code data driven testcases in cucumber?**
 *     
 */