Ext.define('Ortodont.view.MainView', {
    extend: 'Ext.Container',
    alias: 'widget.mainView',

    requires: [
        'Ext.TitleBar',
        'Ext.Button'
    ],

    config: {
        layout: 'card',
        html: 'MainView',
        styleHtmlContent: true,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Hai la ortodont!',
                items: [
                    {
                        xtype: 'button',
                        text: 'M'
                    }

                ]
            }
        ]
    },
});