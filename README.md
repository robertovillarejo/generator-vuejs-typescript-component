# generator-vuejs-typescript-component [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A Yeoman generator for a new VueJS component with typescript

## Installation

First, use the CONACYT npm registry.
```bash
npm config set registry https://artifacts.ccd.conacyt.mx/content/groups/npm/
```

Then, install [Yeoman](http://yeoman.io) and generator-vuejs-typescript-component using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-vuejs-typescript-component
```

## Usage
Generate your new project:

```bash
yo vuejs-typescript-component
```

## Generated project
```
├── babel.config.js         # Babel configuration
├── bili.config.ts          # Bili (a bundler) configuration
├── example                 # A example of use of the component
│   ├── App.vue
│   ├── main.ts
│   ├── shims-tsx.d.ts
│   └── shims-vue.d.ts
├── package.json
├── README.md
├── src                     # The source folder
│   ├── foo.component.ts    # The component in typescript
│   ├── foo.component.vue   # The Vue component
│   ├── index.ts            # Exports the component and the install function
│   ├── shims-tsx.d.ts
│   └── shims-vue.d.ts
└── tsconfig.json           # The Typescript configuration
```

## License

MIT © [Roberto Villarejo Martínez]()


[npm-image]: https://badge.fury.io/js/generator-vuejs-typescript-component.svg
[npm-url]: https://npmjs.org/package/generator-vuejs-typescript-component
[travis-image]: https://travis-ci.com/CONACYT/generator-vuejs-typescript-component.svg?branch=master
[travis-url]: https://travis-ci.com/CONACYT/generator-vuejs-typescript-component
[daviddm-image]: https://david-dm.org/CONACYT/generator-vuejs-typescript-component.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/CONACYT/generator-vuejs-typescript-component
[coveralls-image]: https://coveralls.io/repos/CONACYT/generator-vuejs-typescript-component/badge.svg
[coveralls-url]: https://coveralls.io/r/CONACYT/generator-vuejs-typescript-component
