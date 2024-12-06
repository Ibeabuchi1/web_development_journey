const fs = require("fs");

// fs.writeFile("message.txt", "NodeJs says Hello", function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log("File has been saved");
// });

fs.writeFile("message.txt", "NodeJs says Hello", (err) => {
  if (err) throw err;
  console.log("File has been saved");
});
