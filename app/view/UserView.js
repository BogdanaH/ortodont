Ext.define('Ortodont.view.UserView', {
    extend: 'Ext.Container',
    alias: 'widget.userView',
    

    requires: [
        'Ext.dataview.List',
        'Ext.tab.Panel'
    ],
    config: {
        items: [
        {
          xtype: 'titlebar',
             docked: 'top',
             title: 'Welcome!',
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
            xtype: 'tabpanel',
            height: '100%',
            styleHtmlContent: true,
            items: [{
                xtype: 'list',
                title: 'Personal data',
                itemId: 'general',
                store: 'UsersStore',
                itemTpl: [
                     '<div class="name">Name: {name}</div>',
                     '<div class="username">Username: {username}</div>',
                     '<div class="password">Password: {password}</div>',
                     '<div class="email">Email: {email}</div>',
                     '<div class="phone">Phone number: {phone}</div>',
                     '<div class="caseDescription">Case description: {caseDescription}</div>',
                     '<div class="bracesType">Braces type: {bracesType}</div>',
                     '<div class="treatmentPlan">Treatment plan: {treatmentPlan}</div>'
                     ] 
            }, {
                xtype: 'list', 
                title: 'Evolution',
                itemId: 'evolution',
                store: 'AppointmentInfsStore',
                grouped: true,
                itemTpl: '<div>{description}</div>'
            },
            {
                xtype: 'list',
                title: 'Next App',
                itemId: 'nextAppointment',
                store: 'AppointmentInfsStore',
                itemTpl: '<div>{nextAppointment}</div>'
            }]
        }]
    }
});