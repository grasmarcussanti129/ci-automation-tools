const { exec } = require('child_process');

const runCommand = (command) => {
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
