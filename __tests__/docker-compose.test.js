const { execSync } = require("child_process");
const path = require("path");

test("Verify docker compose", async () => {
  let status = true;

  const command = `docker-compose -f ${path.resolve("docker-compose.yaml" )} config `;

  try {
    await execSync(command, { encoding: "utf-8" });
    status = true;
  } catch (error) {
    status = false;
  }
  expect(true).toBe(status);

});
