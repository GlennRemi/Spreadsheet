function drawing() {
  document.querySelector(".draw").addEventListener("click", (draw) => {
    const rowAmount = document.querySelector(".row");
    const collumAmount = document.querySelector(".collum");
    let rowInput = rowAmount.value;
    let collumInput = collumAmount.value;
    document.body.innerHTML = "";

    for (let indexRow = -1; indexRow < rowInput; indexRow++) {
      const lineBreak = document.createElement("div");
      lineBreak.classList.add("linebreak");
      document.body.appendChild(lineBreak);
      for (let indexCollum = -1; indexCollum < collumInput; indexCollum++) {
        const collumList = document.createElement("input");
        collumList.classList.add(`grid-${[indexCollum]}-${[indexRow]}`);
        collumList.classList.add("grid");
        collumList.style.width = "80px";
        lineBreak.appendChild(collumList);
      }
    }
    /* Selecting borders and disabling them with number/letter ID for user*/
    const borderEdit = document.querySelectorAll("input");
    const collumIndex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const collumIndexArray = collumIndex.split("");
    for (let borderIndex = 0; borderIndex < collumInput; borderIndex++) {
      borderEdit[
        borderIndex + 1
      ].placeholder = `${collumIndexArray[borderIndex]}`;
      borderEdit[borderIndex + 1].background = "rgb(228, 226, 226)";
      borderEdit[borderIndex + 1].disabled = true;
      borderEdit[borderIndex + 1].style.color = "Black";
      borderEdit[borderIndex + 1].removeAttribute("class");
    }

    for (
      let borderIndex = 1;
      borderIndex < parseInt(rowInput) + 1;
      borderIndex++
    ) {
      const rowSkip = parseInt(collumInput) + 1;
      borderEdit[borderIndex * rowSkip].background = "rgb(228, 226, 226)";
      borderEdit[borderIndex * rowSkip].disabled = true;
      borderEdit[borderIndex * rowSkip].style.color = "Black";
      borderEdit[borderIndex * rowSkip].placeholder = `${borderIndex}`;
      borderEdit[borderIndex * rowSkip].removeAttribute("class");
    }
    /* First border block */
    const firstBlock = document.querySelector(".grid--1--1");
    firstBlock.placeholder = "Spreadsheet";
    firstBlock.style.color = "Black";
    firstBlock.background = "rgb(228, 226, 226)";
    firstBlock.disabled = true;
    firstBlock.removeAttribute("class");

    /* Listner on cell */
    const cellTracker = document.querySelectorAll(".grid");
    let cellValueArray = new Array(cellTracker.length);
    for (
      let userCellIndex = 0;
      userCellIndex < cellTracker.length;
      userCellIndex++
    ) {
      cellTracker[userCellIndex].value;
      cellTracker[userCellIndex].addEventListener("keyup", function () {
        console.log(cellTracker[userCellIndex].value);
        cellValueArray.splice(
          userCellIndex,
          1,
          cellTracker[userCellIndex].value
        );
      });
    }

    /* debug button */
    const deBuggy = document.createElement("button");
    deBuggy.classList.add("debugcheck");
    deBuggy.innerText = "debug me";
    document.body.appendChild(deBuggy);
    document
      .querySelector(".debugcheck")
      .addEventListener("click", function () {
        console.log(`test + ${cellValueArray}`);
        console.log(cellTracker.length);
      });

    return cellTracker;
  });
}
