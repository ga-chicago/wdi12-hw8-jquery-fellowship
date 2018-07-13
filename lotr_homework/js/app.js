console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

//// These are arrays with strings inside
const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];


// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============

//// Establishing an Arrow Function
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");


  // 1. create a section tag with an id of middle-earth
  // 2. append the section to the body of the DOM.

  $("<section/>", {
    id: "middle-earth"
  }).appendTo("body");

//// I didn't know what was the proper syntax to build so I searched the following resources
//// https://api.jquery.com/jQuery/#jQuery2
//// https://www.youtube.com/watch?v=9eluDdytRy4
//// https://duckduckgo.com/?q=how+to+append+to+id+jquery&t=brave&ia=qa



  for (let i = 0; i < lands.length; i++) {
    $("<article/>", {
      id: lands[i]        //// My thinking: Create IDs using lands[indexnumber]. The i in the for-loop should work
    }).appendTo("#middle-earth");  //// Friend asssisted with placement, outside of for loop, appendTo was causing issues
    $("<h1/>").append(lands[i]).appendTo("#"+lands[i]);  //// Friend assisted, we built longer and consolidated down
    // you are using append to add text -- you can also use .text() for this
  }

  // 3. use a for loop to iterate over the lands array that does the following:
  //   3a. creates an article tag (there should be one for each land when the loop is done)
  //   3b. gives each land article an `id` tag of the corresponding land name
  //   3c. includes an h1 with the name of the land inside each land article
  //   3d. appends each land to the middle-earth section

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');
  $("<ul/>").appendTo("#The-Shire")   //// Based this off of Chaper 1

  for (var i = 0; i < hobbits.length; i++) {
    $("<li>").append(hobbits[i]).appendTo("ul").addClass("hobbits")  //// Loop ensures every hobbit is included, li is targetted, append goes through hobbits, and appendTo points them to the Shire.
  }
  // give each hobbit a class of "hobbit"
  };

  // 1. display an unordered list of the hobbits in the shire.
  // 2. give each hobbit a class of "hobbit"

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id
  //// Did not remember how to grab by id, used following resources: https://api.jquery.com/id-selector/ https://stackoverflow.com/questions/2004255/grab-element-id-jquery
  //// I think it can be done with $("#The-Shire")


// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  console.log('Keeping it safe...');
  $("<div/>").attr("id", "the-ring").appendTo("li:first");   //// Based this off of Chaper 1
  };


//// I used this link to figure the ID change necessary, https://stackoverflow.com/questions/2176986/jquery-add-id-instead-of-class
//// I used :first as a means of targeting Frodo- learned from Lynda.com
  // 1. create an empty div with an id of 'the-ring'
  // 2. add the ring as a child of Frodo
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab


// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  console.log('Baddies appear!');
  $("<ul/>").appendTo("#Mordor");  //// Based off of previous chapters

  for (let i = 0; i < baddies.length; i++) {
    $("<li/>").append(baddies[i]).appendTo("#Mordor ul").addClass("baddies")
  };

};

// 1. display an unordered list of baddies in Mordor
// 2. give each of the baddies a class of "baddy"
// 3. remember to append them to Mordor


// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

$("<aside/>").appendTo("#middle-earth");      //// Adds Aside element to ID middle-earth
  $("#middle-earth aside").append("<ul/>")    //// appends UL
  // $("aside ul")
  for (let i = 0; i < buddies.length; i++) {  //// For loop to get things going
    $("<li>").append(buddies[i]).addClass("buddy").appendTo("aside ul"); //// Then adds it back into aside, adds class
  }
};

  // 1. create an aside tag and append it to middle-earth below mordor
  // 2. display an unordered list of buddies in the aside
  // 3. give each of the buddies a class of "buddy"

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {
  $("#The-Shire").find(".hobbits");    //// This grabs the content
  $(".hobbits").appendTo("#Rivendell")  //// This appends class hobbits to Rivendell ID

  //PARENT.append(CHILD)
  //child.appendTo(Parent)


};

// 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
// hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
//// Got stuck, used these resources, Good example of how I can learn on my own and inch closer- but ultimately a single element or tag is wrong and there is no forward progress.
//// https://stackoverflow.com/questions/8715443/how-do-i-move-list-items
//// https://learn.jquery.com/using-jquery-core/manipulating-elements/

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  $("aside li:nth-child(4)").empty().append("Aragorn")
};

  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  $("<div/>", {
    id: "the-fellowship"
  }).appendTo("#middle-earth");
  $("<h1/>").append("The Fellowship").appendTo("#the-fellowship"); //// remember: parent.append(child) and child.appendTo(parent)
  $(".buddy").appendTo("#the-fellowship");
  $(".hobbits").appendTo("#the-fellowship");
  $("#the-fellowship").appendTo("#middle-earth");

}

  // 1. create a new div with an id 'the-fellowship'
  // 2. add an h1 with the text 'The Fellowship' to this new div  //// Easily done with previously done content
  // 3. append the fellowship to middle-earth  //// Worked with .appendTo("#middle-earth")
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  $("#the-fellowship li:first").empty().append("Gandalf the White").addClass("the-white");
};


  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
  // 2. add a class "the-white" to this element
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

alert("The Horn of Gondor has been blown.")
$("#middle-earth li:nth-child(6)").addClass("strike");
$("li").eq(2).remove();
};

  // 1. create a pop-up alert that the horn of gondor has been blown
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  $("<div/>", {
    id: "mount-doom"
  }).appendTo("#Mordor")

  $("#the-fellowship li:nth-child(7)").appendTo("#Mordor")
  $("#the-fellowship li:nth-child(7)").appendTo("#Mordor")
};


// 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
// 2. add a div with an id of 'mount-doom' to Mordor

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  $("<div/>", {
    id: "gollum"
  }).appendTo("#Mordor")            //// This creates Gollum and moves him to Mordor

  $("#the-ring").remove();            //// Removes the Ring from Frodo

  $("#gollum").append("#the-ring");   //// This gives Gollum the Ring

  $("#gollum").appendTo("#mount-doom")  //// Moves Gollum to the Mountain with the Ring
};

// $(".regular.special_div#my_id")

// 1. Create a div with an id of 'gollum' and add it to Mordor
// 2. Move the ring from Frodo and give it to Gollum
// 3. Move Gollum into Mount Doom

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  $( ".baddies" ).remove();
  $( "#gollum" ).remove();
  $( "#the-ring" ).remove();

  $(".hobbits").appendTo("#The-Shire");   //// This works...
  // $("#The-Shire").append(".hobbits");     //// This don't...
};

  // 1. remove Gollum and the Ring from the DOM
  // 2. remove all the baddies from the DOM
  // 3. Move all the hobbits back to the shire

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
