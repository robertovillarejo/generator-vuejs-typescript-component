"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-vuejs-typescript-component:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ name: "some great" });
  });

  it("creates files", () => {
    // Root project files
    assert.file(["babel.config.js"]);
    assert.file(["bili.config.ts"]);
    assert.file(["package.json"]);
    assert.file(["README.md"]);
    assert.file(["tsconfig.json"]);
    // Source folder files
    assert.file(["src/some-great.component.ts"]);
    assert.file(["src/some-great.component.vue"]);
    assert.file(["src/index.ts"]);
    assert.file(["src/shims-tsx.d.ts"]);
    assert.file(["src/shims-vue.d.ts"]);
    // Example folder files
    assert.file(["example/App.vue"]);
    assert.file(["example/main.ts"]);
  });
});
