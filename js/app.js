let previewElement = document.querySelector(".preview-element");
let outputTextArea = document.querySelector("textarea.css-output");
let borderRadiusValue = ["0%", "0%", "0%", "0%"];

// Make Random Values Appear On Load
function generateRandomBorders() {
  function getRandomNumInRange(start, range) {
    let number = Math.floor(Math.random() * range + start);

    while (number > range) {
      number = Math.floor(Math.random() * range + start);
    }

    return number;
  }

  for (let i = 0; i < borderRadiusValue.length; i++) {
    borderRadiusValue[i] = `${getRandomNumInRange(0, 100)}%`;
  }

  previewElement.style = `border-radius: ${borderRadiusValue.join(" ")}`;
  outputTextArea.innerHTML = `border-radius: ${borderRadiusValue.join(" ")}`;

  let allTracks = document.querySelectorAll(".track");
  for (let i = 0; i < allTracks.length; i++) {
    let point = allTracks[i].firstElementChild;

    if (allTracks[i].classList.contains("vertical-track")) {
      point.style.top = `${parseInt(borderRadiusValue[i]) - 6}%`;
    } else {
      point.style.left = `${parseInt(borderRadiusValue[i]) - 6}%`;
    }
  }
}

window.onload = generateRandomBorders;

// Vertical Tracks Logic
let verticalTracks = document.querySelectorAll(".vertical-track");
function verticalTracksSlide(trackList) {
  trackList.forEach((track) => {
    let point = track.firstElementChild;
    let isMouseDown;

    track.addEventListener("mousedown", (e) => {
      if (e.target === point) {
        isMouseDown = true;
      }
    });

    track.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    track.addEventListener("mouseleave", () => {
      isMouseDown = false;
    });

    track.addEventListener("mousemove", (e) => {
      let axis = e.pageY - track.getBoundingClientRect().top - 12;
      let axisPrecentage = Math.round((axis * 100) / 200);

      if (isMouseDown === true && axis >= 0 && axis <= 200) {
        point.style.top = `${axis}px`;

        if (track.classList.contains("track-left")) {
          borderRadiusValue[0] = `${axisPrecentage}%`;
        } else {
          borderRadiusValue[2] = `${axisPrecentage}%`;
        }

        previewElement.style = `border-radius: ${borderRadiusValue.join(" ")}`;
        outputTextArea.innerHTML = `border-radius: ${borderRadiusValue.join(
          " ",
        )}`;
      }
    });
  });
}

verticalTracksSlide(verticalTracks);

// Horizental Tracks Logic
let horizentalTracks = document.querySelectorAll(".horizental-track");
function horizentalTracksSlide(trackList) {
  trackList.forEach((track) => {
    let point = track.firstElementChild;
    let isMouseDown;

    track.addEventListener("mousedown", (e) => {
      if (e.target === point) {
        isMouseDown = true;
      }
    });

    track.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    track.addEventListener("mouseleave", () => {
      isMouseDown = false;
    });

    track.addEventListener("mousemove", (e) => {
      let axis = e.pageX - track.getBoundingClientRect().left - 12;
      let axisPrecentage = Math.round((axis * 100) / 200);

      if (isMouseDown === true && axis >= 0 && axis <= 200) {
        point.style.left = `${axis}px`;

        if (track.classList.contains("track-top")) {
          borderRadiusValue[1] = `${axisPrecentage}%`;
        } else {
          borderRadiusValue[3] = `${axisPrecentage}%`;
        }

        previewElement.style = `border-radius: ${borderRadiusValue.join(" ")}`;
        outputTextArea.innerHTML = `border-radius: ${borderRadiusValue.join(
          " ",
        )}`;
      }
    });
  });
}

horizentalTracksSlide(horizentalTracks);

// Copy Feature
let copyBtn = document.querySelector("button.copy");
let copiedMsgBox = document.querySelector(".copied-msg");

copyBtn.addEventListener("click", () => {
  outputTextArea.select();
  document.execCommand("copy");

  copiedMsgBox.style.top = `1rem`;
  setTimeout(() => (copiedMsgBox.style.top = "-100px"), 2e3);
});

// Generate Random Border Values Onclick
let randomizeBtn = document.querySelector("button.random");

randomizeBtn.addEventListener("click", generateRandomBorders);
