import './photoDescription.html';
import Images from '../../../../../api/images';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.photoDescription.events({
  'submit #photoDescription'(event) {
    event.preventDefault();
    let target = event.target;
    let dataDesc = target.desc.value;
    let etat = target.choix.value;
    
    //appel la fonction addDescription dans api/Images
    Meteor.call('addDescription', { dataDesc, etat }, (error, success) => { 
      error ? error : FlowRouter.go('/redirect'); 
    });
    //appel la fonction sendEmail dans api/Images
    Meteor.call('sendEmail', (error, success) => {
      error ? error : console.log("bien envoyer");
    });
  }
});

//affiche la photo pendant la description de l'image
Template.photoDescription.helpers({
  check() {
    return Session.get('photo');
  }
})