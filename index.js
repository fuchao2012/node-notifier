const nn = require('node-notifier')
const nc = new nn.NotificationCenter();
const answerFromHeart = 'Yes'
nc.notify({
	title: 'hello fuchao',
	message: 'Do you love mona?',
	// closeLabel: 'Absolutely not',
	// actions: answerFromHeart
	reply: true
}, (err, res, meta) => {
	if (err) throw err;
	if (meta.activationValue !== answerFromHeart) {
		return;
	}
	console.log('You need connect her now!')
})
	.on('replied', (obj, opt, meta) => {
		console.log('I ask do you love mona?')
		console.log('you said', meta.activationValue)
	})
