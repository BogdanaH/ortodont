Ext.define("Ortodont.view.UserEditorView", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.usereditorview",
    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "Manage User",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Users list",
                        itemId: "backButton"
                    },
                    { xtype: "spacer" },
                    {
                        xtype: "button",
                        ui: "action",
                        text: "Save",
                        itemId: "saveButton"
                    }
                ]
            },
            {
                xtype: "toolbar",
                docked: "bottom",
                items: [
                    {
                        xtype: "button",
                        iconCls: "trash",
                        iconMask: true,
                        itemId: "deleteButton"
                    }
                ]
            },
            {
                xtype: "label",
                html: 'Patient Informations',                        
                itemId: "appInfo"

            },
            { xtype: "fieldset",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Name',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'username',
                        label: 'Username'
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'password',
                        label: 'Password'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        name: 'email',
                        placeHolder: 'email@example.com'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Phone number',
                        name: 'phone'

                    },
                    {
                        xtype: 'textareafield',
                        label: 'Case description',
                        name:  'caseDescription'

                    },
                    {
                        xtype: 'textareafield',
                        label: 'Braces type',
                        name:  'bracesType'

                    },
                    {
                        xtype: 'textareafield',
                        label: 'Treatment plan',
                        name:  'treatmentPlan'
                    }


                ]
            },
            {
                xtype: "label",
                html: 'Appointment Informations',                        
                itemId: "appInfo"

            },
            { xtype: "fieldset",
                items: [
                    {
                        xtype: 'textareafield',
                        name: 'description',
                        label: 'Description',
                        required: true
                    },
                    {
                        
                        xtype: 'datepickerfield',
                        name: 'nextAppointment',
                        picker : {
                            yearFrom : parseInt(Ext.Date.format(new Date(), 'Y'), 10)-1,
                        },
                        placeHolder : 'Next appointment'
                    }
                ]
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            },
            {
                delegate: "#saveButton",
                event: "tap",
                fn: "onSaveButtonTap"
            },
            {
                delegate: "#deleteButton",
                event: "tap",
                fn: "onDeleteButtonTap"
            }
        ]
    },
    onSaveButtonTap: function () {
        console.log("saveUserCommand");
        this.fireEvent("saveUserCommand", this);
    },
    onDeleteButtonTap: function () {
        console.log("deleteUserCommand");
        this.fireEvent("deleteUserCommand", this);
    },
    onBackButtonTap: function () {
        console.log("backToHomeCommand");
        this.fireEvent("backToHomeCommand", this);
    }

});

