Ext.define("Ortodont.view.UserEditor", {
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
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Next appointment',
                        name:  'nextAppointment'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Observations',
                        name:  'observations'

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

