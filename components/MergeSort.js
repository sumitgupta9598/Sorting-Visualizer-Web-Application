async function merge(ele, low, mid, high) {
  const n1 = mid - low + 1;
  const n2 = high - mid;
  let left = [];
  let right = [];

  for (let i = 0; i < n1; i++) {
    await DelayFunc(delay);
    ele[low + i].style.background = "orange";
    left[i] = ele[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await DelayFunc(delay);
    ele[mid + 1 + i].style.background = "yellow";
    right[i] = ele[mid + 1 + i].style.height;
  }
  await DelayFunc(delay);
  let i = 0;
  let j = 0;
  let k = low;
  while (i < n1 && j < n2) {
    await DelayFunc(delay);
    if (parseInt(left[i]) <= parseInt(right[j])) {
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
      } else {
        ele[k].style.background = "lightgreen";
      }
      ele[k++].style.height = left[i++];
    } else {
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
      } else {
        ele[k].style.background = "lightgreen";
      }
      ele[k++].style.height = right[j++];
    }
  }
  while (i < n1) {
    await DelayFunc(delay);
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "lightgreen";
    }
    ele[k++].style.height = left[i++];
  }
  while (j < n2) {
    await DelayFunc(delay);
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "lightgreen";
    }
    ele[k++].style.height = right[j++];
  }
}

async function mergeSort(ele, l, r) {
  if (l < r) {
    const mid = Math.floor((l + r) / 2);
    await mergeSort(ele, l, mid);
    await mergeSort(ele, mid + 1, r);
    await merge(ele, l, mid, r);
  }
}

const mergebtn = document.querySelector(".Merge");
mergebtn.addEventListener("click", async () => {
  let ele = document.querySelectorAll(".bar");
  disableBtn();
  await mergeSort(ele, 0, ele.length - 1);
  enableBtn();
});
