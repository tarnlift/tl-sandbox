/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { type } from "os";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Enter a URL to generate QR code:",
    },
  ])
  .then((answers) => {
    const qrImage = qr.image(answers.url, {
      type: "png",
    });
    qrImage.pipe(fs.createWriteStream("qrImage.png"));
    fs.writeFile("URL.txt", answers.url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
