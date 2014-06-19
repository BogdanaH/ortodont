Ext.define('Ortodont.controller.AccountController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: 
        {
            loginForm: 'loginForm',
            mainView: 'mainView',
            userView: 'userView ',
            adminView: 'adminView',
            appointmentsView:'appointmentsView',
            userslistview: 'userslistview'
        },
        control: {
            "loginForm #loginButton": {
                tap: 'login'
            },
            "userView #logoutButton":
            {
                tap: 'onLogOutButtonTap'
            },
            "adminView #showManageUsersButton":
            {
                tap: 'showManageUsers'
            },
            "adminView #showAppointmentsButton":
            {
                tap: 'showAppointments'
            },
            "adminView #avLogoutButton":
            {
                tap: 'onLogOutButtonTap'

            },
            appointmentsView:
            {
                backToDashboardCommand: "onBackToDashboardCommand"
            },
            userslistview:
            {
                backToDashboardCommand: "onBackToDashboardCommand"
            }

        }
    },

        slideLeftTransition: { type: 'slide', direction: 'left' },
        slideRightTransition: { type: 'slide', direction: 'right' },

        login: function(button, e, eOpts) {

        // Success autentificare admin
        var successCallbackAdmin = function(resp, ops) {
            // Show admin view
            usersStore.clearFilter();
            usersStore.filter("type","user");
            var adminView = Ext.create('widget.adminView');
            Ext.Viewport.setActiveItem(adminView);
            //Ext.Viewport.animateActiveItem(adminView, this.slideLeftTransition);

        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show login failure error
            Ext.Msg.alert("Login Failure", resp);

        };

        var form = button.up('formpanel'),			// Login form
        	values = form.getValues();				// Form values

        var usersStore = Ext.getStore("UsersStore"),
            appointmentStore = Ext.getStore("AppointmentInfsStore");
        usersStore.load();
        appointmentStore.load();
        var user = usersStore.findRecord('username', values['username'],0,false,false,true);
        if (null != user && user.get('password') == values['password'] ) {
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
        var mainView = this.getMainView();   // Main view
        window.location.reload();
        Ext.Viewport.setActiveItem(mainView);
        
    },

    showManageUsers: function(button, e, eOpts) {

        var manageUsersForm = Ext.create('widget.userslistview');
        var usersListView = {
            xtype: "userslistview"
        };
        var userEditorView = {
            xtype: "usereditorview"
        };
        Ext.Viewport.add([usersListView, userEditorView]);
        //Ext.Viewport.setActiveItem(manageUsersForm);
        Ext.Viewport.animateActiveItem(manageUsersForm, this.slideLeftTransition);
    },

    showAppointments: function(button, e, eOpts) {

        var appointmentsView = Ext.create('widget.appointmentsView'),
            appointmentStore = Ext.getStore("AppointmentInfsStore");
        var monthFilter = new Ext.util.Filter({
            filterFn: function(item) {
                var currentMonth = new Date().getMonth(),
                    nextAppMonth = item.get("nextAppointment").getMonth();
                //alert("Current month:" + currentMonth);
                //alert("nextAppMonth:"+nextAppMonth);
                return currentMonth == nextAppMonth;
            }
        });
        appointmentStore.clearFilter();
        appointmentStore.filter(monthFilter);
        //Ext.Viewport.setActiveItem(appointmentsView);
        Ext.Viewport.animateActiveItem(appointmentsView, this.slideLeftTransition);

    },

    onBackToDashboardCommand: function () {

        console.log("onBackToDashboardCommand");
        Ext.Viewport.animateActiveItem(this.getAdminView(), this.slideRightTransition);
    }


});
