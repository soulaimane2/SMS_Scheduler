import { CronJob } from "cron";
import { getSchedules } from "./scheduleFunc";

export default new CronJob(
	'*/1 * * * *',
	getSchedules,
	null,
	false,
	'America/Los_Angeles'
); 

