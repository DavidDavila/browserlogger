import { LOG_LEVELS } from '../../../types/levels';
const basicStyles = `border: 1px dashed;
	
	border-radius: 4px;
    padding:4px;`;
export const CONSOLE_STYLES: { [key in LOG_LEVELS]: string } = {
	[LOG_LEVELS.DEBUG]: `${basicStyles} background-color: rgb(230 240 253);`,
	[LOG_LEVELS.INFO]: `${basicStyles}  background-color: rgb(226 246 226);`,
	[LOG_LEVELS.WARN]: `${basicStyles}  background-color: rgb(239 237 226);`,
	[LOG_LEVELS.ERROR]: `${basicStyles} background-color: rgb(255 225 223);`,
};
