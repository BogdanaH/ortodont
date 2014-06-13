/*
 * File: app/view/MenuView.js
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