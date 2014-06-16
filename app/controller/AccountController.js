Ext.define('Ortodont.controller.AccountController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: 
        {
            loginForm: 'loginForm',
            mainView: 'mainView',
            userView: 'userView '
        },
        control: {
            "loginForm #loginButton": {
                tap: 'login'
            },
            "userView #logoutButton":
            {
                tap: 'onLogOutButtonTap'
            }
        }
    },

        login: function(button, e, eOpts) {

        // Success autentificare utilizator
        var successCallback = function(resp, ops) {
            // Show user view

        };
        // Success autentificare admin
        var successCallbackAdmin = function(resp, ops) {
            
            var manageUsersForm = Ext.create('widget.userslistview'),
                usersStore = Ext.getStore("UsersStore"),
                usersListView = {
                xtype: "userslistview"
            },
                userEditorView = {
                xtype: "usereditorview"
            };

            usersStore.clearFilter();
            usersStore.filter("type","user");

            Ext.Viewport.add([usersListView, userEditorView]);
            Ext.Viewport.setActiveItem(manageUsersForm);

        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show login failure error
            Ext.Msg.alert("Login Failure", resp);

        };

        var form = button.up('formpanel'),			// Login form
        	values = form.getValues();				// Form values

        var usersStore = Ext.getStore("UsersStore");
            appointmentStore = Ext.getStore("AppointmentInfsStore");
        usersStore.load();
        appointmentStore.load();
        var user = usersStore.findRecord('username', values['username'],0,false,false,true);
        if (null != user && user.get('password') == values['password'] ) {
            //alert("Login OK!!!");
            if(user.get('id') == 1)
            {
                successCallbackAdmin();
            }
            else
            {            
                var userView = Ext.create('widget.userView');
                Ext.Viewport.setActiveItem(userView);

                usersStore.clearFilter();
                usersStore.filter('id', user.get('id'));

                appointmentStore.clearFilter();
                appointmentStore.filter('idUser', user.get('id'));


            }
        }
        else
        {
            failureCallback();
        }
        
    },


    onLogOutButtonTap: function(dataview, index, target, record, e, eOpts) {
        console.log(" Logout: M-a apasat.");
        var loginForm = this.getLoginForm(); // Login form
        var mainView = this.getMainView();   // Main view
        var uview = this.getUserView();      // User view
        //mainView.reset();
        //uview.remove();
        //mainView.remove('loginForm',false);
        window.location.reload();
        Ext.Viewport.setActiveItem(mainView);
        
    }

});
