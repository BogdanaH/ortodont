
Ext.define('Ortodont.view.AdminView', {
    extend: 'Ext.navigation.View',
    //extend: "Ext.form.Panel",
    alias: 'widget.adminView',

    requires: [
        'Ext.Panel',
    	'Ext.TitleBar',
        'Ext.Button'
    ],
    config: {
        items:[
        {
                xtype: 'panel',
                itemId: 'adminPanel',
                layout: 'fit',
                title: 'Admin Dashboard',
                items: [
                    {
                         xtype: 'panel',
                         itemId: 'adminDashboard',
                         items: [
                                {
                                    xtype: 'button',
                                    margin: 20,
                                    padding: 8,
                                    itemId: 'showManageUsersButton',
                                    text: 'Manage Users'
                                }
                                ]
                    }
                ] 
            
                
            }

        ]

        //html: 'AdminView',
        //styleHtmlContent: true
    }

});