// function calculate() {
//   for (let i = 0; i < userCellId[0].length; i++) {
//     let tempCellValue = userCellId[1][i].toString();
//     if (tempCellValue != "") {
//       for (let i2 = 0; i2 < userCellId[0].length; i2++) {
//         if (tempCellValue.includes(`${userCellId[0][i2]}`)) {
//           console.log(tempCellValue.includes(userCellId[0][i2]));
//           userCellId[2][i].replace(userCellId[0][i2], userCellId[1][i2]);
//           console.log(
//             userCellId[2][i].replace(userCellId[0][i2], userCellId[1][i2])
//           );
//         }
//       }
//       if (tempCellValue.charAt(0) === "=") {
//         if (
//           tempCellValue.includes("+") ||
//           tempCellValue.includes("-") ||
//           tempCellValue.includes("*") ||
//           tempCellValue.includes("/")
//         ) {
//           userCellId[2].splice(
//             [i],
//             1,
//             `${eval(tempCellValue.replace("=", ""))}`
//           );
//         }
//       }
//     }
//   }
// }

function calculate() {
  for (let i = 0; i < userCellId[0].length; i++) {
    let tempCellValue = userCellId[1][i].toString();
    if (tempCellValue != "") {
      if (tempCellValue.charAt(0) === "=") {
        if (
          tempCellValue.includes("+") ||
          tempCellValue.includes("-") ||
          tempCellValue.includes("*") ||
          tempCellValue.includes("/")
        ) {
          let userCellIdCord = userCellId[1][i];
          userCellId[2].splice(
            [i],
            1,
            `${eval(userCellIdCord.replace("=", ""))}`
          );
        }
      }
    }
  }
}
