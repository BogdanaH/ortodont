Ext.Loader.setConfig({

});

Ext.application({
    models: ['AppointmentModel','MenuModel','ListPriceModel','UserModel'],

    stores: ['MenuStore','PricesStore','UsersStore','AppointmentInfsStore'],

    views: ['AppointmentsView','AdminView','MenuView','ContactView','ListPriceView','LoginForm','MainView','UserView','UserEditorView','UsersListView','BeforeAfterView'],
    
    controllers: ['BaseController','AccountController','UsersController'],
    
    name: 'Ortodont',

    launch: function() {
        Ext.Viewport.setMenu(Ext.create('Ortodont.view.MenuView'), {side:'left', cover: false});
        Ext.create('Ortodont.view.MainView', {fullscreen: true});

    }

});
