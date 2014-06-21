Ext.define('Ortodont.view.AppointmentsView', {
    //extend: 'Ext.form.Panel',
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
		                items: [
		                    {
		                        xtype: "button",
		                        //ui: "back",
		                        //text: "Back",
		                        itemId: "backButton",
                                ui: "dark",
                                iconCls:'arrow_left',
                                iconMask: true
		                    }
		                ]
		      //   }, {
		    		// xtype: 'label',
		    		// html: 'AppointmentsView',
		      //   	styleHtmlContent: true
                }, {

                    xtype: 'list',
                    title: ' My Appointments',
                    itemId: 'general',
                    width:'100%',
                    height: '100%',
                    store: 'AppointmentInfsStore',
                    itemTpl: [
                         '<div class="idUser"><strong>Patient, </strong> {idUser}</div>',
                         '<div class="nextAppointment"><strong>scheduled on: </strong>{nextAppointment:date("d/m/Y")}</div><br>'
                     ]  
		    	}
    	],
    	listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            }
        ]
    },

    onBackButtonTap: function () {
        console.log("backToDashboardCommand");
        this.fireEvent("backToDashboardCommand", this);
    }

});