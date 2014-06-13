
Ext.define('Ortodont.view.UserView', {
    extend: 'Ext.dataview.List',
    //extend: 'Ext.Container',
    alias: 'widget.userView',

    requires: [
        'Ext.TitleBar',
        'Ext.XTemplate',
        'Ext.field.Text',
        "Ext.dataview.List"
    ],

    config: {
        scrollable: 'vertical',
    	items:
    	[
    	{
	        xtype: 'titlebar',
            docked: 'top',
            title: 'User view',
            items: [
                   {
                    	xtype: 'button',
                        itemId: 'logoutButton',
                        text: 'Logout',
                        align: 'right'
                   }
                   ]
        },
        {    
            xtype: 'list',
            itemId: 'listUserDetails',
            styleHtmlContent: true,
            itemCls: 'userItem',
            store: 'Users',
            itemTpl: [
                    //'<div class="name">{name}</div>',
                    //'<div class="username">{username}</div>'
                ]
            // xtype: 'panel',
            // itemId: 'detailsUser',
            // styleHtmlContent: true,
            // itemCls: 'userItem'

        }
        ]
        //html: 'UserView',
        //styleHtmlContent: true
    }

});