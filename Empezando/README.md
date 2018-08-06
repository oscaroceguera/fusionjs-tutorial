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

**React**

Es una popular y madura libreria desarrollada por facebook para implementacion de UIs basadas en componentes. Fusion.js puede ser usado sin problemas con react: JSX, ES2017, hot module reloading, server-side rendering, etc.
Ademas, el core de fusion.js es independiente de la capa de vizualización y también se puede usar con diferentes blibiotecas de vistas.

A través de plugins, fusion.js ofrece varias caracteristicas adicionales demás de vanilla React: proporciona una forma sencilla de dividir código, admite una representaciñon asincrónica del lado del servidor, permite que los plugins instalen automaticamente los providers cuando sea necesario, etc.

**Create-rect-app**

Es un CLIs que andamia un projecto React, ademas de configurar webpack, babel, Eslint, Jest, etc, hay algunas cosas que no admite de inmediato (sobre todo, server rendering y hot reloading de componentes), pero proporciona capacidad de realizar `eject`, por lo que se puede usar como un generador repetitivo y personalizar el flujo de trabajo de compilacion desde allí.

Fusion.js es similar a create-react-app en el sentido que proporciona una configuracion de webpack/babel, pero ademas de esto, proporciona herramientas de alto nivel como server-side rendering, code splittion mas potente y hot reloading totalmente integrada. Fusion.js tambien proporciona una API de servidor HTTP moderna (a través de Koa) y un entorno de código universal.

Debido a que fusion.js proporciona la cartera de compilacion, asi como los entornos de servidor y navegador, tiene potencial de aplicar automaticamente varias optimizaciones que de otro modo tendrian que realizarse manualmente para cada compilación.

**Express**

Express es el framework HTTP server mas popular de Node.js. Si bien es independiente del procesamiento de blibliotecas (siendo compatible con blibliotecas como pug o handlebars), generalmente no estan trival integrar las herramientas modernas de React (e.g. HMR) a menos que adopte un marco mas dogmatico sobre Express.

Tanto Express como Fusion.js se pueden usar como un servidor Node.js y ambos pueden compilar a traves de middlewares. La principal diferencia es que fusion.js usa middlewares de koa.js. koa utiliza una arquitectura de middleware basado en async/await más moderna, que proporciona una mejor experiencia de trace/debuggin del stack y es mas facil probar.

**Next.js**

Next.js es un framework desasrrolado por Zeit.con diseñado para construir aplicaciones server-rendered con react.

La principal diferecnia es que Next.js se enfoca sobre el desarrollo de react y no proporciona recursos para desarrollar backend completo, mientras que Fusion.js es un framework full-stack, que soporta el desarrollo de back.end a través del middleware Koa y complementos para herramientas como GraphQL. Además, Fusion.js proporciona instalaciones como inyección de dependencias y tipado estatico para mejorar la capacidad de mantenimiento de proyectos complejos.

Tanto como Next.js y Fusion.js pueden usarse con una variedad de librerias de terceros, pero con el objetivo de evitar la paralisis del ananlisis, el equipo de fusion tambien proporciona un conjunto de complementos seleccionados que consideramos importantes para las aplicaciones de calidad de produccion y que se puede integrar en una aplicacion base de una manera que es eficiente y libre de patrones.

**Electrode.io**

Es un framework desarrollado por wallmart labs diseñado para construir aplicaciones server-rendered con react. Esto es muy similar en el scope de fusion.js

En un lugar proporciona un ñunico andamio monolítico, la arquitectura fusion.js encapsula integraciones complejas por biblioteca, lo que permite que los andamios sean tan simples o tan complejos como sea necesario. Por ejemplo, la instalacion de soporte para CSS atómico toma una sola lína de código, y las diferencias estrategias de diseño pueden empaqutarse y compartirse facilmente entre proyectos.

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