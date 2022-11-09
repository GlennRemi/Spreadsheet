function initiate() {
  /* Row input */
  const initiateRowInput = document.createElement("input");
  initiateRowInput.classList.add("row");
  initiateRowInput.placeholder = "Insert row amount";
  initiateRowInput.type = "number";
  initiateRowInput.min = "1";
  initiateRowInput.max = "50";

  /* Collum input*/
  const initiateCollumInput = document.createElement("input");
  initiateCollumInput.classList.add("collum");
  initiateCollumInput.placeholder = "Insert collum amount";
  initiateCollumInput.type = "number";
  initiateCollumInput.min = "1";
  initiateCollumInput.max = "26";

  /* Button input*/
  const initiateBtnInput = document.createElement("button");
  initiateBtnInput.classList.add("draw");
  initiateBtnInput.innerText = "Draw spreadsheet";

  /* dome manipulation */
  document.body.appendChild(initiateRowInput);
  document.body.appendChild(initiateCollumInput);
  document.body.appendChild(initiateBtnInput);
  document.body.style.background = "black";
  document.body.style.overflowX = "scroll";
}
