const { default: inquirer } = require('inquirer');
const chalk = require('chalk');
const { execa } = require('execa');

const { EXPRESS_TEMPLATES, GITHUB_REPO_TEMPLATES } = require('./constants/templates');
const { NODE_FRAMWORKS } = require('./constants/frameworks');

class Generator {
  constructor() {
    this.templates = {
      express: EXPRESS_TEMPLATES,
    };

    this.frameworks = NODE_FRAMWORKS;
    this.githubRepoTemplates = GITHUB_REPO_TEMPLATES;
  }

  async generate() {
    const cmdValues = this.#isCmdMode();

    if (!cmdValues) {
      const answers = await this.#inqiureProjectQuestions();

      this.#generateProject(answers);

      return;
    }

    this.#generateProject(cmdValues);
  }

  async #generateProject(answers) {
    const { name: projectName, framework, template } = answers;

    // 1. Clone template
    await execa('git', [
      'clone', 
      `https://github.com/${this.githubRepoTemplates[template]}`,
      projectName
    ], {
      stdio: 'inherit',
    });

    // 2. Cleanup
    await execa('rm', [
      '-rf', 
      `${projectName}/.git`,
    ]);

    console.log(chalk.green(`\nDone! Run:\ncd ${projectName}\nnpm install`));
  }
  
  async #inqiureProjectQuestions() {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: 'my-app',
        validate: (input) => input.trim().length > 0,
      },
      {
        type: 'list',
        name: 'framework',
        message: 'Framework:',
        choices: this.#mapFrameworks(),
      },
      {
        type: 'list',
        name: 'template',
        message: 'Template:',
        choices: (answers) => this.#mapTemplates(answers.framework),
      },
    ];

    return await inquirer.prompt(questions);
  }

  #mapFrameworks() {
    return this.frameworks.map((framework) => {
      return {
        name: chalk[framework.color].bold(framework.name),
        value: framework.value,
      };
    });
  }

  #mapTemplates(framework) {
    return this.templates[framework].map((template) => {
      return {
        name: template.name,
        value: template.value,
      };
    });
  }

  #isCmdMode() {
    const args = process.argv.reverse().slice(0, 3);
    const projectName = args.find(arg => arg.startsWith('--name='));
    const framework = args.find(arg => arg.startsWith('--framework='));
    const template = args.find(arg => arg.startsWith('--template='));

    if (!projectName && !framework && !template) {
      return null;
    }

    if (!projectName) {
      console.log(`
        ${chalk.red('ERROR')} Project name is required.
        Please follow this pattern when you are using command mode:
        ${chalk.green('npm create @nodex-labs/create --name=my-app --framework=express --template=express-basic')}  
        Falling back to default ${chalk.greenBright.bold('prompt')} mode
      `);

      return null;
    }

    if (!framework) {
      console.log(`
        ${chalk.red('ERROR')} Framework is required.
        Please follow this pattern when you are using command mode:
        ${chalk.green('npm create @nodex-labs/create --name=my-app --framework=express --template=express-basic')}  
        Falling back to default ${chalk.greenBright.bold('prompt')} mode
      `);

      return null;
    }

    if (!template) {
      console.log(`
        ${chalk.red('ERROR')} Template is required.
        Please follow this pattern when you are using command mode:
        ${chalk.green('npm create @nodex-labs/create --name=my-app --framework=express --template=express-basic')}
        Falling back to default ${chalk.greenBright.bold('prompt')} mode
      `);

      return null;
    }

    return {
      name: projectName.split('=')[1],
      framework: framework.split('=')[1],
      template: template.split('=')[1],
    };
  }
}

module.exports = new Generator;
