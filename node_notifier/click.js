const notifier = require('node-notifier');

notifier.notify(
  {
    title: 'My awesome title',
    message: 'Hello from node, Mr. User!',
    wait: true // Wait with callback, until user action is taken against notification
  },
  function(err, response) {
    // Response is response from notification
  }
);

notifier.on('click', (obj, options) => {
  const spawn = require('child_process').spawn;
  const cmd = spawn('open', ['https://davidwalsh.name']);
});

notifier.on('close', (obj, options) => {});
