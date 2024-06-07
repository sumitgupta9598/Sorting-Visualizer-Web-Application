let delay = 150;
let viewportWidth = window.innerWidth;
let arrSize = document.querySelector("#sizeRange");
let speedSlider = document.querySelector("#speedRange");

arrSize.addEventListener("input", () => {
  createNewArray(parseInt(arrSize.value));
});

speedSlider.addEventListener("input", () => {
  delay = 400 - parseInt(speedSlider.value);
});

let arr = [];
createNewArray();

function swap(el1, el2) {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

function disableBtn() {
  document.querySelector(".Bubble").disabled = true;
  document.querySelector(".Selection").disabled = true;
  document.querySelector(".Insertion").disabled = true;
  document.querySelector(".Quick").disabled = true;
  document.querySelector(".Merge").disabled = true;
  document.querySelector(".Array").disabled = true;
  document.querySelector("#speedRange").disabled = true;
  document.querySelector("#sizeRange").disabled = true;
}

function enableBtn() {
  document.querySelector(".Bubble").disabled = false;
  document.querySelector(".Selection").disabled = false;
  document.querySelector(".Insertion").disabled = false;
  document.querySelector(".Quick").disabled = false;
  document.querySelector(".Merge").disabled = false;
  document.querySelector(".Array").disabled = false;
  document.querySelector("#speedRange").disabled = false;
  document.querySelector("#sizeRange").disabled = false;
}

function DelayFunc(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, delay);
  });
}

function createNewArray(noBars = 15) {
  deletearr();
  arr = [];

  for (var i = 0; i < noBars; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }

  const bars = document.querySelector("#bars");

  for (var i = 0; i < noBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${arr[i] * 3}px`;
    bar.style.width = `${viewportWidth / noBars}%`;
    bar.classList.add("bar");
    bar.classList.add("indBar");
    bars.appendChild(bar);
  }
}

function deletearr() {
  const bar = document.querySelector("#bars");
  bar.innerHTML = "";
}

const newArray = document.querySelector(".Array");
newArray.addEventListener("click", () => {
  enableBtn();
  createNewArray(arrSize.value);
});
