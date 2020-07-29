const { execSync } = require("child_process");
const path = require("path");

test("Verify dockerfile", async () => {
  let status = true;

  const commandCreate = `docker build -t unicontrol -f ${path.resolve("Dockerfile" )} .`;
  const commandDelete = "docker image rmi unicontrol ";

  try {
    await execSync(commandCreate, { encoding: "utf-8" });
    await execSync(commandDelete, { encoding: "utf-8" });
    status = true;
  } catch (error) {
    status = false;
  }

  expect(true).toBe(status);
});
