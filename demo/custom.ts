import { BrowserLogger } from '../src/index';

const logger = new BrowserLogger();
BrowserLogger.debug('Esto es un mensaje de debug');
BrowserLogger.info('Info message');
BrowserLogger.warn('Warning message');
BrowserLogger.error('Error message');