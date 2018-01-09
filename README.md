# Adrie

## Documentation

### Géolocalisation
FireFox a quelque soucis de précision, utiliser plutôt google chrome.
### Uploads photo

pour que vous puissiez voir les photos dans la parti admin et les stocké vous devez précisez l'adresse absolue pour celà 
  -ouvrez le projet
  -imports/api/Images.js
    configImages.storagePath = '/home/timoz974/app/adrie/public/uploads'
  - changez le chemin vous pouvez passez a l'autre étape.

### Demarer l'application

pour utiliser cette application vous devez avoir `meteor`, vouez pouvez télécharger [Meteor](http://meteor.com)

une fois le depot cloné
  - npm install
  - npm start / meteor run
  - [appli](http://localhost:3000)
  - créer un compte puis vous pourrez utiliser prendre une photos avec sa géolocalisation
    - http://localhost:3000/admin ( si vous voulez voir la parti admin avec les photos + la geolocalisation sur chaque photo qui a été prise)
