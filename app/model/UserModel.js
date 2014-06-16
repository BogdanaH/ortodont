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
            { name: 'treatmentPlan', type: 'string' },
            { name: 'type', type: 'string' }


        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'name', message: 'Please enter the name for the new user.' },
            { type: 'presence', field: 'username', message: 'Please enter a username for this user.' },
            { type: 'presence', field: 'password', message: 'Please enter a password for this user.' },
            { type: 'presence', field: 'phone', message: 'Please enter the phone number for this user.' },
            { type: 'presence', field: 'caseDescription', message: 'Please enter the case description for this user.' },
            { type: 'presence', field: 'bracesType', message: 'Please enter the braces type for this user.' },
            { type: 'presence', field: 'treatmentPlan', message: 'Please enter the treatment plan for this user and his case.' }
        ]
    }
});

