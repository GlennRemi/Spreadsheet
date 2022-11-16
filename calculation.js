function calculate() {
  for (let i = 0; i < userCellId[0].length; i++) {
    /* collects the unmodified/modified cell value */
    let tempCellValue = userCellId[1][i].toString();
    /* Checks if string is empty*/
    if (tempCellValue != "") {
      cordNameToValue(tempCellValue, i);
      mathCalc(tempCellValue, i);
    }
  }
}

/* Changes the usercordinates to the cellvalue */
function cordNameToValue(tempCellValue, i) {
  for (let i2 = 0; i2 < userCellId[0].length; i2++) {
    /* Checks if tempCellValue includes usercordinates */
    if (tempCellValue.includes(userCellId[0][i2].toString())) {
      userCellId[2].splice(
        [i],
        1,
        userCellId[2][i].replace(userCellId[0][i2], userCellId[1][i2])
      );
    }
  }
}

/* Calculation function */
function mathCalc(tempCellValue, i) {
  if (tempCellValue.charAt(0) === "=") {
    if (
      tempCellValue.includes("+") ||
      tempCellValue.includes("-") ||
      tempCellValue.includes("*") ||
      tempCellValue.includes("/")
    ) {
      userCellId[2].splice(
        [i],
        1,
        `${eval(userCellId[2][i].replace("=", ""))}`
      );
    }
  }
}
