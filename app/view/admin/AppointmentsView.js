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
            title: "Appointments",
            items: [{
                xtype: "button",
                action: 'back',
                ui: "dark",
                iconCls:'arrow_left',
                iconMask: true,
            }]
		}, {
            xtype: 'list',
            title: ' My Appointments',
            width:'100%',
            height: '100%',
            store: 'AppointmentStore',
            itemTpl: new Ext.XTemplate('<div class="idUser"><strong>Patient, </strong> {[this.getPacientName(values.idUser)]}</div>',
                '<div class="nextAppointment"><strong>scheduled on: </strong>{nextAppointment:date("d/m/Y")}</div>', {
                getPacientName: function(id) {
                    var uStore = Ext.getStore('UserStore');
                    uStore.clearFilter();
                    return ''+uStore.getById(id).get('name');
                }
            })
        }]
    }

});