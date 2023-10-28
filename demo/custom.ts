import { WebkitLogger } from '../src/index';

const logger = new WebkitLogger();
WebkitLogger.debug('Esto es un mensaje de debug');
WebkitLogger.info('Info message');
WebkitLogger.warn('Warning message');
WebkitLogger.error('Error message');