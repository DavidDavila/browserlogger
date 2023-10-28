import { WebkitConsoleLogger } from './core/classes/console';

 
export class WebkitLogger {
	private static logger: any[] = [WebkitConsoleLogger];
	constructor() {}

	public static debug(message: string, ...args: any[]) {
		WebkitLogger.logger.forEach((logger) => logger.debug(message, ...args));
	}

	public static info(message: string, ...args: any[]) {
		WebkitLogger.logger.forEach((logger) => logger.info(message, ...args));
	}

	public static warn(message: string, ...args: any[]) {
		WebkitLogger.logger.forEach((logger) => logger.warn(message, ...args));
	}

	public static error(message: string, ...args: any[]) {
		WebkitLogger.logger.forEach((logger) => logger.error(message, ...args));
	}
}
