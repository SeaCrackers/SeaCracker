# 1. Membres du Groupe

- Shanshe Gundishvili
- Eliott Jaquier
- Cyprien Jaquier
- Philippe Moeckli

# 2. Introduction au Projet

**SeaCrackers** - Un quizz interactif sur le thème des pirates.

Ce projet vise à développer une application web de quiz sur Angular en temps réél, inspirée par le jeu Kahoot.

Les utilisateurs auront à terme la possibilité de : 
- Créer, Modifier et Supprimer des quiz avec leur questions et réponses.
- Etre présentateur d'un quiz et inviter des joueurs à y participer à traver un code unique (QR code ou code à saisir).
- Participer à des quiz en répondant à des questions en temps réel. En tant que joueurs, ils devront lire la question sur l'écran de présentation et répondre sur leur propre appareil. Ils pourront ensuite donner leur niveau de confiance dans leur réponse ce qui rapportera plus ou moins de points en fonction de la confiance donnée. Après que tous les joueurs aient répondu à une question, les résultats seront affichés sur l'écran de présentation avec le classement des joueurs avant de passer à la question suivante.

Un quizz est un ensemble de questions et de réponses, chaque question ayant 4 réponses dont une ou plusieurs réponses correctes.
Lorsque toutes les questions d'un quizz ont été posées, le score final de chaque joueur est calculé et affiché sur l'écran de présentation.


Boucle de gameplay
1. Le présentateur lance le questionnaire désiré (un serveur de jeu et une salle sont alors attribué)
2. Les joueurs peuvent joindre avec un QR code. Ils peuvent aussi aller sur la route /join sans identifiants pour saisir 

3. La présentateur affiche une question et ses réponses, il enclenche un chronomètre d'une durée définie par la question.
4. Les joueurs répondent à la meilleure réponse et renseignent leur niveau de confiance.
5. Une fois que tout le monde à répondu ou que le chronomètre est arrivé au bout, le présentateur affiche les scores et montre qui a gagné des points.
6. Ce processus est répété jusqu'à la fin des questions 

7. le présentateur montre les scores finaux
8. le présentateur peut ensuite voir un récapitulatif de la manière dont s'est déroulé le questionnaire 

Brainsorming supplémentaire sur les fonctionnalités de l'application :
- Thème UI, vocabulaire et gamplay sur le thème des pirates.
- Des joueurs peuvent dépenser des points pour avoir des power-ups.


# 3. Première analyse du projet
## Technologie et Structure
L'idée est d'avoir un master (le présentateur) managant l'état complet du jeu et des slaves (les joueurs) recevant les questions et y répondant. Le serveur en temps réel `socket.io` serait alors simplement utilisé pour la communication entre le master et les slaves (master à tous les slaves et slaves au master).

- **Angular** : Utilisé pour construire l'interface web utilisateur de l'application avec une attention particulière sur la réactivité et l'expérience utilisateur. Une simple API REST sera utilisée pour la communication avec le backend gérant les données persistantes et une connexion en temps réel avec `socket.io` pour les données en temps réel (les deux serveurs sont distinct).
- **Node.js** : Backend de l'application. Sera utilisé pour les données en temps réel avec `socket.io` ainsi que pour la gestion des quiz (données persistentes avec MySQL / MariaDB) avec `express` et `prisma`. 

- **Git/Github** : Utilisé pour le versionning du code.
- **Jira** : Utilisé pour la gestion de projet et la répartition des tâches en suivant une méthode agile simplifiée.

## Routes
- `/` : Page d'accueil de l'application redirigeant sur la liste des quiz.
- `/quiz` : Liste des quiz disponibles.
- `/quiz/:id` : Page d'un quiz en particulier avec la possibilité de le lancer en tant que présentateur ou le modifier.
- `/quiz/:id/present` : Page de présentation d'un quiz avec un code unique pour les joueurs.
- `/play/:code` : Page de jeu pour les joueurs avec les questions et réponses en temps réel.

## Livrables
- **Maquette** : Une maquette de l'application web.
- **Code Source** : Le code source de l'application ainsi que la documentation.
- **Planification** : Un diagramme de Gantt de la planification finale du projet.
- **Instance de l'application Web** : Une instance de production de l'application web.