Ext.define('Ortodont.view.guest.MenuView', {
    extend: 'Ext.Menu',
    alias: 'widget.menuView',

    requires: [
        'Ext.dataview.List'
    ],

    config: {
        width: 200,
        layout: 'fit',
        items: [{
            xtype: 'list',
            itemTpl: '<div>{text}</div>',
            store: 'MenuStore'
        }]
    }

});