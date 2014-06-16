Ext.define('Ortodont.view.AppointmentsView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.appointmentsView',

    config: {
    	items: [{
		    	xtype: "toolbar",
		                docked: "top",
		                title: "My Appointments",
		                items: [
		                    {
		                        xtype: "button",
		                        ui: "back",
		                        text: "Back",
		                        itemId: "backButton"
		                    }
		                ]
		        }, {
		    		xtype: 'label',
		    		html: 'AppointmentsView',
		        	styleHtmlContent: true 
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