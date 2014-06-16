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
                {   xtype: 'spacer' 
                }, {
                    xtype: "button",
                    iconCls: "add",
                    ui: 'action',
                    itemId: "newButton",
                    align:'right'
                },{
                    xtype: "button",
                    ui: "back",
                    text: "Back",
                    itemId: "backButton"   
                }]
        }, {
            xtype: "list",
            store: "UsersStore",
            itemId:"usersList",
            loadingText: "Loading Users...",
            emptyText: "<div class=\"users-list-empty-text\">No users found.</div>",
            onItemDisclosure: true,
            grouped: true,
            itemTpl: "<div class=\"list-item-name\">{name}</div>"
            }
        ],
        listeners: [{
            delegate: "#newButton",
            event: "tap",
            fn: "onNewButtonTap"
        }, {
            delegate: "#usersList",
            event: "disclose",
            fn: "onUsersListDisclose"
        },{
            delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
        }
        ]
    },

    onNewButtonTap: function () {
        console.log("newUserCommand");
        this.fireEvent("newUserCommand", this);
    },
    onUsersListDisclose: function (list, record, target, index, evt, options) {
        console.log("editUserCommand");
        this.fireEvent('editUserCommand', this, record);
    },
    onBackButtonTap: function () {
        console.log("backToDashboardCommand");
        this.fireEvent("backToDashboardCommand", this);
    }
});