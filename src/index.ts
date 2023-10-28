import { BrowserConsoleLogger } from './core/classes/console';

 
export class BrowserLogger {
	private static logger: any[] = [BrowserConsoleLogger];
	constructor() {}

	public static debug(message: string, ...args: any[]) {
		BrowserLogger.logger.forEach((logger) => logger.debug(message, ...args));
	}

	public static info(message: string, ...args: any[]) {
		BrowserLogger.logger.forEach((logger) => logger.info(message, ...args));
	}

	public static warn(message: string, ...args: any[]) {
		BrowserLogger.logger.forEach((logger) => logger.warn(message, ...args));
	}

	public static error(message: string, ...args: any[]) {
		BrowserLogger.logger.forEach((logger) => logger.error(message, ...args));
	}
}
