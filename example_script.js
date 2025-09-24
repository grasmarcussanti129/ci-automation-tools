const { exec } = require('child_process');

const runCommand = (command) => {
    if (!command) {
        console.error('No command provided.');
        return;
    }
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${stderr}`);
            return;
        }
        console.log(stdout);
    });
};

const commands = [
    'echo "This is the CI tool!"',
    'ls -l',
];

commands.forEach(runCommand);