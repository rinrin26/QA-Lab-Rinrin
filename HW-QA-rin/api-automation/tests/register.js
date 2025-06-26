import * as chai from "chai";
const { expect } = chai;

describe("Post register User", function () {
  it("Should create new user", async () => {
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "appliacation/json",
      },
      body: JSON.stringify({
        username: "testing",
        email: "testing@gmail.com",
        password: "testing",
      }),
    });
    const data = response.json();
    console.log(`ini log data ${data}`);
    expect(response.status).to.equal(201);
    expect(data.username).to.include("testing");
  });
});
