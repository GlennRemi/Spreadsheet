function drawing() {
  document.querySelector(".draw").addEventListener("click", (draw) => {
    const rowAmount = document.querySelector(".row");
    const collumAmount = document.querySelector(".collum");
    let rowInput = rowAmount.value;
    let collumInput = collumAmount.value;
    document.body.innerHTML = "";

    for (let indexRow = -1; indexRow < rowInput; indexRow++) {
      const lineBreak = document.createElement("br");
      document.body.appendChild(lineBreak);
      for (let indexCollum = -1; indexCollum < collumInput; indexCollum++) {
        const collumList = document.createElement("input");
        collumList.classList.add(`grid-${[indexCollum]}-${[indexRow]}`);
        document.body.appendChild(collumList);
      }
    }
    /* Selecting borders and disabling them*/
    const borderEdit = document.querySelectorAll("input");
    const collumIndex = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const collumIndexArray = collumIndex.split("");
    for (let borderIndex = 0; borderIndex < rowInput; borderIndex++) {
      borderEdit[
        borderIndex + 1
      ].placeholder = `${collumIndexArray[borderIndex]}`;
      borderEdit[borderIndex + 1].background = "rgb(228, 226, 226)";
      borderEdit[borderIndex + 1].disabled = true;
      borderEdit[borderIndex + 1].style.color = "Black";
    }

    for (
      let borderIndex = 1;
      borderIndex < parseInt(collumInput) + 1;
      borderIndex++
    ) {
      const rowSkip = parseInt(rowInput) + 1;
      borderEdit[borderIndex * rowSkip].background = "rgb(228, 226, 226)";
      borderEdit[borderIndex * rowSkip].disabled = true;
      borderEdit[borderIndex * rowSkip].style.color = "Black";
      borderEdit[borderIndex * rowSkip].placeholder = `${borderIndex}`;
    }
    /* First border block */
    const firstBlock = document.querySelector(".grid--1--1");
    firstBlock.placeholder = "Spreadsheet";
    firstBlock.style.color = "Black";
    firstBlock.background = "rgb(228, 226, 226)";
    firstBlock.disabled = true;
  });
}
