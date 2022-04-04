// acquire references to page elements
var nameSpan = document.querySelector("span");
var formEl = document.querySelector("form");
var clear = document.querySelector("#clear");
var textArea = document.querySelector("textArea");



// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE


cookieStore.get("name").then(function (cookies) {
  if (cookies) {
    nameSpan.noteContent = cookies.value;
  }
});



var texts = localStorage.getItem("text");

if (texts) {
  textArea.noteContent = texts;
} else {
  textArea.noteContent = "";
}




formEl.onsubmit = function (e) {
  // prevents form submission
  e.preventDefault();

  

  textDisplay = textArea.value;

  document.cookie = "name=" + nameSpan.noteContent + ";"
  localStorage.setItem("text", textDisplay);
  // triggers thumbs up animation
  this.elements.save.classList.add("emoji");
};


console.log(texts);

clear.onclick = function () {
  // Clear textArea's value
  // Clear localstorage's content

  // YOUR CODE HERE
  textArea.value = '';
  localStorage.setItem("text", '');
  // triggers thumbs up animation
  this.classList.add("emoji");
};




// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove("emoji");
}




formEl.elements.save.onanimationend = endThumbsUp;
clear.onanimationend = endThumbsUp;
