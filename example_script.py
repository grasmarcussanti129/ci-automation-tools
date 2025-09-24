import subprocess

def run_command(command):
    result = subprocess.run(command, capture_output=True, text=True, shell=False)
    if result.returncode != 0:
        print(f'Error: {result.stderr}')
    else:
        print(result.stdout)

if __name__ == '__main__':
    commands = [
        ['echo', 'This is the CI tool!'],
        ['ls', '-l'],
    ]
    for command in commands:
        run_command(command)