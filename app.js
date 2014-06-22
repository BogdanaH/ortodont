Ext.Loader.setConfig({
	enabled: true,
    disableCaching: true,
    paths: {
        'Ext'   	 : 'touch/src',
        'Ortodont'   : 'app'
    }
});

Ext.application({
    models: ['AppointmentModel','MenuModel','PriceModel','UserModel'],

    stores: ['MenuStore','PriceStore','UserStore','AppointmentStore'],

    views: [
    	'Ortodont.view.admin.AdminView',
    	'Ortodont.view.admin.AppointmentsView',
    	'Ortodont.view.admin.PacientView',
    	'Ortodont.view.admin.PacientList',

    	'Ortodont.view.guest.ContactView',
    	'Ortodont.view.guest.LoginView',
    	'Ortodont.view.guest.MainView',
    	'Ortodont.view.guest.MenuView',
    	'Ortodont.view.guest.PortfolioView',
        'Ortodont.view.guest.PriceView',

        'Ortodont.view.user.UserView',
	],
    
    controllers: [
    	'Ortodont.controller.BaseController',
    	'Ortodont.controller.AuthController',
    	'Ortodont.controller.UserController'
	],
    
    name: 'Ortodont',

    launch: function() {
        Ext.Viewport.setMenu(Ext.create('Ortodont.view.guest.MenuView'), {side:'left', cover: false});
        Ext.create('Ortodont.view.guest.MainView', {fullscreen: true});
    }

});
