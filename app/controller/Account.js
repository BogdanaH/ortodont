Ext.define('Ortodont.controller.Account', {
    extend: 'Ext.app.Controller',

    config: {
        refs: 
        {
            adminView: 'adminView',
            loginForm: 'loginForm',
            mainView: 'mainView',
            userView: 'userView ',
            listaMea: 'userView #listUserDetails'
            //panelInf: 'userView #detailsUser'
        },
        control: {
            "loginForm #loginButton": {
                tap: 'login'
            },
            "adminView #showManageUsersButton": {
                tap: 'showManageUsers'
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

            // Show admin view
            var adminView = Ext.create('widget.adminView');
            Ext.Viewport.setActiveItem(adminView);

        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show login failure error
            Ext.Msg.alert("Login Failure", resp);

        };

        var form = button.up('formpanel'),			// Login form
        	values = form.getValues();				// Form values
            //alert(values['username']);
            //alert(values['password']);

        var usersStore = Ext.getStore("Users");
        usersStore.load();
        var user = usersStore.findRecord('username', values['username'],0,false,false,true);
        if (null != user && user.get('password') == values['password'] ) {
            //alert("Login OK!!!");
            if(user.get('id') == 1)
                successCallbackAdmin();
            else
            {            
                var userView = Ext.create('widget.userView');
                Ext.Viewport.setActiveItem(userView);
                var rez = "<table border='1px'><tr><td>Name:</td><td>"+user.get("name")+"</td></tr><tr><td>Username:</td><td>"+user.get("username")+"</td></tr><tr><td>Password:</td><td>"+user.get("password")+"</td></tr><tr><td>Email:</td><td>"+user.get("email")+"</td></tr><tr><td>Phone number:</td><td>"+user.get("phone")+"</td></tr><tr><td>Case description:</td><td>"+user.get("caseDescription")+"</td></tr><tr><td>Braces type:</td><td>"+user.get("bracesType")+"</td></tr><tr><td>Treatment plan:</td><td>"+user.get("treatmentPlan")+"</td></tr><tr><td>Next Appointment:</td><td>"+user.get("nextApprointment")+"</td></tr><tr><td>Observations:</td><td>"+user.get("observations")+"</td></tr></table>";
                this.getListaMea().setItemTpl(rez);
               //this.getList().onStoreClear();
               this.getListaMea().refresh();

           //alert(this.getPanelInf());
           //this.getPanelInf().setHtml(rez);}
                //successCallback();
            }
        }
        else
        {
            failureCallback();
            //alert("Fail login!!!");
        }
        
    },


    onLogOutButtonTap: function(dataview, index, target, record, e, eOpts) {
        console.log(" LogOut: M-a apasat.");
        var loginForm = this.getLoginForm(); // Login form
        var mainView = this.getMainView();   // Main view
        var uview = this.getUserView();      // User view
        //mainView.reset();
        //uview.remove();
        //mainView.remove('loginForm',false);
        Ext.Viewport.setActiveItem(mainView);
        
    },

    showManageUsers: function(button, e, eOpts) {

        var manageUsersForm = Ext.create('widget.userslistview');   // Registration form
        adminView = this.getAdminView();                      // Admin view
        //Navigate to manage users
        adminView.push({
            xtype: "userslistview",
            title: "Manage Users"
        });


        var usersListView = {
            xtype: "userslistview"
        };
        var userEditorView = {
            xtype: "usereditorview"
        };

        Ext.Viewport.add([usersListView, userEditorView]);
        //Ext.Viewport.setActiveItem(usersListView);
        Ext.Viewport.setActiveItem(manageUsersForm);
    }
});
