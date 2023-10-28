# Clase WebkitLogger

La clase `WebkitLogger` es una herramienta de registro (logging) para aplicaciones web en navegadores. Permite registrar mensajes de depuración, información, advertencias y errores en la consola del navegador. Esta clase es parte de un sistema de registro más amplio que puede incluir diferentes tipos de registradores, como `WebkitConsoleLogger`.


![Demo](https://raw.githubusercontent.com/DavidDavila/webkit-logger/main/img.png)

## Uso

Puedes utilizar la clase `WebkitLogger` para registrar mensajes en la consola del navegador de la siguiente manera:

```javascript
// Importa la clase WebkitLogger
import { WebkitLogger } from 'webkit-logger';

// Registra un mensaje de depuración
WebkitLogger.debug('Este es un mensaje de depuración.');

// Registra un mensaje de información
WebkitLogger.info('Este es un mensaje de información.');

// Registra una advertencia
WebkitLogger.warn('Este es un mensaje de advertencia.');

// Registra un error
WebkitLogger.error('Este es un mensaje de error.');

````
## Configuración
La clase WebkitLogger admite diferentes tipos de registradores. En el código proporcionado, se utiliza WebkitConsoleLogger como registrador predeterminado. Puedes personalizar los registradores que deseas utilizar editando el array logger en la clase.

```javascript
 
private static logger: any[] = [WebkitConsoleLogger];
 // Puedes agregar más registradores a este array según tus necesidades.
````
## Contribución
Si deseas contribuir a esta clase o mejorarla, siéntete libre de hacerlo. Puedes enviar solicitudes de extracción (pull requests) o informar sobre problemas (issues) en este repositorio.