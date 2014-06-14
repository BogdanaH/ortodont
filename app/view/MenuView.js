Ext.define('Ortodont.view.MenuView', {
    extend: 'Ext.Menu',
    alias: 'widget.menuView',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        width: 200,
        layout: 'fit',
        items: [
            {
                xtype: 'list',
                itemTpl: [
                    '<div>{text}</div>'
                ],
                store: 'MenuStore'
            }
        ]
    }

});