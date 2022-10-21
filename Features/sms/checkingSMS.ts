import { CronJob } from "cron";
import { checkAndUpdateSmsStatus } from "./sms";

export default new CronJob(
	'*/1 * * * *',
	checkAndUpdateSmsStatus,
	null,
	false,
	'America/Los_Angeles'
); 

