Ext.define('Ortodont.view.admin.AdminView', {
    extend: "Ext.Container",
    alias: 'widget.adminView',

    requires: [
        'Ext.Panel',
        'Ext.Button'
    ],

    config: {
         items:[{
            xtype: 'panel',
            layout: 'fit',
            title: 'Admin Dashboard',
            items: [{
                xtype: 'titlebar',
                docked: 'top',
                title: 'Admin Dashboard',
                items:[{
                    xtype: 'button',
                    text: 'Logout',
                    align: 'right',
                    ui: 'BELIZE-HOLE',
                    itemId: 'avLogoutButton'
                }],
            }, {
                xtype: 'panel',
                defaultType: 'button',
                defaults: {
                    margin: 20,
                    padding: 8,
                    ui: 'BELIZE-HOLE'
                },
                items: [{
                    action: 'manageUsers',
                    text: 'Manage Users'
                },{
                    action: 'appointments',
                    text: 'My appointments'
                }]
            }] 
        }]
    }
});