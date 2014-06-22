Ext.define("Ortodont.view.admin.PacientList", {
    extend: "Ext.Container",
    alias: "widget.pacientList",

    requires: [
        'Ext.XTemplate',
        'Ext.dataview.List'
    ],

    config: {
        layout: 'fit',
        items: [{
            xtype: "titlebar",
            title: "My Patients",
            docked: "top",
            items: [{   
                xtype: 'spacer' 
            }, {
                xtype: "button",
                iconCls: "add",
                ui: 'action',
                align:'right'
            }, {
                xtype: "button",
                ui: "dark",
                //text: "Back",
                iconCls:'arrow_left',
                iconMask: true,
                align: "left"   
            }]
        }, {
            xtype: "list",
            store: "UserStore",
            loadingText: "Loading Users...",
            emptyText: '<div class="users-list-empty-text">No users found.</div>',
            onItemDisclosure: true,
            grouped: true,
            itemTpl: '<div class="list-item-name">{name}</div>'
        }]
    }
});