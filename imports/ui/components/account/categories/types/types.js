import { FlowRouter } from 'meteor/kadira:flow-router';
import './types.html';

Template.types.events({
  'click #informatique'(event) {
    FlowRouter.go('/informatique');
  },

  'click #electromenager'(event) {
    FlowRouter.go('/informatique');
  },

  'click #meubles'(event) {
    FlowRouter.go('/informatique');
  },

  'click #autres'(event) {
    FlowRouter.go('/informatique');
  }
});