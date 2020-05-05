function focusInc() {
  focusMinutes.textContent = parseInt(focusMinutes.textContent) + 1;
}

function focusDec() {
  if (focusMinutes.textContent == "1"){
    //pass
  } else {
    focusMinutes.textContent = parseInt(focusMinutes.textContent) - 1;
  }
}

function breakInc() {
  breakMinutes.textContent = parseInt(breakMinutes.textContent) + 1;
}

function breakDec() {
  if (breakMinutes.textContent == "1"){
    //pass
  } else {
    breakMinutes.textContent = parseInt(breakMinutes.textContent) - 1;
  }
}
const focusIncButton = document.getElementById("focus-plus")
const focusDecButton = document.getElementById("focus-minus")
const focusMinutes = document.getElementById("focus-minutes")
const breakIncButton = document.getElementById("break-plus")
const breakDecButton = document.getElementById("break-minus")
const breakMinutes = document.getElementById("break-minutes")
focusIncButton.addEventListener("click", focusInc);
focusDecButton.addEventListener("click", focusDec);
breakIncButton.addEventListener("click", breakInc);
breakDecButton.addEventListener("click", breakDec);
