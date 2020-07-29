const config = require("../vuepress/config");
const fs = require("fs");

test("Verify vuepress config.js", () => {
  let status = true;

  for (let index = 0; index < config.sidebar.length; index++) {
    config.sidebar[index].children.forEach((value) => {
      const fileExists = fs.existsSync(config.sidebar[index].path + value);

      if (fileExists == false) {
        status = false;
      }
    });
  }

  expect(true).toBe(status);
});
