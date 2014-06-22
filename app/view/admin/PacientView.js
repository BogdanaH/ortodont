Ext.define("Ortodont.view.admin.PacientView", {
    extend: "Ext.Container",
    alias: "widget.pacientView",

    requires: [
        'Ext.form.FieldSet',
        'Ext.tab.Panel'
    ], 

    config: {
        layout: 'fit',
        items: [{
            xtype: "toolbar",
            docked: "top",
            title: "Manage User",
            items: [{
                xtype: "button",
                action: 'back',
                ui: "dark",
                iconCls:'arrow_left',
                iconMask: true,
            }]
        }, {
            xtype: "toolbar",
            docked: "bottom",
            items: [{
                xtype: "button",
                iconCls: "trash",
                iconMask: true,
                action: 'delete'
            }, { 
                xtype: "spacer" 
            },{
                xtype: "button",
                ui: "action",
                text: "Save",
                action: 'save'
            }]
        }, {
            xtype: 'tabpanel',
            styleHtmlContent: true,
            items: [{
                xtype: "formpanel",
                title: 'General',
                defaults: {
                    labelWidth: 120,
                    required: true
                },
                items: [{
                    xtype: 'textfield',
                    name: 'name',
                    label: 'Name'
                }, {
                    xtype: 'textfield',
                    name: 'username',
                    label: 'Username'
                }, {
                    xtype: 'passwordfield',
                    name: 'password',
                    label: 'Password'
                }, {
                    xtype: 'emailfield',
                    label: 'Email',
                    name: 'email',
                    placeHolder: 'email@example.com',
                    required: false
                }, {
                    xtype: 'textfield',
                    label: 'Phone number',
                    name: 'phone'
                }, {
                    xtype: 'textareafield',
                    label: 'Case description',
                    name:  'caseDescription'
                }, {
                    xtype: 'textareafield',
                    label: 'Braces type',
                    name:  'bracesType'
                }, {
                    xtype: 'textareafield',
                    label: 'Treatment plan',
                    name:  'treatmentPlan'
                }]
            }, {
                xtype: "container",
                title: 'Meeting info',
                margin: '10 10 10 10',
                layout: 'vbox',
                items: [{
                    xtype: 'textareafield',
                    name: 'description',
                    label: 'Description',
                    labelAlign: 'top',
                    required: true
                }, {      
                    xtype: 'datepickerfield',
                    margin: '10 0 0 0',
                    name: 'nextAppointment',
                    picker : {
                        yearFrom : parseInt(Ext.Date.format(new Date(), 'Y'), 10)-1,
                    },
                    placeHolder : 'Next appointment',
                    required: true
                }]   
            }, {
                xtype: 'list', 
                title: 'Evolution',
                itemId: 'evolution',
                store: 'AppointmentStore',
                grouped: true,
                itemTpl: '<div>{description}</div>'
            }]
        }]
    }

});

