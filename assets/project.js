"use stricts";

// to show message
function message() {
    let name = prompt("Hey! What's your name?");
    let length = name.length;

    if (length > 0) {
        document.getElementById("name").innerHTML = `Hi, ${name}! You're doing well, don't forget to take care of yourself. Have a nice day ahead! ^^`;
    }
    else{
        let name = alert("Please tell me your name 🥺");
        message();
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }