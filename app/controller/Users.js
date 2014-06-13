Ext.define("Ortodont.controller.Users", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype.
            usersListView: "userslistview",
            userEditorView: "usereditorview",
            usersList: "#usersList",
            adminView: 'adminView',
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

        var now = new Date();
        var userId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var newUser = Ext.create("Ortodont.model.User", {
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
            nextAppointment:"",
            observations:""
        });

        this.activateUserEditor(newUser);

    },
    onLogoutCommand: function () {

        console.log(" LogOut: M-a apasat.");
        var loginForm = this.getLoginForm(); // Login form
        var mainView = this.getMainView();   // Main view
        //var uview = this.getUserView();      // User view
        //mainView.reset();
        //uview.remove();
        //mainView.remove('loginForm',false);
        Ext.Viewport.setActiveItem(mainView);

    },
    onEditUserCommand: function (list, record) {

        console.log("onEditUserCommand");

        this.activateUserEditor(record);
    },
    onSaveUserCommand: function () {

        console.log("onSaveUserCommand");

        var userEditorView = this.getUserEditorView();

        var currentUser = userEditorView.getRecord();
        //alert("currentUser: "+currentUser);
        var newValues = userEditorView.getValues();

        // Update the current user's fields with form values.
        currentUser.set("name", newValues.name);
        currentUser.set("username", newValues.username);
        currentUser.set("password", newValues.password);
        currentUser.set("email", newValues.email);
        currentUser.set("phone", newValues.phone);
        currentUser.set("caseDescription", newValues.caseDescription);
        currentUser.set("bracesType", newValues.bracesType);
        currentUser.set("treatmentPlan", newValues.treatmentPlan);
        currentUser.set("nextAppointment", newValues.nextAppointment);
        currentUser.set("observations", newValues.observations);

        var errors = currentUser.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('Wait!', errors.getByField("name")[0].getMessage(), Ext.emptyFn);
            currentUser.reject();
            return;
        }

        var usersStore = Ext.getStore("Users");

        if (null == usersStore.findRecord('id', currentUser.data.id)) {
            usersStore.add(currentUser);
        }

        usersStore.sync();

        usersStore.sort([{ property: 'dateCreated', direction: 'DESC'}]);

        this.activateUsersList();
    },
    onDeleteUserCommand: function () {

        console.log("onDeleteUserCommand");

        var userEditorView = this.getUserEditorView();
        var currentUser = userEditorView.getRecord();
        var usersStore = Ext.getStore("Users");

        usersStore.remove(currentUser);
        usersStore.sync();

        this.activateUsersList();
    },
    onBackToHomeCommand: function () {

        console.log("onBackToHomeCommand");
        this.activateUsersList();
    },

    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        var usersStore = Ext.getStore("Users");
        usersStore.load();
        console.log("UsersController: launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("UsersController: init");
    }
});