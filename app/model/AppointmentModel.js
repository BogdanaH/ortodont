Ext.define("Ortodont.model.AppointmentModel", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'idUser', type: 'int' },
            { name: 'dateCreated', type: 'date', dateFormat: 'c' },
            { name: 'description', type: 'string' },
            { name: 'nextAppointment', type: 'date' }

        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    }
});