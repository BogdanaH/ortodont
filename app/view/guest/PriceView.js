Ext.define('Ortodont.view.guest.PriceView', {
    extend: 'Ext.dataview.List',
    alias: 'widget.priceView',
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