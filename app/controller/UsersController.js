Ext.define("Ortodont.controller.UsersController", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype.
            usersListView: "userslistview",
            userEditorView: "usereditorview",
            usersList: "#usersList",
            loginForm: 'loginForm',
            mainView: 'mainView'
            
        },
        control: {
            usersListView: {
                // The commands fired by the users list container.
                newUserCommand: "onNewUserCommand",
                logoutCommand: "onLogoutCommand",
                editUserCommand: "onEditUserCommand"
            },
            userEditorView: {
                // The commands fired by the user editor.
                saveUserCommand: "onSaveUserCommand",
                deleteUserCommand: "onDeleteUserCommand",
                backToHomeCommand: "onBackToHomeCommand"
            }

        }
    },
    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },

    // Helper functions
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    activateUserEditor: function (record) {

        var userEditorView = this.getUserEditorView();
        userEditorView.setRecord(record); // load() is deprecated.
        Ext.Viewport.animateActiveItem(userEditorView, this.slideLeftTransition);
    },
    activateUsersList: function () {
        Ext.Viewport.animateActiveItem(this.getUsersListView(), this.slideRightTransition);
    },

    // Commands.
    onNewUserCommand: function () {

        console.log("onNewUserCommand");

        var now = new Date(),
            userId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString(),
            newUser = Ext.create("Ortodont.model.UserModel", {
            id: userId,
            dateCreated: now,
            name: "",
            username: "",
            password:"",
            email:"",
            phone:"",
            caseDescription:"",
            bracesType:"",
            treatmentPlan:"",
            type:"user"
        });

        this.activateUserEditor(newUser);

    },
    onLogoutCommand: function () {

        console.log(" LogOut: M-a apasat.");
        var loginForm = this.getLoginForm(), // Login form
             mainView = this.getMainView();   // Main view
        //var uview = this.getUserView();      // User view
        //mainView.reset();
        //uview.remove();
        //mainView.remove('loginForm',false);
        window.location.reload(); //refresh la pagina
        Ext.Viewport.setActiveItem(mainView);

    },
    onEditUserCommand: function (list, record) {

        console.log("onEditUserCommand");

        this.activateUserEditor(record);
    },
    onSaveUserCommand: function () {

        console.log("onSaveUserCommand");

        var userEditorView = this.getUserEditorView(),
             currentUser = userEditorView.getRecord(),
             newValues = userEditorView.getValues();

        // Update the current user's fields with form values.
        currentUser.set("name", newValues.name);
        currentUser.set("username", newValues.username);
        currentUser.set("password", newValues.password);
        currentUser.set("email", newValues.email);
        currentUser.set("phone", newValues.phone);
        currentUser.set("caseDescription", newValues.caseDescription);
        currentUser.set("bracesType", newValues.bracesType);
        currentUser.set("treatmentPlan", newValues.treatmentPlan);

        var errors = currentUser.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('Wait!', errors.items[0].getMessage(), Ext.emptyFn);
            currentUser.reject();
            return;
        }

        var usersStore = Ext.getStore("UsersStore");
            appointmentStore = Ext.getStore("AppointmentInfsStore");
        var now = new Date(),
            appointmentId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString(),
            newAppointment = Ext.create("Ortodont.model.AppointmentModel", {
            id: appointmentId,
            dateCreated: now,
            description: newValues["description"],
            nextAppointment: newValues["nextAppointment"]
        });

        if (null == usersStore.findRecord('id', currentUser.data.id,0,false,false,true)) {
            usersStore.add(currentUser);
               
        }

        newAppointment.setDirty(true);
        var errors = newAppointment.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('Wait!', errors.items[0].getMessage(), Ext.emptyFn);
            newAppointment.reject();
            return;
        }

        appointmentStore.add(newAppointment);
        var currentApp = appointmentStore.findRecord('id', appointmentId,0,false,false,true);
        currentApp.set("idUser",currentUser.get("id"));

        appointmentStore.sync();
        usersStore.sync();

        usersStore.sort([{ property: 'dateCreated', direction: 'DESC'}]);

        this.activateUsersList();
    },
    onDeleteUserCommand: function () {

        console.log("onDeleteUserCommand");


        var userEditorView = this.getUserEditorView(),
                 currentUser = userEditorView.getRecord(),
                 usersStore = Ext.getStore("UsersStore"),
                 appointmentStore = Ext.getStore("AppointmentInfsStore");
        Ext.Msg.confirm(
        "Delete patient",
        "Are you sure want to delete?",
        function (btn) {
            if (btn == 'yes') {  
                 appointmentStore.data.each(function(record) {
                    if(record.get('idUser') == currentUser.get("id"))
                    {
                        appointmentStore.remove(record);
                        appointmentStore.sync();
                    }
                    });
                
                usersStore.remove(currentUser);
                usersStore.sync(); 
                //userEditorView.activateUsersList();

            }
        }
        );

        this.activateUsersList();

    },
    onBackToHomeCommand: function () {

        console.log("onBackToHomeCommand");
        this.activateUsersList();
    },

    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        var usersStore = Ext.getStore("UsersStore");
        usersStore.load();
        console.log("UsersController: launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("UsersController: init");
    }
});