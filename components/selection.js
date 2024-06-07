async function selection() {
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    let idx = i;

    ele[i].style.background = "blue";
    for (let j = i + 1; j < ele.length; j++) {
      ele[j].style.background = "red";

      await DelayFunc(delay);
      if (parseInt(ele[j].style.height) < parseInt(ele[idx].style.height)) {
        if (idx !== i) {
          ele[idx].style.background = "yellow";
        }
        idx = j;
      } else {
        ele[j].style.background = "yellow";
      }
    }
    await DelayFunc(delay);
    swap(ele[idx], ele[i]);

    ele[idx].style.background = "yellow";

    ele[i].style.background = "green";
  }
}

const selectionbtn = document.querySelector(".Selection");
selectionbtn.addEventListener("click", async () => {
  disableBtn();
  await selection();
  enableBtn();
});
