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
        // populate localStore with some users
        var uStore = Ext.getStore('UserStore'),
            aStore = Ext.getStore('AppointmentStore'),
            user, apptm;

        uStore.load();
        aStore.load();

        if (!uStore.getById(1)) {
            user = Ext.create('Ortodont.model.UserModel', {
                id: 1,
                dateCreated: '2014-06-13',
                name: 'Aurel Timofte',
                username: 'Aurel',
                password: 'aurel',
                email: 'aurel@nuconteaza.ro',
                phone: '+1 347 989 3457',
                caseDescription: 'NIMIC',
                bracesType: '',
                treatmentPlan: '',
                type: 'admin'
            });
            user.save();
        }

        
        if( !uStore.getById(2)) {
            user = Ext.create('Ortodont.model.UserModel', {
                id: 2,
                dateCreated: '2014-06-13',
                name: 'Gigi Curiosu',
                username: 'Gigi',
                password: 'gigi',
                email: 'gigi@conteaza.ro',
                phone: '+40 723 678 928',
                caseDescription: 'Descriere 1',
                bracesType: 'metalic',
                treatmentPlan: 'treatmentPlan1',
                type: 'user'
            });
            user.save();
        }

        if (!aStore.getById(1)) {
            apptm = Ext.create('Ortodont.model.AppointmentModel', {
                id: 1,
                idUser: 2,
                dateCreated: '2014-06-16',
                description: 'Desc1',
                nextAppointment: '2014-06-17'
            });
            apptm.save();
        }

        if (!aStore.getById(2)) {
            apptm = Ext.create('Ortodont.model.AppointmentModel', {
                id: 2,
                idUser: 2,
                dateCreated: '2014-06-23',
                description: 'Desc2',
                nextAppointment: '2014-06-25'
            });
            apptm.save();
        }

        uStore.load();
        aStore.load();

        Ext.Viewport.setMenu(Ext.create('Ortodont.view.guest.MenuView'), {side:'left', cover: false});
        Ext.create('Ortodont.view.guest.MainView', {fullscreen: true});
    }

});
