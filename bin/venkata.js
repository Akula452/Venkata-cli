#!/usr/bin/env node

const { program } = require('commander');
const packageJson = require('../package.json');

program
  .name('venkata')
  .description('Venkata CLI - A cross-platform command-line tool')
  .version(packageJson.version);

// Hello command
program
  .command('hello')
  .description('Say hello')
  .option('-n, --name <name>', 'Name to greet', 'World')
  .action((options) => {
    console.log(`Hello, ${options.name}!`);
  });

// Info command
program
  .command('info')
  .description('Display system information')
  .action(() => {
    console.log('System Information:');
    console.log(`  Platform: ${process.platform}`);
    console.log(`  Architecture: ${process.arch}`);
    console.log(`  Node Version: ${process.version}`);
    console.log(`  Current Directory: ${process.cwd()}`);
  });

// Echo command
program
  .command('echo <message>')
  .description('Echo a message')
  .option('-u, --uppercase', 'Convert to uppercase')
  .option('-l, --lowercase', 'Convert to lowercase')
  .action((message, options) => {
    let output = message;
    if (options.uppercase) {
      output = output.toUpperCase();
    } else if (options.lowercase) {
      output = output.toLowerCase();
    }
    console.log(output);
  });

program.parse(process.argv);

// Show help if no command is provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
