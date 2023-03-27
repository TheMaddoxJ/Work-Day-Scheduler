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


//  LOCAL STORAGE  //
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

// ^  LOCAL STORAGE ^  //