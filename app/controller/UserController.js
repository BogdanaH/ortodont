Ext.define("Ortodont.controller.UserController", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            pacientView: {
                selector: 'pacientView',
                xtype: 'pacientView',
                autoCreate: true
            },
            pacientList: 'pacientList list',
            pacientAddBtn: 'pacientList button[align="right"]',
            pacientBackBtn: 'pacientList button[align="left"]',
            pacientViewSaveBtn: 'pacientView button[action="save"]',
            pacientViewDeleteBtn: 'pacientView button[action="delete"]',
            pacientViewBackBtn: 'pacientView button[action="back"]'
        },
        control: {
            pacientAddBtn: {
                tap: 'onPacientAddBtnTap'
            },
            pacientBackBtn: {
                tap: 'onPacientBackBtnTap'
            },
            pacientList: {
                disclose: 'onPacientDiscloseTap',
                newUserCommand: 'onNewUserCommand'
            },
            pacientView: { // The commands fired by the user editor.
                saveUserCommand: "onSaveUserCommand",
                deleteUserCommand: "onDeleteUserCommand",
                backToHomeCommand: "onBackToHomeCommand"
            },
            pacientViewSaveBtn: {
                tap: 'onPacientViewSaveBtnTap'
            },
            pacientViewDeleteBtn: {
                tap: 'onPacientViewDeleteBtnTap'
            },
            pacientViewBackBtn: {
                tap: 'onPacientViewBackBtnTap'
            }
        }
    },

    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },

    launch: function() {
        this.callParent(arguments);
    },
    
    init: function() {
        this.callParent(arguments);
    },

    onPacientViewSaveBtnTap: function() {
        var pacientView = this.getPacientView(),
            cUser = pacientView.down('formpanel').getRecord(),
            formVal = pacientView.down('formpanel').getValues();

        // Update the current user's fields with form values.
        cUser.set("name", formVal.name);
        cUser.set("username", formVal.username);
        cUser.set("password", formVal.password);
        cUser.set("email", formVal.email);
        cUser.set("phone", formVal.phone);
        cUser.set("caseDescription", formVal.caseDescription);
        cUser.set("bracesType", formVal.bracesType);
        cUser.set("treatmentPlan", formVal.treatmentPlan);

        var errors = cUser.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('Wait!', errors.items[0].getMessage(), Ext.emptyFn);
            cUser.reject();
            return;
        }

        var userStore = Ext.getStore("UserStore"),
            appStore = Ext.getStore("AppointmentStore"),
            nextApp = formVal["nextAppointment"],
            now = new Date(),
            appId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString(),
            newApp = Ext.create("Ortodont.model.AppointmentModel", {
                id: appId,
                dateCreated: now,
                description: formVal["description"],
                nextAppointment: formVal["nextAppointment"]
            });

        if (null === userStore.findRecord('id', cUser.data.id, 0, false, false, true)) {
            userStore.add(cUser);
        }

        newApp.setDirty(true);
        var errors = newApp.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('Wait!', errors.items[0].getMessage(), Ext.emptyFn);
            newApp.reject();
            return;
        }

        appStore.add(newApp);
        var currApp = appStore.findRecord('id', appId, 0, false, false, true);
        currApp.set("idUser", cUser.get("id"));

        appStore.sync();
        userStore.sync();

        userStore.sort([{ property: 'dateCreated', direction: 'desc'}]);

        this.redirectTo('aview/pacientList');
    },

    onPacientViewDeleteBtnTap: function() {
        var cUser = this.getPacientView().down('formpanel').getRecord(),
            userStore = Ext.getStore("UserStore"),
            appStore = Ext.getStore("AppointmentStore");
        
        Ext.Msg.confirm("Delete patient", "Are you sure want to delete?",
            function (btn) {
                if (btn == 'yes') {  
                    appStore.data.each(function(rec) {
                        if(rec.get('idUser') == cUser.get("id")) {
                            appStore.remove(rec);
                            appStore.sync();
                        }
                    });
                    
                    userStore.remove(cUser);
                    userStore.sync(); 
                }
                this.redirectTo('aview/pacientList');
            }, this
        );    
    },

    onPacientViewBackBtnTap: function() {
        this.redirectTo('aview/pacientList');
    },

    onPacientBackBtnTap: function() {
        this.redirectTo('aview/adminView');
    },

    onPacientAddBtnTap: function() {
        var now = new Date(),
            userId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString(),
            newUser = Ext.create("Ortodont.model.UserModel", {
                id: userId,
                dateCreated: now,
                type: "user"
            });

        this.redirectTo('aview/pacientView');
        this.getPacientView().down('formpanel').setRecord(newUser);
        this.getPacientView().down('tabpanel').getTabBar().getComponent(2).setHidden(true);
    },

    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    onBackToHomeCommand: function() {
        this.activatePacientList();
    },

    onPacientDiscloseTap: function(list, rec, target, index, e, eOpts) {
        var appStore = Ext.getStore("AppointmentStore");
        appStore.clearFilter();
        appStore.filter('idUser', rec.get('id'));

        this.redirectTo('aview/pacientView');
        this.getPacientView().down('formpanel').setRecord(rec);
        this.getPacientView().down('tabpanel').getTabBar().getComponent(2).setHidden(false);
    }
});