/*
 * File: app/controller/BaseController.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Ortodont.controller.BaseController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {
        routes: {
            'view/:viewName': 'showView'
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
        console.log('m-a apasat');
        Ext.Viewport.toggleMenu('left');
    },

    onMenuListItemTap: function(dataview, index, target, record, e, eOpts) {
        switch (record.get('id')) {
            case 1:
                this.redirectTo('view/homeView');
                break;
            case 2:
                this.redirectTo('view/listpriceView');
                break;
            case 3:
                this.redirectTo('view/loginForm');
                break;
            default:
                this.redirectTo('view/homeView');
                break;
        }

        Ext.Viewport.toggleMenu('left');
    },

    showView: function(viewName) {
        var miew = this.getMainView(), view = miew.child(viewName) || miew.add({ xtype: viewName });

        miew.setActiveItem(view); view.show();
        return view;
    }

});