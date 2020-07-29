const { execSync } = require("child_process");
const path = require("path");

test("Verify gitignore", () => {
  let status = true;

  const command1 = `cat ${path.resolve(".gitignore")}`;
  const command2 = `cat ${path.resolve("__tests__", ".gitignore")}`;

  const gitignore1 = execSync(command1, { encoding: "utf-8" });
  const gitignore2 = execSync(command2, { encoding: "utf-8" });

  if (gitignore1.trim() == gitignore2.trim()) {
    status = true
  } else {
    status = false
  }

  expect(true).toBe(status);
});
