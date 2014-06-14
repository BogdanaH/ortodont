Ext.define('Ortodont.view.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginForm',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Button'
    ],

    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Login',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'usernameTextField',
                        label: 'Username',
                        labelWidth: '40%',
                        name: 'username' 
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        labelWidth: '40%',
                        name: 'password'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'loginButton',
                margin: 20,
                padding: 8,
                text: 'Login'
            }
        ]
    }

});