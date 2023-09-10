const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  try {
    const files = [
      "./dist/user-authorizer/scripts.js",
      "./dist/user-authorizer/runtime-es5.js",
      //   "./dist/angular-web-components-test/polyfills-es5.js",
      "./dist/user-authorizer/main-es5.js"
    ];

    await fs.ensureDir("elements");

    await concat(files, "elements/user-auth.js");
    console.info("Elements created successfully!");
  } catch (err) {
    console.log(err);
  }
})();