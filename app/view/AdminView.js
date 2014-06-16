Ext.define('Ortodont.view.AdminView', {
    extend: "Ext.Container",
    alias: 'widget.adminView',

    requires: [
        'Ext.Panel',
        'Ext.Button'
    ],
    config: {
         items:[
        {
                xtype: 'panel',
                itemId: 'adminPanel',
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
                            itemId: 'avLogoutButton'
                        }],
                        }, {
                         xtype: 'panel',
                         itemId: 'adminDashboard',
                         items: [{
                                    xtype: 'button',
                                    margin: 20,
                                    padding: 8,
                                    itemId: 'showManageUsersButton',
                                    text: 'Manage Users'
                                },{
                                    xtype: 'button',
                                    margin: 20,
                                    padding: 8,
                                    itemId: 'showAppointmentsButton',
                                    text: 'My appointments'
                                }
                                ]
                    }
                ] 
            }

        ]
    }

});