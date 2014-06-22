Ext.define('Ortodont.view.admin.AppointmentsView', {
    extend: 'Ext.Container',
    alias: 'widget.appointmentsView',

    requires: [
        'Ext.dataview.List'
    ],

    config: {
    	items: [{
	    	xtype: "toolbar",
            docked: "top",
            title: "My Appointments",
            items: [{
                xtype: "button",
                itemId: "backButton",
                ui: "dark",
                iconCls: 'arrow_left',
                iconMask: true
            }]
		}, {
            xtype: 'list',
            title: ' My Appointments',
            width:'100%',
            height: '100%',
            store: 'AppointmentStore',
            itemTpl: [
                 '<div class="idUser"><strong>Patient, </strong> {idUser}</div>',
                 '<div class="nextAppointment"><strong>scheduled on: </strong>{nextAppointment:date("d/m/Y")}</div>'
            ]
        }],
    	listeners: [{
            delegate: "#backButton",
            event: "tap",
            fn: "onBackButtonTap"
        }]
    },

    onBackButtonTap: function () {
        console.log("backToDashboardCommand");
        this.fireEvent("backToDashboardCommand", this);
    }

});