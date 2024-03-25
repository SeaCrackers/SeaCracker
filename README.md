# SeaCrackers

The aim of this project is to reproduce a simplified version of [Kahoot](https://kahoot.com/) with a pirate theme.
We have three main use cases :
- A complete quiz CRUD (manage quizzes, add questions with answers)
- Present a quiz (we call the presenter the 'host' of the game, as he or she will create the room and host the game)
- Login to the room and quiz presentation through the game host
> **Warning**: Be careful not to confuse the game host with the server! The server is just a relay allowing users of the application to connect together in rooms. It is the host (the angular client that presents the questions) that has and manages the complete state of the game.

We use [socket io](https://www.npmjs.com/package/ngx-socket-io) for communication between clients, server and host.

For more information, take a look at the [first_analysis.md](https://github.com/SeaCrackers/SeaCracker/blob/develop/first_analysis.md) (markdown in French)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Getting started

### SeaServer aka Relay
To get started, you need to have a websocket relay server open. 
You can find a production version here: https://seacracker.eliott.pro/socket.io
For development purposes, you can clone the SeaServer repository and install a local version of the relay server.
See : https://github.com/SeaCrackers/SeaServer

### Prerequisites

List all dependencies and their version needed by the project as :

* IDE used PhpStorm 2023.3 or Webstorm 2023.3
* npm 10.4.0 ou ultérieure [official doc](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
* node v20.11.0 ou ultérieure [official doc](https://nodejs.org/en/download)
* git version 2.43.0.windows ou ultérieure [official doc](https://git-scm.com/)
* OS supported Windows 10

### Collaborate
We use Jira for our project management following a 'Scrum Lite' method. 
See : [ejcpnvprojects.atlassian.net/jira](https://ejcpnvprojects.atlassian.net/jira/software/projects/SEA/boards/4/backlog?epics=visible)
#### Git Workflow
  * [Gitflow](https://www.atlassian.com/fr/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20est%20l'un%20des,les%20hotfix%20vers%20la%20production.)
  * [How to commit](https://www.conventionalcommits.org/en/v1.0.0/)
  * [How to use your workflow](https://nvie.com/posts/a-successful-git-branching-model/)
  * Pull requests are open to merge in the develop branch.
  * Release on the main branch we use GitFlow and not with GitHub release.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Running linter

Run `ng lint` to execute linting tools on Angular application code in a given project folder.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
