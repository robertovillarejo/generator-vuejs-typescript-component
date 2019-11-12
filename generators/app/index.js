"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const _ = require("lodash");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`
      Welcome to the mind-blowing ${chalk.red('generator-vuejs-typescript-component')} generator!
      `)
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "The name of your component"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.nameSnake = _.kebabCase(this.props.name);
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath("src/shims-tsx.d.ts"),
      this.destinationPath("src/shims-tsx.d.ts")
    );
    this.fs.copy(
      this.templatePath("src/shims-vue.d.ts"),
      this.destinationPath("src/shims-vue.d.ts")
    );
    this.fs.copy(
      this.templatePath("src/shims-tsx.d.ts"),
      this.destinationPath("example/shims-tsx.d.ts")
    );
    this.fs.copy(
      this.templatePath("src/shims-vue.d.ts"),
      this.destinationPath("example/shims-vue.d.ts")
    );
    this.fs.copy(
      this.templatePath("tsconfig.json"),
      this.destinationPath("tsconfig.json")
    );
    this.fs.copy(
      this.templatePath("babel.config.js"),
      this.destinationPath("babel.config.js")
    );
    this.fs.copyTpl(
      this.templatePath("bili.config.ts"),
      this.destinationPath("bili.config.ts"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath("README.md"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("src/index.ts"),
      this.destinationPath("src/index.ts"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath(`src/ComponentName.component.ts`),
      this.destinationPath(`src/${this.props.nameSnake}.component.ts`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("src/ComponentNameComponent.vue"),
      this.destinationPath(`src/${this.props.nameSnake}.component.vue`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("example/App.vue"),
      this.destinationPath("example/App.vue"),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("example/main.ts"),
      this.destinationPath("example/main.ts"),
      this.props
    );
  }

  install() {
    //this.installDependencies();
  }
};