/*Ext.define('Ortodont.store.AppointmentStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ortodont.model.AppointmentModel',
   ],
    config : {
        autoLoad: true, 
        model: 'Ortodont.model.AppointmentModel',
        proxy: {
            type: 'rest',
            url : 'app/data/appointments.json',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        sorters: [{ property: 'nextAppointment', direction: 'DESC'}],
        grouper: {
            sortProperty: "dateCreated",
            direction: "DESC",
            groupFn: function (record) {
                return (record && record.data.dateCreated) ? record.data.dateCreated.toDateString() : '';
            }
        }
    }
});*/


Ext.define("Ortodont.store.AppointmentStore", {
    extend: "Ext.data.Store",

    requires: [
        'Ortodont.model.AppointmentModel',
        "Ext.data.proxy.LocalStorage",
    ],
    
    config: {
        autoload: true,
        model: "Ortodont.model.AppointmentModel",
        proxy: {
            type: 'localstorage',
            id: 'appointments',
            reader: {
                type: 'json'
            }
        },
        sorters: [{ property: 'dateCreated', direction: 'DESC'}],
        grouper: {
            sortProperty: "dateCreated",
            direction: "DESC",
            groupFn: function (record) {
                return (record && record.data.dateCreated) ? record.data.dateCreated.toDateString() : '';
            }
        }
    }
});