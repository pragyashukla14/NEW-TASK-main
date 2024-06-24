function toggleDropdown() {
  var dropdown = document.getElementById("dropdownContent");
  if (dropdown.style.display=="none") {
      dropdown.style.display = "block";
  } else {
      dropdown.style.display = "none";
  }
}
var button = document.getElementById('alertButton');
button.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'black';
});
button.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

var button2 = document.getElementById('announcementButton');
button2.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'black';
});
button2.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

var button3 = document.getElementById('accountButton');
button3.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'black';
});
button3.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});