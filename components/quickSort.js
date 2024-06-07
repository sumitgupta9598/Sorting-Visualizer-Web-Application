async function partition(ele, l, r) {
  let i = l - 1;
  ele[r].style.background = "red";
  for (let j = l; j <= r - 1; j++) {
    ele[j].style.background = "purple";
    await DelayFunc(delay);

    if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
      i++;
      swap(ele[i], ele[j]);
      ele[i].style.background = "orange";
      ele[j].style.background = "orange";
      await DelayFunc(delay);
    } else {
      ele[j].style.background = "pink";
    }
  }
  i++;
  swap(ele[i], ele[r]);
  ele[i].style.background = "green";
  await DelayFunc(delay);

  for (let k = 0; k < ele.length; k++) {
    if (ele[k].style.background != "green") ele[k].style.background = "yellow";
  }

  return i;
}

async function quickSort(ele, l, r) {
  if (l < r) {
    let pivot = await partition(ele, l, r);
    await quickSort(ele, l, pivot - 1);
    await quickSort(ele, pivot + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
      ele[r].style.background = "green";
      ele[l].style.background = "green";
    }
  }
}

const Quickbtn = document.querySelector(".Quick");
Quickbtn.addEventListener("click", async () => {
  let ele = document.querySelectorAll(".bar");
  disableBtn();
  await quickSort(ele, 0, ele.length - 1);
  enableBtn();
});
