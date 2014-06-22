Ext.define('Ortodont.view.user.UserView', {
    extend: 'Ext.Container',
    alias: 'widget.userView',

    requires: [
        'Ext.dataview.List',
        'Ext.tab.Panel'
    ],

    config: {
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'Welcome!',
            items: [{
                xtype: 'button',
                text: 'Logout',
                align: 'right'
            }]
        }, {
            xtype: 'tabpanel',
            height: '100%',
            styleHtmlContent: true,
            defaultType: 'list',
            items: [{
                title: 'General',
                store: 'UserStore',
                itemTpl: [
                     '<div class="name"><strong>Name</strong>: {name}</div>',
                     '<div class="username"><strong>Username:</strong> {username}</div>',
                     '<div class="password"><strong>Password:</strong> {password}</div>',
                     '<div class="email"><strong>Email:</strong> {email}</div>',
                     '<div class="phone"><strong>Phone number:</strong> {phone}</div>',
                     '<div class="caseDescription"><strong>Case description:</strong> {caseDescription}</div>',
                     '<div class="bracesType"><strong>Braces type:</strong> {bracesType}</div>',
                     '<div class="treatmentPlan"><strong>Treatment plan: </strong>{treatmentPlan}</div>'
                 ] 
            }, {
                title: 'Evolution',
                store: 'AppointmentStore',
                grouped: true,
                itemTpl: '<div>{description}</div>'
            }, {
                title: 'Next App',
                store: 'AppointmentStore',
                itemTpl: '<div>{nextAppointment:date("d/m/Y")}</div>'
            }]
        }]
    }
});