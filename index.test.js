const request = require("supertest");
const app = require("./index");

test("GET / should return application message", async () => {
    const response = await request(app).get("/");

    expect(response.text).toBe(
        "Hello CI/CD Application is Running!"
    );
});

