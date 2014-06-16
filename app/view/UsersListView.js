Ext.define("Ortodont.view.UsersListView", {
    extend: "Ext.Container",
    requires:"Ext.dataview.List",
    alias: "widget.userslistview",

    requires: ['Ext.XTemplate'],

    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "titlebar",
            title: "My Patients",
            docked: "top",
            items: [
                { xtype: 'spacer' },
                {
                    xtype: "button",
                    //text: 'New user',
                    iconCls: "add",
                    ui: 'action',
                    itemId: "newButton"
                },
                {
                    xtype: 'button',
                    itemId: 'logoutButton',
                    text: 'Logout',
                    align: 'right'
                }
            ]
        }, {
            xtype: "list",
            store: "UsersStore",
            itemId:"usersList",
            loadingText: "Loading Users...",
            emptyText: "<div class=\"users-list-empty-text\">No users found.</div>",
            onItemDisclosure: true,
            grouped: true,
            itemTpl: "<div class=\"list-item-name\">{name}</div>"
        }],
        listeners: [{
            delegate: "#newButton",
            event: "tap",
            fn: "onNewButtonTap"
        }, {
            delegate: "#usersList",
            event: "disclose",
            fn: "onUsersListDisclose"
        },{
            delegate: '#logoutButton',
            event: "tap",
            fn: "onLogoutButtonTap"
        }]
    },    
    onNewButtonTap: function () {
        console.log("newUserCommand");
        this.fireEvent("newUserCommand", this);
    },
    onLogoutButtonTap: function () {
        console.log("logoutCommand");
        this.fireEvent("logoutCommand", this);
    },
    onUsersListDisclose: function (list, record, target, index, evt, options) {
        console.log("editUserCommand");
        this.fireEvent('editUserCommand', this, record);
    }
});