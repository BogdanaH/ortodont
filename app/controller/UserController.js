Ext.define("Ortodont.controller.UserController", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            pacientView: {
                selector: 'pacientView',
                xtype: 'pacientView',
                autoCreate: true
            },
            appointmentsView: {
                selector: 'appointmentsView',
                xtype: 'appointmentsView',
                autoCreate: true
            },
            pacientList: 'pacientList list',
            pacientAddBtn: 'pacientList button[align="right"]',
            pacientBackBtn: 'pacientList button[align="left"]',
            pacientViewSaveBtn: 'pacientView button[action="save"]',
            pacientViewDeleteBtn: 'pacientView button[action="delete"]',
            pacientViewBackBtn: 'pacientView button[action="back"]',
            appointmentsViewBackBtn: 'appointmentsView button[action="back"]'
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
            },
            appointmentsViewBackBtn: {
                tap: 'onAppointmentsViewBackBtnTap'
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
            cUser = pacientView.getRecord(),
            formVal = pacientView.getValues();

        // Update the current user's fields with form values.
        cUser.set("name", formVal.name);
        cUser.set("username", formVal.username);
        cUser.set("password", formVal.password);
        cUser.set("email", formVal.email);
        cUser.set("phone", formVal.phone);
        cUser.set("caseDescription", formVal.caseDescription);
        cUser.set("bracesType", formVal.bracesType);
        cUser.set("treatmentPlan", formVal.treatmentPlan);
        cUser.setDirty(true);
        
        var errors = cUser.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('Wait!', errors.items[0].getMessage(), Ext.emptyFn);
            cUser.reject();
            return;
        }

        var userStore = Ext.getStore("UserStore"),
            appStore = Ext.getStore("AppointmentStore"),
            nextApp = formVal["nextAppointment"];

        if (formVal["description"] && formVal["description"]!='' && formVal["nextAppointment"] && formVal["nextAppointment"]!='') {
             var now = new Date(),
                appId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString(),
                newApp = Ext.create("Ortodont.model.AppointmentModel", {
                    id: appId,
                    dateCreated: now,
                    description: formVal["description"],
                    nextAppointment: formVal["nextAppointment"]
                }),
                errors = newApp.validate();

            if (!errors.isValid()) {
                Ext.Msg.alert('Wait!', errors.items[0].getMessage(), Ext.emptyFn);
                newApp.reject();
                return;
            } 

            newApp.set("idUser", cUser.get('id'));
            newApp.setDirty(true);
            appStore.add(newApp);
            appStore.sync();  
        }

        var userFromStore = userStore.getById(cUser.get('id'));
        if (!userFromStore) {
            userStore.add(cUser);
        }

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
    onAppointmentsViewBackBtnTap : function(){
        this.redirectTo('aview/adminView');
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
        this.getPacientView().setRecord(newUser);
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
        this.getPacientView().setRecord(rec);
        this.getPacientView().down('tabpanel').getTabBar().getComponent(2).setHidden(false);
    }
});