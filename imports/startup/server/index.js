import { Email } from 'meteor/email';

Meteor.startup(() => {
  Meteor.methods({ 
    sendEmail() {
      if (Meteor.isServer) {
        this.unblock();
        Email.send({
          to: "timoz974@hotmail.fr",
          from: "timoz974@hotmail.fr",
          subject: "ADRIE",
          text: "mettre le serveur smtp et sa fonctionne"
        })
      }
    } 
  });
});
