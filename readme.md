# Clase BrowserLogger

La clase `BrowserLogger` es una herramienta de registro (logging) para aplicaciones web en navegadores. Permite registrar mensajes de depuración, información, advertencias y errores en la consola del navegador. Esta clase es parte de un sistema de registro más amplio que puede incluir diferentes tipos de registradores, como `BrowserConsoleLogger`.

## Uso

Puedes utilizar la clase `BrowserLogger` para registrar mensajes en la consola del navegador de la siguiente manera:

```javascript
// Importa la clase BrowserLogger
import { BrowserLogger } from 'browserlogger';

// Registra un mensaje de depuración
BrowserLogger.debug('Este es un mensaje de depuración.');

// Registra un mensaje de información
BrowserLogger.info('Este es un mensaje de información.');

// Registra una advertencia
BrowserLogger.warn('Este es un mensaje de advertencia.');

// Registra un error
BrowserLogger.error('Este es un mensaje de error.');

````
## Configuración
La clase BrowserLogger admite diferentes tipos de registradores. En el código proporcionado, se utiliza BrowserConsoleLogger como registrador predeterminado. Puedes personalizar los registradores que deseas utilizar editando el array logger en la clase.

```javascript
 
private static logger: any[] = [BrowserConsoleLogger];
 // Puedes agregar más registradores a este array según tus necesidades.
````
## Contribución
Si deseas contribuir a esta clase o mejorarla, siéntete libre de hacerlo. Puedes enviar solicitudes de extracción (pull requests) o informar sobre problemas (issues) en este repositorio.