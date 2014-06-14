Ext.define('Ortodont.store.MenuStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ortodont.model.MenuModel',
        'Ext.data.proxy.Memory'
    ],

    config: {
        data: [
            {
                id: 1,
                text: 'Home'
                
            },
            {
                id: 2,
                text: 'Prices'
            },
            {
                id: 3,
                text: 'Contact'
                
            },
            {
                id: 4,
                text: 'Before/After cases'
            },
            {
                id: 5,
                text: 'Login'
            }
        ],
        model: 'Ortodont.model.MenuModel',
        storeId: 'MenuStore',
        proxy: {
            type: 'memory'
        }
    }
});