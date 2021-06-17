# UtpWorkshop 2

## Documentación de Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.
### Esta version es estable y soportada hasta Diciembre 2021: https://angular.io/guide/releases


### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Levantar la aplicación localmente 
- Descargar la aplicación 
- Entrar al directorio de la aplicación desde terminal y ejecutar `npm install`
- Luego, ejecutar el comando `ng serve -o` para levantar tu aplicación en local y ver que funciona

## Pasos en Firebase :fire:
Primero debes generar la distribución productiva de tu aplicación, para esto debes ejecutar el comando `ng build --prod`

1. Ve a la consola https://console.firebase.google.com/
2. Selecciona crear nuevo proyecto
3. Ve a la opción de Realtime Database > Crear una base de datos > Modo de prueba 
4. Toma el url de la base de datos y colocalo en la propiedad `firebaseUrl` dentro del archivo `environment.ts`, copialo hasta el .com sin el `/`.
5. Levanta tu aplicación con `ng serve -o`, podras crear nuevos casos en tu propia base de datos en la nube.

## Deploy 
6. Ve a la opción Hosting y sigue los pasos

    Responde las preguntas así:
    - What do you want to use as your public directory? **R./** `dist/utp-workshop2`
    - Configure as a single-page app (rewrite all urls to /index.html)? **R./** `y`
    - Set up automatic builds and deploys with GitHub? **R./** `N`
    - File dist/utp-workshop1/index.html already exists. Overwrite? **R./** `N`
    - Listo, :rocket: `firebase deploy`

7. Listo, tienes tu aplicación en la nube, consumiendo base de datos en la nube y sin administrar ni preocuparte por servidores.


