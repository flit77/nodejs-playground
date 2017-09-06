const { spawn } = require('child_process');

const child = spawn('uname -a');

process.stdin.pipe(child.stdin)
child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});
