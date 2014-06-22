Ext.define('Ortodont.view.guest.PortfolioView', {
    extend: 'Ext.Container',
    alias: 'widget.portfolioView',

    config: {
        layout: 'card',
        items: [{
                xtype: 'carousel',
                layout: 'fit',
                direction: 'horizontal',
                items: [{
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items:[{
                                flex:3,
                                cls: 'caz unu'
                            },
                            {
                                flex: 3,
                                styleHtmlContent: 'true',
                                html: "<h3>Caz I: </h3><p>Ocluzie deschisă – formarea unui spaţiu între suprafeţele ocluzale ale dinţilor frontali şi/sau laterali, atunci când muşcaţi pe dinţii posteriori. A fost tratat cu aparat dentar fix metalic.</p>"
                             }]
                        }, {
                            layout: {
                            type: 'vbox',
                            align: 'stretch'
                            },
                            items:[{
                                flex:3,
                                cls: 'caz doi'
                             },
                             {
                                flex: 3,
                                styleHtmlContent: 'true',
                                html: "<h3>Caz II:</h3><p>Supraocluzie verticală (overbite) – când dinţii frontali superiori ies cu mult în faţa celor inferiori. In prima etapa a tratamentului s-au montat fatete dentofaciale, dupa care s-a montat aparatul dentar metalic. Nu au fost realizate extractii. </p>"
                             }]
                        },{
                            layout: {
                            type: 'vbox',
                            align: 'stretch'
                            },
                            items:[{
                                flex:3,
                                cls: 'caz trei'
                             },
                             {
                                flex: 3,
                                styleHtmlContent: 'true',
                                html: "<h3>Caz III:</h3><p>Înghesuire dentară severa – când există prea mulţi dinţi pentru a avea loc pe arcada dentară si muscatura dureroasa. Acest caz s-a tratat cu aparat dentar metalic timp de 24 de luni.</p>"
                             }]
                        }, {
                            layout: {
                            type: 'vbox',
                            align: 'stretch'
                            },
                            items:[{
                                flex:3,
                                cls: 'caz patru'
                             }, {
                                 flex: 3,
                                 styleHtmlContent: 'true',
                                 html: "<h3>Caz IV:</h3><p>In prima etapa a tratamentului s-au montat fatete dentofaciale, dupa care s-a montat aparatul dentar metalic. Nu au fost realizate extractii.</p>"
                             }]
                        }, {
                            layout: {
                            type: 'vbox',
                            align: 'stretch'
                            },
                            items:[{
                                flex:3,
                                cls: 'caz cinci'
                             },
                             {
                                flex: 3,
                                styleHtmlContent: 'true',
                                html: "<h3>Caz V:</h3><p>Înghesuire dentară – când există prea mulţi dinţi pentru a avea loc pe arcada dentară. In prima etapa a tratamentului s-au montat fatete dentofaciale, dupa care s-a montat aparatul dentar metalic. Nu au fost realizate extractii.</p>"
                            }]
                        }, {
                            layout: {
                            type: 'vbox',
                            align: 'stretch'
                            },
                            items:[{
                                flex:3,
                                cls: 'caz sase'
                             },
                             {
                                flex: 3,
                                styleHtmlContent: 'true',
                                html: "<h3>Caz VI:</h3><p>In prima etapa a tratamentului s-au montat fatete dentofaciale, dupa care s-a montat aparatul dentar metalic. Nu au fost realizate extractii.</p>"
                            }]
                        }
                    ]}
        ]

        
    }//config

});