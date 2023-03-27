// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// $(function () {

// DATE AND TIME //
var currentDay = document.querySelector('#currentDay');
var output = document.querySelector('#currentDay');

let today = new Date();

let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = today.getDate();

let current_date = '${month}/${date}/${year}';
output.innerText = current_date;

let hours = addZero(today.getHours());
let minutes = addZero(today.getMinutes());
let seconds = addZero(today.getSeconds());

let current_time = '${hours}:${minutes}:${seconds}';
output.innerText = current_time;

document.getElementById("currentDay").innerHTML = today;

function addZero(num){
  return num < 10 ? '0${num}':num;
}
// ^ DATE AND TIME ^ //

console.log(hours)

var saveBtn = document.querySelectorAll('.saveBtn');

var text = localStorage.getItem('');

// saveBtn.textContent = text;
for(i = 0; i < saveBtn.length; i++){
saveBtn[i].addEventListener('click', function(e) {
  e.preventDefault()
  if(e.target.dataset.hour){

  
  localStorage.setItem(e.target.dataset.hour, e.target.previousElementSibling.value)
}
else{
  localStorage.setItem(e.target.parentElement.dataset.hour, e.target.parentElement.previousElementSibling.value)
}});
saveBtn[i].previousElementSibling.value = localStorage.getItem(saveBtn[i].dataset.hour)
if(saveBtn[i].dataset.hour < hours){
  saveBtn[i].previousElementSibling.style.backgroundColor='red'
}
else if(saveBtn[i].dataset.hour == hours){
  saveBtn[i].previousElementSibling.style.backgroundColor='gray'
}
else{
  saveBtn[i].previousElementSibling.style.backgroundColor='green'
}
}

console.log(localStorage);




















  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });


//                   MADDOX'S TO DO'S:                  //
// ADD CURRENT DATE AT TOP OF WEB PAGE F0R USER TO SEE //
// CREATE MORE TIME BLOCKS UP UNTIL 5PM (BUSINESS HOURS) //
// COLOR CODE EVERY TIME BLOCK FOR WHETHER IT IS IN THE PAST, PRESENT, OR FUTURE (3 DIFFERNT COLOR CRITERIA) //
// MAKE SURE THE USER CAN CREATE AN EVENT IN THE TIME BLOCKS, AND MAKE SURE IT CAN BE SAVED TO LOCAL STORAGE //
