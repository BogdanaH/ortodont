Ext.define("Ortodont.view.UserEditorView", {
    extend: "Ext.form.Panel",
    requires: ["Ext.form.FieldSet",'Ext.tab.Panel'],
    alias: "widget.usereditorview",
    config: {
        layout: {
            type: 'card'
        },
        items: [{
                xtype: "toolbar",
                docked: "top",
                title: "Manage User",
                items: [{
                        xtype: "button",
                        ui: "back",
                        text: "Users list",
                        itemId: "backButton"
                        }  
                ]
            }, {
                xtype: "toolbar",
                docked: "bottom",
                items: [{
                        xtype: "button",
                        iconCls: "trash",
                        iconMask: true,
                        itemId: "deleteButton"
                    },{ xtype: "spacer" 
                    },{
                        xtype: "button",
                        ui: "action",
                        text: "Save",
                        itemId: "saveButton"
                      }
                ]
                }, {
                    xtype: 'tabpanel',
                    autoheight:true,
                    styleHtmlContent: true,
                    items: [{
                            xtype: "fieldset",
                            autoheight: true,
                            title: 'Personal info',
                            items: [{
                                    xtype: 'textfield',
                                    name: 'name',
                                    label: 'Name',
                                    required: true
                                    }, {
                                        xtype: 'textfield',
                                        name: 'username',
                                        label: 'Username',
                                        required: true
                                    }, {
                                        xtype: 'passwordfield',
                                        name: 'password',
                                        label: 'Password',
                                        required: true
                                    }, {
                                        xtype: 'emailfield',
                                        label: 'Email',
                                        name: 'email',
                                        placeHolder: 'email@example.com'
                                    }, {
                                        xtype: 'textfield',
                                        label: 'Phone number',
                                        name: 'phone',
                                        required: true
                                    }, {
                                        xtype: 'textareafield',
                                        label: 'Case description',
                                        name:  'caseDescription',
                                        required: true
                                    }, {
                                        xtype: 'textareafield',
                                        label: 'Braces type',
                                        name:  'bracesType',
                                        required: true
                                    }, {
                                        xtype: 'textareafield',
                                        label: 'Treatment plan',
                                        name:  'treatmentPlan',
                                        required: true
                                    }]
                        }, {
                            xtype: "fieldset",
                            title: 'Appointment info',
                            items: [{
                                        xtype: 'textareafield',
                                        name: 'description',
                                        label: 'Description',
                                        required: true
                                    }, {
                                        
                                        xtype: 'datepickerfield',
                                        name: 'nextAppointment',
                                        picker : {
                                            yearFrom : parseInt(Ext.Date.format(new Date(), 'Y'), 10)-1,
                                        },
                                        placeHolder : 'Next appointment',
                                        required: true
                                        }
                                    ]   
                            }
                        ]
                    }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            }, {
                delegate: "#saveButton",
                event: "tap",
                fn: "onSaveButtonTap"
            }, {
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

