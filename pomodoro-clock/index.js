function timerObjectsHandler(e){
  const clickId = e.target.id;
  switch (clickId){
    case "focus-plus":
      if (focusMinutes.textContent <= 59){
        focusMinutes.textContent = parseInt(focusMinutes.textContent) + 1;
      }
      break;
    case "focus-minus":
      if (focusMinutes.textContent >= 2){
        focusMinutes.textContent = parseInt(focusMinutes.textContent) - 1;
      }
      break;
    case "break-plus":
      if (breakMinutes.textContent <= 59){
        breakMinutes.textContent = parseInt(breakMinutes.textContent) + 1;
      }
      break;
    case "break-minus":
      if (breakMinutes.textContent >= 2){
        breakMinutes.textContent = parseInt(breakMinutes.textContent) - 1;
      }
      break;
  }
}

function controlButtonsHandler(e){
  const clickId = e.target.id;
  switch (clickId){
    case "start":
      startTimer(focusMinutes.textContent, timerText);
      break;
    case "pause":
      console.log("pause");
      break;
    case "stop":
      console.log("stop");
      break;
  }
}


function startTimer(duration, display){
  let totalSeconds = duration * 60;
  let minutes;
  let seconds;
  setInterval(function() {
    minutes = parseInt(totalSeconds / 60, 10);
    seconds = parseInt(totalSeconds % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = `${minutes}:${seconds}`;
    totalSeconds--;
  }, 1000);
}

const timerObjects = document.querySelectorAll(".change-minutes");
for (let i=0; i<timerObjects.length; i++){
  timerObjects[i].addEventListener("click", timerObjectsHandler);
}
const focusMinutes = document.getElementById("focus-minutes");
const breakMinutes = document.getElementById("break-minutes");

const controlButtons = document.querySelectorAll(".controls");
for (let i=0; i<controlButtons.length; i++){
  controlButtons[i].addEventListener("click", controlButtonsHandler);
}
const timerText = document.getElementById("time");
