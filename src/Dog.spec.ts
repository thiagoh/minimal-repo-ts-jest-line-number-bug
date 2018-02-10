// const mock = require("mock-fs");
import mock from "mock-fs";
import Dog from "./Dog";

describe("Dog", () => {
  beforeAll(() => {
    mock({
      "path/to/file.txt": "my text content"
    });
  });

  afterAll(() => {
    mock.restore();
  });

  test("should woof", () => {
    const dog = new Dog();
    expect(dog.woof()).toBe("Woof!____ SHOULD FAIL AND DISPLAY LINE NUMBER 19");
  });
});
