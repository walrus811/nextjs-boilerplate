if (process.argv.length < 3) {
  console.log(
    "you must specify name like ex) node set-name.js your-package-name"
  );
  return;
}

const inputName = process.argv[2];

if (!inputName) {
  console.log(`you must input name to use`);
  return;
}

let package = require("../package.json");
package.name = inputName;

const fs = require("fs");

const packageData = JSON.stringify(package, null, 2);
fs.writeFileSync("package.json", packageData);
console.log(`name is changed to ${inputName}`);
