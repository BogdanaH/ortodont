Ext.define('Ortodont.model.MenuModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'id',
                type: 'auto'
            },
            {
                name: 'text',
                type: 'string'
            }
        ]
    }
});