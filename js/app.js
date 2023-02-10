let previewBox = document.querySelector(".preview-box");
let previewElement = document.querySelector(".preview-element");
let topLeftPoint = document.querySelector(".point.top-left");
let topRightPoint = document.querySelector(".point.top-right");
let bottomRightPoint = document.querySelector(".point.bottom-right");
let bottomLeftPoint = document.querySelector(".point.bottom-left");
let outputTextArea = document.querySelector("textarea.css-output")

let allPoints = document.querySelectorAll(".point");
let borderRadiusValue = ["0%", "0%", "0%", "0%"];

allPoints.forEach((el) => {
  el.addEventListener("input", () => {
    if (el === topLeftPoint) {
      borderRadiusValue[0] = `${el.value}%`;
    }
    if (el === topRightPoint) {
      borderRadiusValue[1] = `${el.value}%`;
    }
    if (el === bottomRightPoint) {
      borderRadiusValue[2] = `${el.value}%`;
    }
    if (el === bottomLeftPoint) {
      borderRadiusValue[3] = `${el.value}%`;
    }
    previewElement.style = `border-radius: ${borderRadiusValue.join(" ")}`;
    outputTextArea.innerHTML = `border-radius: ${borderRadiusValue.join(" ")}`;
  });
});

// let topLeftDown;
// topLeftPoint.addEventListener('mousedown', () => {
//   topLeftDown = true;
// });
// topLeftPoint.addEventListener('mouseup', () => {
//   topLeftDown = false;
// });
// previewBox.addEventListener('mousemove', (e) => {
//   if (topLeftDown && (e.clientY - previewBox.getClientRects()[0].top) >= 0 && e.clientY - previewBox.getClientRects()[0].top < (300 - 20)) {
//     topLeftPoint.style.top = `${e.clientY - previewBox.getClientRects()[0].top}px`
//     topLeftPoint.style.left = `${e.clientX - previewBox.getClientRects()[0].left - 10}px`
//   }
// });


let copyBtn = document.querySelector("button.copy");

copyBtn.addEventListener("click", () => {
  outputTextArea.select();
  document.execCommand("copy");
});
