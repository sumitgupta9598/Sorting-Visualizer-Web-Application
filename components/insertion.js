async function insertion() {
  const ele = document.querySelectorAll(".bar");
  ele[0].style.background = "green";
  for (let i = 1; i < ele.length; i++) {
    let j = i - 1;
    let key = ele[i].style.height;
    ele[i].style.background = "red";
    await DelayFunc(delay);
    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
      ele[j].style.background = "red";
      ele[j + 1].style.height = ele[j].style.height;
      j--;
      await DelayFunc(delay);
      for (let k = i; k >= 0; k--) {
        ele[k].style.background = "green";
      }
    }
    ele[j + 1].style.height = key;
    ele[i].style.background = "green";
  }
}

const insertionbtn = document.querySelector(".Insertion");
insertionbtn.addEventListener("click", async () => {
  disableBtn();
  await insertion();
  enableBtn();
});
