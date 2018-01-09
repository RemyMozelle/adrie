import './login.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session'

Template.login.events({
  'submit #login'(event) {
    event.preventDefault();
    let target = event.target;

    let email = target.email.value;
    let password = target.password.value;
    
    Meteor.loginWithPassword(email, password);
    FlowRouter.go('/categories');
  }
});

Template.login.events({
  'click #logout'(event) {
    event.preventDefault();
    Session.clear()
    Meteor.logout();
  }
});