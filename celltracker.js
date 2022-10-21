function cellTracker() {
  document.querySelector(".debugcheck").addEventListener("click", () => {
    console.log(cellTracker);
  });

  const cellArray = document.querySelectorAll("input");
  console.log(cellArray);
  for (let cellIndex = 0; cellIndex < cellArray; cellIndex++) {
    console.log(cellArray[cellIndex]);
  }
}

/* spread syntac */
