# EMPEZANDO

Fusion.js es un framework de aplicación web para la construcción de aplicaciones universales de alta calidad. Proporciona una arquitectura modular con un fuerte enfoque en la capacidad de prueba y mantenimiento.

Características de Fusion.js:

* Server side rendering y async rendering
* ES2017 y JSX support out of the box
* Hot module reloading en modo development
* Bundle splitting
* Universal rendering (corre el mismo código en el server y el browser)
* Server-side development via koa.js
* Plugin-based architecture (para que solo incluya lo que necesitas en tus browser bundles)
* Un conjunto de complementos seleccionados para la obtención de datos, estilos, etc. mantenimientpo por el equipo de Fusion.js
* plugins para error loggin, scuridad, etc.
* Herramientas de analisis para el bundle

## Comparacion de frameworks

Funsion.js es una framework web open source, originalmente creado por uber. Se compone de un CLI, un webpack/babel para transpilar, un servidor Koa, y una arquitectura de ejecucion isomorfa basada en componentes.

Además de estas areas centrales, el equipo de fusion.js proporciona varios plugins para varias cosas: para react y redux a traducciones y protección CSRF. Esto hace de Fusion.js una tienda todo en uno para el desarrollo full stack, mientras que el mismo tiempo hace esto fasil de mantener el tamaño del bundle pequeño al permitir que los desarroladores solo inlcuyan lo que necesitan.

### Comparación con algunos frameworks y librerias populares

**REACT**

Es una popular y madura libreria desarrollada por facebook para implementacion de UIs basadas en componentes. Fusion.js puede ser usada 
.
.
.
.
.
.
.

## Hello world

Para crear una nueva app Fusion.js se recomienda usar `yarn create`, en la terminal, corre lo siguiente:

`yarn create fusion-app my-fusion-app`

Fusion espera que el archivo de entrada este en `src/main.js`. Ahi podemos especificar que biblioteca de renderizado queremos usaar. Por comveniencia, el paquete `fusion-react` el cual proporciona una clase de aplicacion de punto de entrada que ya está configurada para funcionar con React. Usemos eso:

```javascript
  // src/main.js
  import App from 'fusion-react'
```

El constructor de la clase `App` toma un react element. Este es el elemento raíz de la aplicación:

```javascript
  new App(<div>Hello world</div>);
```

Ahora que tenemos configurada nuestra app, justo lo que nfcesitamos es esportar una función que retorna esto:

```javascript
  // src/main.js
  import App from 'fusion-react';
  import React from 'react';

  export default () => {
    return new App(<div>Hello world</div>);
  };
```

para correr la app, corre esto en la terminal:

`yarn run dev`

La app estara disponible en `http://localhost:3000` y mostrara `Hello world`.

Intenta cambiar el testo para ver hot reloading en acción.

Mientras que Fusion.js CLI se ocupa de las preocupaciones de prodictivadidad del desarrollador, como la configuracion de babel, orquestación de compilacion y recarga de hot module, el tiempo de ejecuciñon de fusion.js hace muy poco. Esto garantiza que la compilaciñon de referencia de una app funsion.js sea flexible.

Como sea, apps pueden ganar mas funcionalidad via plugins. En la sig secciñon veremos como usar unpligin.

## Styling

El biolerplate basico de fusion.js viene con soporte de Styletron instalado. Este se hace a traves de un registro de plugin, que se ve así en `src/main.js`

```javascript
  // src/main.js
  import App from 'fusion-react';
  import Styletron from 'fusion-plugin-styletron-react';
  import React from 'react';

  export default () => {
    const app = new App(<div>Hello world</div>);

    app.register(Styletron);

    return app;
  };
```

Ahora, vamos a mover nuestro `<div>` en un archivo separado llamado `src/components/root.js`

## Assests

Usa el modulo virtual `assetUrl` para otro tipos de assets

```javascript
  // src/components/root.js
  import React from 'react';
  import {styled} from 'fusion-plugin-styletron-react';
  import {assetUrl} from 'fusion-core';

  const Panel = styled('div', {background: 'silver'});

  export default (
    <Panel>
      <img src={assetUrl('./my-image.gif')} />
    </Panel>
  );
```