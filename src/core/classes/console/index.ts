import { Console } from 'console';
import { LOG_LEVELS } from '../../types/levels';
import { CONSOLE_PREFIXES } from './config/prefixes';
import { CONSOLE_STYLES } from './config/styles';

type ConfigType = {
	styles: typeof CONSOLE_STYLES;
	prefixes: typeof CONSOLE_PREFIXES;
};

export class BrowserConsoleLogger {
	static ENVIRONTMENT = {
		BROWSER: (navigator as any).userAgentData && (navigator as any).userAgentData.brands[0]?.brand,
		PLATFORM: (navigator as any).userAgentData ? (navigator as any).userAgentData.brands[0] : navigator.platform,
		OS: navigator.platform,
		LANGUAGE: navigator.language,
		USER_AGENT: navigator.userAgent,
		VERSION: (navigator as any).userAgentData
			? (navigator as any).userAgentData.brands[0]?.version
			: navigator.appVersion,
	};
	private static config: ConfigType = {
		styles: CONSOLE_STYLES,
		prefixes: CONSOLE_PREFIXES,
	};
	private static logger: any = console;

	public static [LOG_LEVELS.DEBUG](message: string, ...args: any[]) {
		const { style, prefix } = BrowserConsoleLogger.getConfig(LOG_LEVELS.DEBUG);
		BrowserConsoleLogger.drawLog(prefix, message, style, args);
	}

	public static [LOG_LEVELS.INFO](message: string, ...args: any[]) {
		const { style, prefix } = BrowserConsoleLogger.getConfig(LOG_LEVELS.INFO);
		BrowserConsoleLogger.drawLog(prefix, message, style, args);
	}

	public static [LOG_LEVELS.WARN](message: string, ...args: any[]) {
		const { style, prefix } = BrowserConsoleLogger.getConfig(LOG_LEVELS.WARN);
		BrowserConsoleLogger.drawLog(prefix, message, style, args);
	}

	public static [LOG_LEVELS.ERROR](message: string, ...args: any[]) {
		const { style, prefix } = BrowserConsoleLogger.getConfig(LOG_LEVELS.ERROR);
		BrowserConsoleLogger.drawLog(prefix, message, style, args);
	}
	private static getConfig(method: LOG_LEVELS) {
		const {
			styles: { [method]: style },
			prefixes: { [method]: prefix },
		} = this.config;
		return { style, prefix, method };
	}
	private static drawLog(prefix: string, message: any, style: string, args: any[]) {
		const { log, groupCollapsed, groupEnd, trace } = console;

		const performance = window.performance as any;
		groupCollapsed(`%c${prefix} ${message}`, style, ...args);
		log('%cMensaje: ', 'font-weight: bold;', [message, ...args]);
		log('%cFecha: ', 'font-weight: bold;', new Date().toLocaleString());

		groupCollapsed('%cEntorno: ', 'font-weight: bold;');
		log('%cNavegador: ', 'font-weight: bold;', BrowserConsoleLogger.ENVIRONTMENT.BROWSER);
		log('%cVersión: ', 'font-weight: bold;', BrowserConsoleLogger.ENVIRONTMENT.VERSION);
		log('%cLenguaje: ', 'font-weight: bold;', BrowserConsoleLogger.ENVIRONTMENT.LANGUAGE);
		log('%cUserAgent: ', 'font-weight: bold;', BrowserConsoleLogger.ENVIRONTMENT.USER_AGENT);
		log('%cSistema Operativo: ', 'font-weight: bold;', BrowserConsoleLogger.ENVIRONTMENT.OS);
		groupEnd();
		if (performance.memory) {
			groupCollapsed('%cMemoria: ', 'font-weight: bold;');
			log('%cMemoria usada: ', 'font-weight: bold;', performance.memory.usedJSHeapSize / (1024 * 1024) + ' MB');
			log('%cLímite de memoria: ', 'font-weight: bold;', performance.memory.jsHeapSizeLimit / (1024 * 1024) + ' MB');
			groupEnd();
		}
		groupCollapsed('%cTraza: ', 'font-weight: bold;');
		trace();
		groupEnd();
		groupEnd();
	}
}
