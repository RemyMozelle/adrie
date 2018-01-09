import './redirection.html';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.redirection.helpers({
  redirect() {
    //stock l'id du setinterval et appel la fonction au bout de 5 secondes
    let redirect = setInterval(redirection, 5000);
    //après 5 secondes redirection vers /categories
    function redirection() {
      FlowRouter.go('/categories');
      clearRedirectInterval()
    }
    //clear setInterval
    function clearRedirectInterval() {
      clearInterval(redirect)
    }
  }
})