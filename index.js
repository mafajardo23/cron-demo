let greeting = "Hello, from Node";
console.log(greeting);

// require the package
var CronJob = require('cron').CronJob;
// create a new instance
var job = new CronJob(
	'5 0 * 8 *',
	function() {
		console.log('The local time is: '+ new Date().toLocaleString());
	},
	null, true, 'America/New_York'
);