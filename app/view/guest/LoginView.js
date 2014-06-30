Ext.define('Ortodont.view.guest.LoginView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginView',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Button'
    ],

    config: {
        items: [{
            xtype: 'fieldset',
            title: 'Login',
            items: [{
                xtype: 'textfield',
                id: 'usernameTextField',
                label: 'Username',
                labelWidth: '40%',
                name: 'username' 
            }, {
                xtype: 'passwordfield',
                label: 'Password',
                labelWidth: '40%',
                name: 'password'
            }]
        }, {
            xtype: 'button',
            margin: 20,
            padding: 8,
            text: 'Login',
            ui: 'BELIZE-HOLE'
        }]
    }
});