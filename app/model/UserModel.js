Ext.define("Ortodont.model.UserModel", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'dateCreated', type: 'date', dateFormat: 'c' },
            { name: 'name', type: 'string' },
            { name: 'username', type: 'string' },
            { name: 'password', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'caseDescription', type: 'string' },
            { name: 'bracesType', type: 'string' },
            { name: 'treatmentPlan', type: 'string' }

        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'name', message: 'Please enter a name for this user.' }
        ]
    }
});

