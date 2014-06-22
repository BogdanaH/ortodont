Ext.define('Ortodont.controller.AuthController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            loginView: 'loginView',
            loginBtn: 'loginView button',
            logoutBtn: 'userView button[align="right"]',
            logoutAdminBtn: 'adminView button',
            mainView: 'mainView',
            userView: 'userView ',
            adminView: 'adminView',
            appointmentsView:'appointmentsView',
            pacientList: 'pacientList',

            adminUsersBtn: 'adminView button[action="manageUsers"]',
            adminApptsBtn: 'adminView button[action="appointments"]'
        },
        control: {
            loginBtn: {
                tap: 'onAuthBtnTap'
            },
            logoutBtn: {
                tap: 'onLogoutBtnTap'
            },
            logoutAdminBtn: {
                tap: 'onLogoutBtnTap'
            },
            adminUsersBtn: {
                tap: 'onAdminUsersBtnTap'
            },
            adminApptsBtn: {
                tap: 'onAdminApptsBtnTap'
            }
        }
    },  

    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },

    onAuthBtnTap: function(button, e, eOpts) {
        var values = this.getLoginView().getValues(),
            userStore = Ext.getStore("UserStore"),
            appointmentStore = Ext.getStore("AppointmentStore");

        userStore.clearFilter();
        var user = userStore.findRecord('username', values['username'], 0, false, false, true);

        if (user && user.get('password') === values['password'] ) {
            if(user.get('id') == 1) {
                userStore.clearFilter();
                userStore.filter("type","user");

                this.redirectTo('aview/adminView');  
            } else {      
                userStore.clearFilter();
                userStore.filter('id', user.get('id'));

                appointmentStore.clearFilter();
                appointmentStore.filter('idUser', user.get('id'));

                this.redirectTo('aview/userView');
            }
        } else {
            Ext.Msg.alert("Login Failure");
        }
        
    },

    onLogoutBtnTap: function(dataview, index, target, record, e, eOpts) {
        console.log('logout');
        this.getMainView().setActiveItem(0);
        this.getLoginView().reset();
        this.redirectTo('aview/mainView');
    },

    onAdminUsersBtnTap: function(button, e, eOpts) {
        this.redirectTo('aview/pacientList');
    },

    onAdminApptsBtnTap: function(button, e, eOpts) {
        this.redirectTo('aview/appointmentsView');
        var apptsStore = Ext.getStore("AppointmentStore"),
            //filtreaza dupa luna si anul curent
            monthYearFilter = new Ext.util.Filter({
                filterFn: function(item) {
                    var currentMonth = new Date().getMonth(),
                        nextAppMonth = item.get("nextAppointment").getMonth(),
                        currentYear = new Date().getYear(),
                        nextAppYear = item.get("nextAppointment").getYear();
                    return currentMonth == nextAppMonth && currentYear == nextAppYear;
                }
        });
        apptsStore.clearFilter();
        apptsStore.filter(monthYearFilter);
    }
});
