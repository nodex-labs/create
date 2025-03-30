<div align="center">
  <img width="80" src="https://github.com/nodex-labs/brand/blob/main/nodex-logo.svg">
  <h1>@nodex-labs/create</h1>
  <p>Blazing-fast Node.js project scaffolding</p>
  <a href="https://www.npmjs.com/package/@nodex-labs/create">
    <img alt="npm" src="https://img.shields.io/npm/v/@nodex-labs/create?color=5865F2&label=latest&logo=npm">
  </a>
  <a href="https://github.com/nodex-labs/create/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%235865F2">
  </a>
</div>

---

## 🚀 Quick Start

Scaffold a new Node.js project in seconds:

```bash
npm create @nodex-labs/nodex
# or 
npx @nodex-labs/create
```

## ✨ Features

- **Zero-config templates** for popular Node.js frameworks
- **Interactive prompts** to customize setup
- **Batteries-included** with best practices pre-configured
<!-- - **TypeScript-ready** out of the box -->

<!-- ## 🛠️ Templates

| Template          | Command                          | Includes                     |
|-------------------|----------------------------------|------------------------------|
| Express Basic     | `--template express-basic`       | Router, error handling       |
| Express MVC       | `--template express-mvc`         | Models, controllers, routes  |
| CLI Tool          | `--template cli`                 | Commander + TypeScript       | -->

<!-- ## 🏗️ Create Custom Templates

1. Make a template folder in your project:
   ```bash
   mkdir -p templates/my-template
   ```
2. Add files with `{{variable}}` placeholders:
   ```js
   // templates/my-template/{{projectName}}.js
   console.log("Welcome to {{projectName}}!");
   ```
3. Reference in `.nodexrc`:
   ```json
   {
     "templates": {
       "my-template": "./templates/my-template"
     }
   }
   ``` -->

<!-- ## 📦 Usage as Dependency

Install as a module for programmatic use:
```bash
npm install @nodex-labs/create
```

```js
import { scaffold } from '@nodex-labs/create';

await scaffold({
  template: 'express-mvc',
  projectName: 'my-app',
  dest: './projects'
});
``` -->

## 🤝 Contributing

1. Fork the repository
2. Add templates to `src/templates/`
3. Submit a PR!

See our [contribution guide](CONTRIBUTION.md) for details.

---

## 📜 License

MIT © [Nodex Labs](https://github.com/nodex-labs)