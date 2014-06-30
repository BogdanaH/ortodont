/*Ext.define('Ortodont.store.UserStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ortodont.model.UserModel',
   ],
    config : {
        autoLoad: true, 
        model: 'Ortodont.model.UserModel',
        proxy: {
            type: 'rest',
            url : 'app/data/users.json',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        sorters: [{ property: 'dateCreated', direction: 'DESC'}],
        grouper: {
        groupFn: function(record) {
           return record.get('name')[0];
       }
   },
    }
});*/

Ext.define("Ortodont.store.UserStore", {
    extend: "Ext.data.Store",
    
    requires: [
        'Ortodont.model.UserModel',
        "Ext.data.proxy.LocalStorage"
    ],
    
    config: {
        autoload: true,
        model: "Ortodont.model.UserModel",
        proxy: {
            type: 'localstorage',
            id: 'users',
            reader: {
                type: 'json'
            },
            writer: {
                type: 'json'    
            }
        },
        sorters: [{ property: 'dateCreated', direction: 'DESC'}],
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        }
    }
});
