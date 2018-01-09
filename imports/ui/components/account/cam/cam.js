import './cam.html';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import Images  from '../../../../api/images';

Template.cam.events({
  'click #btn-cam'(event) {
    //verifie si la le parametre de l'url est bien "informatique"
    if (FlowRouter.current().queryParams.types === "informatique") {
      MeteorCamera.getPicture({}, (error, data) => {
        Session.set('photo', data);
        // récupère la longitude et la latitude
        let latLng = Geolocation.latLng();
        // insert les dans la collection image
        Images.insert({
          file: data,
          isBase64: true,
          fileName: 'pic.png',
          type: 'image/png',
          meta: {
            // ajout latitude longitude
            lat: latLng.lat,
            lng: latLng.lng,
            categorie: "informatique"
          }
        });
        // redirection vers la page description
        FlowRouter.go('/description');
      });
    }
    //verifie si la le parametre de l'url est bien "electromenager"
    if (FlowRouter.current().queryParams.types === "electromenager") {
      MeteorCamera.getPicture({}, (error, data) => {
        Session.set('photo', data);
        // récupère la longitude et la latitude
        let latLng = Geolocation.latLng();

        Images.insert({
          file: data,
          isBase64: true,
          fileName: 'pic.png',
          type: 'image/png',
          meta: {
            // ajout latitude longitude
            lat: latLng.lat,
            lng: latLng.lng,
            categorie: "electromenager"
          }
        });
        // redirection vers la page description
        FlowRouter.go('/description');
      });
    }
    
    if (FlowRouter.current().queryParams.types === "meubles") {
      MeteorCamera.getPicture({}, (error, data) => {
        Session.set('photo', data);
        // récupère la longitude et la latitude
        let latLng = Geolocation.latLng();

        Images.insert({
          file: data,
          isBase64: true,
          fileName: 'pic.png',
          type: 'image/png',
          meta: {
            // ajout latitude longitude
            lat: latLng.lat,
            lng: latLng.lng,
            categorie: "meubles"
          }
        });
        // redirection vers la page description
        FlowRouter.go('/description');
      });
    }
    
    if (FlowRouter.current().queryParams.types === "autres") {
      MeteorCamera.getPicture({}, (error, data) => {
        Session.set('photo', data);
        // récupère la longitude et la latitude
        let latLng = Geolocation.latLng();

        Images.insert({
          file: data,
          isBase64: true,
          fileName: 'pic.png',
          type: 'image/png',
          meta: {
            // ajout latitude longitude
            lat: latLng.lat,
            lng: latLng.lng,
            categorie: "autres"
          }
        });
        // redirection vers la page description
        FlowRouter.go('/description');
      });
    }
  }
});