import './register.html';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.register.events({
    'submit #register'(event) {
        event.preventDefault();
        let target = event.target;
        //récupère la valeur de email et password
        let email = target.email.value;
        let password = target.password.value;
        //insert dans la base de donées l'email et le mot de passe associé
        Accounts.createUser({
            email: email,
            password: password
        });

        FlowRouter.go('/categories')
    }
});