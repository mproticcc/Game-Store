# GameStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## Development server

Run `npm run start-app `in terminal to start application

Run `npm run start-database` in terminal to start up json database

Run `start-all` in terminal to start whole application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Things that were added that were not required in the project

1. In games feature

- Game Image: For better game recognition

- imageWallpaper: Because of the design

- specification: So that users can know what specification they need to run the game

- platforms:So that users can know on which platforms the game is available.
  I didn't want to hardcode them, but I wanted the data about the platforms to be fetched from the database

2. not-found component: To notify users that the requested request does not exist

3. loader component: A graphical animation that is displayed while data is coming from the database

4. search component: I added a clear button that is used to delete the entered text, I think it is a better user experience

5. I had to change the regex for the game name because there are games with numbers and special characters in their names

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
