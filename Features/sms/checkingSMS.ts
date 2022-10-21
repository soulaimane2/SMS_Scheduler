import { CronJob } from "cron";

export default new CronJob(
	'*/5 * * * *',
	() => {console.log("checking message status")},
	null,
	false,
	'America/Los_Angeles'
); 

