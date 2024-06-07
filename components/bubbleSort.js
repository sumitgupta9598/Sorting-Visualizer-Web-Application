async function bubble() {
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length - 1; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      ele[j].style.background = "red";
      ele[j + 1].style.background = "red";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        swap(ele[j], ele[j + 1]);
      }
      await DelayFunc(delay);
      ele[j].style.background = "yellow";
      ele[j + 1].style.background = "yellow";
    }
    ele[ele.length - 1 - i].style.background = "green";
  }
  ele[0].style.background = "green";
}

const Bubblebtn = document.querySelector(".Bubble");
Bubblebtn.addEventListener("click", async () => {
  disableBtn();
  await bubble();
  enableBtn();
});
