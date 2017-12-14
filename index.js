const nn = require('node-notifier')
const options = {
	title: 'hello fuchao',
	message: 'Do you love mona?',
	closeLabel: 'Absolutely not',
	actions: 'Fucking yes'
	// reply: true
};

new nn.NotificationCenter(options).notify();
new nn.NotifySend(options).notify();
new nn.WindowsToaster(options).notify(options);
new nn.WindowsBalloon(options).notify(options);
new nn.Growl(options).notify(options);
