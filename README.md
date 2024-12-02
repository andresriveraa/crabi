**Proyecto de Gestión de Redes de Nodos**

¡Bienvenidos! Este proyecto es una aplicación interactiva diseñada para
visualizar y gestionar una red de nodos. Fue desarrollado utilizando
**React** con **TypeScript**, y se enfoca en demostrar habilidades en
desarrollo frontend, manejo de estados complejos, animaciones y pruebas
unitarias.

**Índice**

• [Descripción General](#descripci%25C3%25B3n-general)

• [Características Principales](#caracter%25C3%25ADsticas-principales)

• [Tecnologías Utilizadas](#tecnolog%25C3%25ADas-utilizadas)

• [Estructura del Proyecto](#estructura-del-proyecto)

• [Configuración y Ejecución](#configuraci%25C3%25B3n-y-ejecuci%25C3%25)

• [Pruebas y Cobertura](#pruebas-y-cobertura)

• [Consideraciones de Diseño](#consideraciones-de-dise%25C3%25B1o)

• [Conclusión](#conclusi%25C3%25B3n)

**Descripción General**

La aplicación permite a los usuarios interactuar con un grafo de nodos,
seleccionar rutas y visualizar información relacionada, como el costo
total y los nodos visitados. Está pensada para ilustrar conceptos de
algoritmos de grafos, gestión de estados en React y proporcionar una
interfaz de usuario intuitiva y atractiva.

**Características Principales**

• **Visualización de Grafos**: Muestra una representación gráfica de una
red de nodos y sus conexiones.

• **Interacción de Usuario**: Permite al usuario seleccionar nodos y
rutas, actualizando la información en tiempo real.

• **Animaciones**: Utiliza animaciones suaves para mejorar la
experiencia del usuario al interactuar con los componentes.

• **Cálculo de Costos**: Calcula y muestra el costo total de la ruta
seleccionada, incluyendo costos de aristas no utilizadas.

• **Pruebas Unitarias**: Implementa pruebas utilizando Jest y React
Testing Library para asegurar la calidad y funcionalidad del código.

**Tecnologías Utilizadas**

• **React** con **TypeScript**: Para el desarrollo de la interfaz de
usuario y manejo de tipos estáticos.

• **Jest** y **React Testing Library**: Para la escritura de pruebas
unitarias y asegurar la correcta funcionalidad de los componentes y
hooks.

• **CSS Modules**: Para el estilizado de los
componentes (asumido por convenciones modernas de React).

**Estructura del Proyecto**

La estructura principal del proyecto es la siguiente:

• **src/**

• **components/**

• **animatedCounter/**: Contiene el componente AnimatedCounter que
muestra números con animaciones.

• **canvas/**: Probablemente contiene el lienzo donde se renderiza el
grafo.

• **nodeGraph/**: Incluye el componente NodeGraph y sus modelos
asociados.

• **totalInfo/**: Componente que muestra información total, como el
costo acumulado.

• **visitedNodes/**: Componente que lista los nodos visitados en la
ruta.

• **customHooks/**

• useNetworkNodes.ts: Hook personalizado para gestionar el estado y la
lógica de la red de nodos.

• **data.ts**: Contiene los datos del grafo utilizado en la aplicación.

• **globalTypes.ts**: Define tipos globales para TypeScript.

• **App.tsx**: Punto de entrada principal de la aplicación.

• **index.tsx**: Renderiza la aplicación en el DOM.

• **reportWebVitals.ts**: Utilizado para medir el rendimiento de la
aplicación.

**Configuración y Ejecución**

**Requisitos Previos**

• **Node.js** y **npm** o **Yarn** instalados en el sistema.

**Instalación**

1\. **Clonar el repositorio:**

git clone https://git@github.com:andresriveraa/crabi.git

2\. **Instalar las dependencias:**

cd proyecto-red-nodos

npm install

*\# o si prefieres Yarn*

yarn install

**Ejecución en Desarrollo**

Para iniciar la aplicación en modo de desarrollo:

npm start

*\# o con Yarn*

yarn start

La aplicación estará disponible en http://localhost:3000.

**Construcción para Producción**

Para crear una versión optimizada para producción:

npm run build

*\# o con Yarn*

yarn build

**Pruebas y Cobertura**

El proyecto incluye pruebas unitarias para componentes clave y hooks
personalizados.

**Ejecutar Pruebas**

npm test

*\# o con Yarn*

yarn test

**Generar Reporte de Cobertura**

npm run test:coverage

*\# o con Yarn*

yarn test:coverage

**Resumen de Cobertura Actual**

Según el último reporte de cobertura:

• **Líneas cubiertas**: 22.16%

• **Funciones cubiertas**: 31.81%

• **Ramas cubiertas**: 17.07%

• **Sentencias cubiertas**: 23.66%

**Nota:** Se recomienda incrementar la cobertura de pruebas para
asegurar una mayor confiabilidad del código.

**Consideraciones de Diseño**

• **Gestión de Estado con Hooks Personalizados**: El hook
useNetworkNodes encapsula la lógica relacionada con la gestión de la red
de nodos, lo que mejora la modularidad y reutilización del código.

• **Componentización**: Los componentes están divididos en unidades
funcionales, facilitando su mantenimiento y escalabilidad.

• **Pruebas Unitarias**: Se ha puesto énfasis en las pruebas de hooks y
componentes, aunque hay margen para ampliar la cobertura.

• **Animaciones**: El componente AnimatedCounter demuestra habilidades
en la implementación de animaciones personalizadas sin depender de
librerías externas.

**Desafíos y Soluciones**

• **Manejo de Animaciones en Pruebas**: Se presentaron retos al probar
componentes que dependen de requestAnimationFrame. Se utilizaron
temporizadores falsos y el modo moderno de Jest para superar estos
obstáculos.

• **Actualización de Dependencias**: Se aseguraron las compatibilidades
con React 18 y las versiones más recientes de las librerías de pruebas.

**Áreas de Mejora**

• **Incrementar la Cobertura de Pruebas**: Focalizar en componentes y
funciones que actualmente no están cubiertos por pruebas.

**Conclusión**

Este proyecto es una muestra sólida de habilidades en desarrollo
frontend con React y TypeScript, incluyendo la implementación de lógica
compleja, manejo de estados, animaciones y pruebas unitarias. A través
de su desarrollo, se han enfrentado y resuelto desafíos comunes en el
desarrollo de aplicaciones web modernas.

Espero que este resumen proporcione una visión clara y concisa del
proyecto y demuestre las competencias técnicas y prácticas aplicadas en
su creación.

**Gracias por su tiempo y consideración. Estoy disponible para
profundizar en cualquier aspecto del proyecto durante la entrevista.**
