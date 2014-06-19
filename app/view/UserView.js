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
             items: [{
                      xtype: 'button',
                         itemId: 'logoutButton',
                         text: 'Logout',
                         align: 'right'
                    }]
        }, {
            xtype: 'tabpanel',
            height: '100%',
            styleHtmlContent: true,
            items: [{
                xtype: 'list',
                title: 'Personal data',
                itemId: 'general',
                store: 'UsersStore',
                itemTpl: [
                     '<div class="name"><strong>Name</strong>: {name}</div><br>',
                     '<div class="username"><strong>Username:</strong> {username}</div><br>',
                     '<div class="password"><strong>Password:</strong> {password}</div><br>',
                     '<div class="email"><strong>Email:</strong> {email}</div><br>',
                     '<div class="phone"><strong>Phone number:</strong> {phone}</div><br>',
                     '<div class="caseDescription"><strong>Case description:</strong> {caseDescription}</div><br>',
                     '<div class="bracesType"><strong>Braces type:</strong> {bracesType}</div><br>',
                     '<div class="treatmentPlan"><strong>Treatment plan: </strong>{treatmentPlan}</div><br>'
                     ] 
            }, {
                xtype: 'list', 
                title: 'Evolution',
                itemId: 'evolution',
                store: 'AppointmentInfsStore',
                grouped: true,
                itemTpl: '<div>{description}</div>'
            }, {
                xtype: 'list',
                title: 'Next App',
                itemId: 'nextAppointment',
                store: 'AppointmentInfsStore',
                itemTpl: '<div>{nextAppointment:date("m/d/Y")}</div>'
            }]
        }]
    }
});