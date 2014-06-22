Ext.define('Ortodont.controller.BaseController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {
        routes: {
            '': 'showMain',
            'aview/:viewName': 'showAView',
            'uview/:viewName': 'showUView'
        },

        refs: {
            menuBtn: 'mainView titlebar button',
            menuList: 'menuView list',
            mainView: 'mainView'
        },

        control: {
            "menuBtn": {
                tap: 'onMenuButtonTap'
            },
            "menuList": {
                itemtap: 'onMenuListItemTap'
            }
        }
    },

    onMenuButtonTap: function(button, e, eOpts) {
        Ext.Viewport.toggleMenu('left');
    },

    onMenuListItemTap: function(dataview, index, target, record, e, eOpts) {
        switch (record.get('id')) {
            case 1:
                this.redirectTo('');
                break;
            case 2:
                this.redirectTo('uview/priceView');
                break;
            case 3:
                this.redirectTo('uview/contactView');
                break;
            case 4:
                this.redirectTo('uview/portfolioView');
                break;
            case 5:
                this.redirectTo('uview/loginView');
                break;
            default:
                this.redirectTo('');
                break;
        }

        Ext.Viewport.toggleMenu('left');
    },

    showUView: function(viewName) {
        console.log('view type: ',viewName);
        var view = this.getMainView(),
            miew = view.child(viewName) || view.add({ xtype: viewName });
        view.setActiveItem(miew); miew.show();
        return view;
    },
    showAView: function(xtype) {
        var view = Ext.Viewport.child(xtype) || Ext.Viewport.add({ xtype: xtype });
        if (view.isInnerItem()) {
            Ext.Viewport.setActiveItem(view);
        } else {
            view.show();
        }
        return view;
    },

    showMain: function() {
        this.showUView('mainView');
        this.getMainView().setActiveItem(0);
    }

});