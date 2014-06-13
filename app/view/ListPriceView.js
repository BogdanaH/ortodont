
Ext.define('Ortodont.view.ListPriceView', {
    extend: 'Ext.dataview.List',
    alias: 'widget.listpriceView',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        styleHtmlContent: true,
        itemCls: 'priceItem',
        store: 'PriceStore',
        itemTpl: [
            //'<table border="1" style="width:300px"><tr><td><div class="name" ></div>{name}</td><td class="price">{price}</td></tr></table>'
            '<div class="name">{name}</div>',
            '<div class="price">{price}</div>'
        ]
    }

});