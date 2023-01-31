// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  var dateEl = dayjs().format('MMMM D YYYY h:m A');
  $('#currentDay').text(dateEl); //setting current date and time in the header
  var buttonEl = $('.btn'); //class within each div
  var hourEl = dayjs().hour(); //calling the current hour

  //for loop to run through each hour to determine if it's past, present or future compared to the current hour
  for (let i = 9; i < 18; i++) {
    var hour = $('#hour-' + i)
    if (i < hourEl) {
      hour.addClass('past');
    }
    if (i == hourEl) {
      hour.addClass('present')
    }
    if (i > hourEl) {
      hour.addClass('future')
    }
    var textArea = localStorage.getItem('hour-' + i);
    hour.children('textarea').val(textArea);
  }

  // Event listener for save button
  function save() {
    var textArea = $(this).siblings('textarea');
    var timeblockID = $(this).parent().attr('id');
    localStorage.setItem(timeblockID, textArea.val());
    console.log(textArea);
  }

  buttonEl.on('click', save);

});


  //Psuedocode
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//-go to the docs
//-We want to use Day JS ot disploy the current date
//-make sure dayjS CDN link exists in HTML
//-create a variable, get the dayJS data
//-set the format HH: MM: SS
//-set the current time to an element in the HTML


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
//-Complete the rest of the timeblocks from the three that were given to use in the HTML file
//-remove static past, present and future classes
//-find a way to programmically add or remove the appropriate class
//-colors need to shift at the start of a new hour
//-set standard business hours


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//-Compare the time block to the current time from dayJS and apply the correct class based on the comparison < = > of past, present and current time.

// // HTML TODO p id= current day would add DayJS
// container holds all the day blocks


// WHEN I click into a timeblock
// THEN I can enter an event/text
//-grab text input (text areas)


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//-Eventlistener on the save button
// -create global variable, get the value of what they entered
//-set it to local storage (what will the data in local storage look like?)
//times: values as array? or array of object


// WHEN I refresh the page
// THEN the saved events persist
//-local storage
//-confirming it's saved
//-parse it in local storage to turn it back into an object (if the data was stored as a JSON)-to have it display as the string it was entered

//watch out for event delegation - multiple save events
//check out activity 2...addClass
//look at what methods exist in dom traveral activity 8