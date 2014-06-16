Ext.define('Ortodont.store.AppointmentInfsStore', {
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

                if (record && record.data.dateCreated) {
                    return record.data.dateCreated.toDateString();
                } else {
                    return '';
                }
            }
        }
    }
});






























// Ext.define("Ortodont.store.AppointmentInfsStore", {
//     extend: "Ext.data.Store",
//     requires: "Ext.data.proxy.LocalStorage",
//     config: {
//         autoload: true,
//         model: "Ortodont.model.AppointmentModel",
//         proxy: {
//             type: 'localstorage',
//             id: 'appointment-app-store'
//         },
//         sorters: [{ property: 'dateCreated', direction: 'DESC'}],
//         grouper: {
//             sortProperty: "dateCreated",
//             direction: "DESC",
//             groupFn: function (record) {

//                 if (record && record.data.dateCreated) {
//                     return record.data.dateCreated.toDateString();
//                 } else {
//                     return '';
//                 }
//             }
//         }
//     }
// });