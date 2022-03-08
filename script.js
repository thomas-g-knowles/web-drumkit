function playSound(drumType) {
  if (typeof drumType === "string") {
    drumAudio = drums[`${drumType}Audio`];
  } else {
    drumType.blur();
    drumAudio = drums[`${drumType.id}Audio`];
  }
  if (drumAudio.currentTime !== 0) {
    drumAudio.currentTime = 0;
  }
  drumAudio.play();
}

function playRand(drums) {
  drums.blur();
  rand = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  switch (rand) {
    case 1:
      playSound("boom");
      break;
    case 2:
      playSound("clap");
      break;
    case 3:
      playSound("hihat");
      break;
    case 4:
      playSound("kick");
      break;
    case 5:
      playSound("openhat");
      break;
    case 6:
      playSound("ride");
      break;
    case 7:
      playSound("snare");
      break;
    case 8:
      playSound("tink");
      break;
    case 9:
      playSound("tom");
  }
}

// Sits in the event loop waiting for keypress, then updates page to display its info:
document.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "a":
      playSound("boom");
      break;
    case "s":
      playSound("clap");
      break;
    case "d":
      playSound("hihat");
      break;
    case "f":
    case " ":
      playSound("kick");
      break;
    case "g":
      playSound("openhat");
      break;
    case "h":
      playSound("ride");
      break;
    case "j":
      playSound("snare");
      break;
    case "k":
      playSound("tink");
      break;
    case "l":
      playSound("tom");
  }
});

// Disables all keyboard shortcuts e.g. CTRL + F5 for full functionality and key testing - prevents possible disruption:

document.onkeydown = function (event) {
  return false;
};

// Disables action upon mouse click e.g. context menu for full functionality and mouse testing - prevents possible disruption:

document.addEventListener("contextmenu", (event) => event.preventDefault());

drums = {
  boomAudio: new Audio("sounds/boom.wav"),
  clapAudio: new Audio("sounds/clap.wav"),
  hihatAudio: new Audio("sounds/hihat.wav"),
  kickAudio: new Audio("sounds/kick.wav"),
  openhatAudio: new Audio("sounds/openhat.wav"),
  rideAudio: new Audio("sounds/ride.wav"),
  snareAudio: new Audio("sounds/snare.wav"),
  tinkAudio: new Audio("sounds/tink.wav"),
  tomAudio: new Audio("sounds/tom.wav"),
};
