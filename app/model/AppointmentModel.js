Ext.define("Ortodont.model.AppointmentModel", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'idUser', type: 'int' },
            { name: 'dateCreated', type: 'date', dateFormat: 'c' },
            { name: 'description', type: 'string' },
            { name: 'nextAppointment', type: 'string' }

        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'description', message: 'Please enter a description for this appointment.' },
            { type: 'presence', field: 'nextAppointment', message: 'Please establish the next appointment.' }
        ]
    }
});