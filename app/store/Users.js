Ext.define("Ortodont.store.Users", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: "Ortodont.model.User",
        proxy: {
            type: 'localstorage',
            id: 'users-app-store'
        },
        sorters: [{ property: 'dateCreated', direction: 'DESC'}],
        grouper: {
            sortProperty: "dateCreated",
            direction: "DESC",
            groupFn: function (record) {

                if (record && record.data.dateCreated) {
                    return record.data.dateCreated.toDateString();
                } else {
                    return '';
                }
            }
        }
    }
});