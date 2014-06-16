Ext.define('Ortodont.view.ListPriceView', {
    extend: 'Ext.dataview.List',
    alias: 'widget.listpriceView',
    config: {
        styleHtmlContent: true,
        itemCls: 'priceItem',
        store: 'PriceStore',
        itemTpl: [
            '<div class="name">{name}</div>',
            '<div class="price">{price}</div>'
        ]
    }

});