import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
//LAYOUT HOME
import '../../ui/layouts/body/body';
import '../../ui/pages/home/home';
// ADMIN
import '../../ui/pages/admin/admin';
// VIEWS
import '../../ui/pages/informatique/informatique';
import '../../ui/pages/electromenager/electromenager';
import '../../ui/pages/meubles/meubles';
import '../../ui/pages/autres/autres';
import '../../ui/pages/categories/categories';
import '../../ui/pages/description/description';
import '../../ui/pages/redirect/redirect';
// NOTFOUND
import '../../ui/pages/not-found/not-found';

/**
 * ADMIN
 */
FlowRouter.route('/admin', {
    name: 'admin',
    action() {
        BlazeLayout.render('App_body', { main: 'admin' });
    }
})

FlowRouter.route('/admin/informatique', {
    name: 'admin',
    action() {
        BlazeLayout.render('App_body', { main: 'adminCardsInformatique' });
    }
})

FlowRouter.route('/admin/electromenager', {
    name: 'admin',
    action() {
        BlazeLayout.render('App_body', { main: 'adminCardsElectromenager' });
    }
})

FlowRouter.route('/admin/meubles', {
    name: 'admin',
    action() {
        BlazeLayout.render('App_body', { main: 'adminCardsMeubles' });
    }
})

FlowRouter.route('/admin/autres', {
    name: 'admin',
    action() {
        BlazeLayout.render('App_body', { main: 'adminCardsAutres' });
    }
})
/**
 * END : ADMIN 
 */

 /**
  * HOME CREATE ACCOUNT 
  */
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('App_body', { main: 'home'} );
    }
})

FlowRouter.route('/createaccount', {
    name: 'createaccount',
    action() {
        BlazeLayout.render('App_body', { main: 'register' });
    }
})

FlowRouter.route('/redirect', {
    name: 'createaccount',
    action() {
        BlazeLayout.render('App_body', { main: 'redirect' });
    }
})
/**
 * END HOME CREATE ACCOUNT
 */

/**
 * CATEGORIES | INFORMATIQUE | ELECTROMENAGER | MEUBLES | AUTRES
 */
FlowRouter.route('/categories', {
    name: 'categories',
    action() {
        BlazeLayout.render('App_body', { main: 'categories' });
    }
})

FlowRouter.route('/informatique', {
    name: 'categories',
    action() {
        BlazeLayout.render('App_body', { main: 'informatique' });
    }
})

FlowRouter.route('/electromenager', {
    name: 'categories',
    action() {
        BlazeLayout.render('App_body', { main: 'electromenager' });
    }
})

FlowRouter.route('/meubles', {
    name: 'categories',
    action() {
        BlazeLayout.render('App_body', { main: 'meubles' });
    }
})

FlowRouter.route('/autres', {
    name: 'categories',
    action() {
        BlazeLayout.render('App_body', { main: 'autres' });
    }
})
/**
 * END CATEGORIES
 */

/**
 * DESCRIPTION 
 */
FlowRouter.route('/description', {
    name: 'description',
    action() {
        BlazeLayout.render('App_body', { main: 'description' });
    }
})
/**
 * END DESCRIPTION
 */

 /**
  * NOT FOUND
  */
FlowRouter.notFound = {
    name: 'not found',
    action() {
        BlazeLayout.render('App_body', { main: 'not-found' });
    }
}
/**
 * END NOT FOUND
 */