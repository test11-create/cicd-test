const greet = require("./index");

test("returns greeting message", () => {
    expect(greet()).toBe("Hello CI/CD!");
});