const http = require('http');
const async_hooks = require('async_hooks');
const fs = require('fs');

const asyncHook = async_hooks.createHook({ init, before, after, destroy });

// asyncHook being defined in code snippet above
asyncHook.enable();
http
  .createServer(function(req, res) {
    res.end('hello qts');
  })
  .listen(8079);

function init(asyncId, type, triggerId) {
  // console.log(1, `${type} \n`);
  fs.writeSync(1, `${type} \n`);
}

function before(asyncId) {}
function after(asyncId) {}
function destroy(asyncId) {}
