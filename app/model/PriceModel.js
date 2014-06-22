Ext.define('Ortodont.model.PriceModel', {
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
                name: 'name',
                type: 'string'
            },
            {
                name: 'price',
                type: 'string'
            }
        ]
    }
});