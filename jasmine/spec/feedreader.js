/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined(); 
            expect(allFeeds.length).not.toBe(0); 
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         
         // Code reference Matthew Cranford URL: https://matthewcranford.com/feed-reader-walkthrough-part-2-writing-the-first-tests/ 
         
         it('url defined', function() {
           for(let feed of allFeeds) {
             expect(feed.url).toBeDefined(); // ensuring that URLs are defined names
             expect(feed.url.length).not.toBe(0); // ensuring that URLs are not empty.
           }
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         
         it('name defined', function() {
           for(let feed of allFeeds) {
             expect(feed.name).toBeDefined(); // ensuring that all feeds have names
             expect(feed.name.length).not.toBe(0); //e ensuring that names are not empty.
           }
         });
       });

    /* TODO: Write a new test suite named "The menu" */
    
     // Code reference Matthew Cranford URL: https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/
    describe('the menu', function(){
      it('is hidden', function() {
        const body = document.querySelector('body');
        expect(body.classList.contains('menu-hidden')).toBe(true); // ensure that the menu is hidden by default
      });
      
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         
      it('toggle on and off', function() {
        const body = document.querySelector('body');
        const menu = document.querySelector('.menu-icon-link');
           
        menu.click();
        expect(body.classList.contains('menu-hidden')).toBe(false); // ensure that the menu is visibile when clicked.
      });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    
    // Code reference Matthew Cranford URL: https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/
    describe('Initial Enteries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
           loadFeed(0, done); // this test ensure that loadfeed is functioning correctly
         });
         
         it('Completes work', function() {
           const feed = document.querySelector('.feed');
           expect(feed.children.length > 0).toBe(true);
         });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('News Feed Selection', function() {
        const feed = document.querySelector('.feed');
        const firstFeed = [];
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         beforeEach(function(done) { // ensures that URLs have "http://" or "https://"
           loadFeed(0);
           Array.from(feed.children).forEach(function(entry) {
             firstFeed.push(entry.innerText);
           });
           loadFeed(1, done);
         });
         
         it('content changes', function() {
           Array.from(feed.children).forEach(function(entry,index) {
             console.log(entry.innerText, firstFeed[index], entry.innerText === firstFeed[index]);
             expect(entry.innerText === firstFeed[index]).toBe(false);
           });
         });
    });
    });     
}());
