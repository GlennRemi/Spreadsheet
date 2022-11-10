// let cellValueArray = ["=4+2", "=5*2", 10, "a23", "10/2", "=10-2"];

// function calulate() {
//   for (let i = 0; i < cellValueArray.length; i++)
//     if (cellValueArray[i].toString().charAt(0) === "=") {
//       if (cellValueArray[i].toString()) {
//         if (
//           cellValueArray[i].toString().includes("+") ||
//           cellValueArray[i].toString().includes("-") ||
//           cellValueArray[i].toString().includes("*") ||
//           cellValueArray[i].toString().includes("/")
//         ) {
//           console.log(`true ${i}`);
//           cellValueArray.splice(i, 1, eval(cellValueArray[i].replace("=", "")));
//         }
//       }
//     } else {
//       console.log(`false ${i}`);
//     }
// }

// calulate();
// console.log(cellValueArray);
