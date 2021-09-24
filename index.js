/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(timeString) {
  const timeInts = timeString.split(':');
  const hour = parseInt(timeInts[0]);
  if (hour < 12) {
    return "Good Morning";
  }
  else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}

function displayMessage(string) {
  const greeting = document.querySelector('h1#greeting')
  greeting.innerHTML = string
}
