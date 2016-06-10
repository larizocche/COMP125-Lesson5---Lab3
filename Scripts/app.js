/**
 * FileName: app.js
 * 
 * @author Larissa Zocche
 * @date June 10, 2016
 * 
 * StudentID: 300870340
 * website: 
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    // second way to define an array
    //var paragraphs = new Array();
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    
    // define your paragraphs array;
    var paragraphs = [];
    
    // create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
    
    // check to see if sendButton exists
    if(sendButton) {
        // event listener
        sendButton.addEventListener("click", sendButtonClick);
    }
    
    
    // event handler function
    function sendButtonClick(event) {
        console.log("clicked!");
    }
    
    // create a reference to the firstName field
     var firstName = document.getElementById("firstName");
    
    // create a reference to the form
    var contactForm = document.getElementById("contactForm");
    
    
    if(contactForm) {
        // event listener with inline anonymous event handler function
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            console.log("submitted");
            showFormInput();
            contactForm.reset();
        });
    }
    
    /**
     * This function shows the input from each form field 
     * on the console
     * 
     * @method showFormInput
     * @return {void} 
     */
    function showFormInput() {
        console.log("++++++++++++++++++++++++++++++++");
        console.log("First Name: " + firstName.value);
        console.log("++++++++++++++++++++++++++++++++");
    }
    
    
    // data for my pages
    paragraphs[0] = "<span class='firstSentence'>This is my first paragraph.</span> It is only visible on the first page. This next sentence is to prove that this really works!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis venenatis eros nec viverra. Aenean egestas sit amet dui eget ultrices. Ut vitae ullamcorper risus. Aenean risus eros, laoreet eu luctus pharetra, luctus et massa. Cras ullamcorper erat in justo malesuada pulvinar. Ut ac sollicitudin lorem, ut mattis ipsum. Maecenas commodo efficitur quam, et suscipit eros faucibus id. Suspendisse ut urna odio. Morbi euismod nec dui vel tempor. Ut vehicula libero odio, vel tempus eros scelerisque non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras efficitur porta mauris ac aliquet. Curabitur et sollicitudin ex.";
    paragraphs[1] = "<span class='firstSentence'>This is my second paragraph.</span> It is only visible on the second page. Nam commodo sodales porttitor. Proin sed purus ex. Sed id tortor massa. Vestibulum gravida sollicitudin accumsan. Proin ultricies ornare quam in feugiat. In mattis lorem at felis commodo, vel pellentesque ante varius. Cras rutrum efficitur bibendum. In sit amet ante est. Curabitur ullamcorper, enim vel aliquam pretium, quam ex tristique lacus, sed dapibus sapien est quis tellus. Cras rhoncus tempus dui a porta. Quisque est risus, vulputate vel ligula non, elementum bibendum neque. Vestibulum vel tellus porta, laoreet lacus nec, porttitor sapien. Proin ex metus, vehicula vitae nisi non, efficitur ultrices urna.";
    paragraphs[2] = "<span class='firstSentence'>This is my third paragraph.</span> It is only visible on the third page. Vestibulum ac placerat neque. Nulla eu turpis quis purus pulvinar mollis. Aliquam erat volutpat. Vestibulum egestas, felis ac posuere tincidunt, urna tellus condimentum sem, non iaculis enim ante ut orci. Morbi mattis orci diam, vel vulputate nisi tincidunt sed. Nunc vitae commodo est. Morbi eu mauris quam. Nunc odio orci, blandit a eros egestas, volutpat dapibus turpis. Nunc at metus in urna bibendum euismod sit amet et mauris. Nulla tempor nisi vel nisl sodales, in aliquam dui feugiat. Sed ullamcorper nibh cursus, posuere metus sit amet, suscipit urna. Aenean blandit augue sit amet ligula elementum, eget congue sapien tincidunt. In blandit bibendum velit, varius faucibus leo consequat non.";
    
    
    
    // check to see if paragraph one exists
    var paragraphElementsLength = paragraphElements.length;
    
    // if paragraph exists then populate each paragraph on the page
    for (var index = paragraphElementsLength; index >= 0; index--) {
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
    
    
})();