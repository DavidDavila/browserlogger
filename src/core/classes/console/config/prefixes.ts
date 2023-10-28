import { LOG_LEVELS } from '../../../types/levels';

export const CONSOLE_PREFIXES: { [key in LOG_LEVELS]: string } = {
	[LOG_LEVELS.DEBUG]: ' ✎ Debug:',
	[LOG_LEVELS.INFO]: ' ℹ️ Info:',
	[LOG_LEVELS.WARN]: ' ⚠ Warning:',
	[LOG_LEVELS.ERROR]: ' ✖ Error:',
};
