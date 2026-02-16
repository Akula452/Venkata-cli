# Venkata-cli

A cross-platform command-line tool that works on Linux and Windows.

## Features

- 🚀 Cross-platform support (Linux, Windows, macOS)
- 📦 Easy to install via npm
- 🛠️ Multiple built-in commands
- 💻 Simple and intuitive interface

## Prerequisites

- Node.js (version 20 or higher)
- npm (comes with Node.js)

## Installation

### Global Installation (Recommended)

Install the CLI globally using npm:

```bash
npm install -g venkata-cli
```

After installation, you can use the `venkata` command from anywhere in your terminal.

### Local Installation for Development

1. Clone the repository:
```bash
git clone https://github.com/Akula452/Venkata-cli.git
cd Venkata-cli
```

2. Install dependencies:
```bash
npm install
```

3. Link the CLI globally:
```bash
npm link
```

## Usage

### Display Help

```bash
venkata --help
```

### Check Version

```bash
venkata --version
```

### Available Commands

#### Hello Command
Say hello to someone:

```bash
venkata hello
# Output: Hello, World!

venkata hello --name "Your Name"
# Output: Hello, Your Name!
```

#### Info Command
Display system information:

```bash
venkata info
```

This shows:
- Operating system platform
- System architecture
- Node.js version
- Current working directory

#### Echo Command
Echo a message with optional text transformations:

```bash
venkata echo "Hello World"
# Output: Hello World

venkata echo "Hello World" --uppercase
# Output: HELLO WORLD

venkata echo "Hello World" --lowercase
# Output: hello world
```

## Platform Compatibility

### Linux
The CLI works natively on all Linux distributions with Node.js installed.

### Windows
The CLI works on Windows through:
- Command Prompt (cmd)
- PowerShell
- Windows Terminal
- Git Bash

### macOS
The CLI also works on macOS.

## Development

### Project Structure

```
Venkata-cli/
├── bin/
│   └── venkata.js    # Main CLI entry point
├── package.json      # Project configuration
├── .gitignore       # Git ignore rules
└── README.md        # This file
```

### Adding New Commands

To add new commands, edit `bin/venkata.js` and add new command definitions using Commander.js syntax:

```javascript
program
  .command('yourcommand')
  .description('Description of your command')
  .action(() => {
    // Your command logic here
  });
```

## Uninstallation

To uninstall the CLI:

```bash
npm uninstall -g venkata-cli
```

If installed via npm link:

```bash
npm unlink -g venkata-cli
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
