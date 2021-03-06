Ext.define('Ortodont.view.guest.MainView', {
    extend: 'Ext.Container',
    alias: 'widget.mainView',

    requires: [
        'Ext.TitleBar',
        'Ext.Button'
    ],

    config: {
        layout: 'card',
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'TeethEstet',
            items: [{
                xtype: 'button',
                align: 'left',
                iconMask: true,
                ui: 'plain',
                iconCls: 'menu'
            }]
        }, {
                xtype: 'carousel',
                layout: 'fit',
                direction: 'horizontal',
                defaults: {
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    defaults: {
                        flex: 0.5
                    }   
                },  
                items: [{
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items:[{
                                cls: 'imag one'
                            }]
                        }, {
                            items:[{
                                cls: 'imag two'
                             }, {
                                styleHtmlContent: 'true',
                                html: "<h3>Safir Ice</h3><p>Bracket-urile sunt complet transparente, fiind cele mai discrete, indiferent de culoarea dintilor. Mai mult, ele au o structură de safir monocristalin si nu îsi modifică culoarea si nu se pătează în timp, astfel încât veti arăta la fel de bine pe toată durata tratamentului.</p>"
                             }]
                        },{
                            items:[{
                                cls: 'imag three'
                             }, {
                                styleHtmlContent: 'true',
                                html: "<h3>Metalic</h3><p>Acesta este alcatuit din bracketi metalici sudati de sarma din otel. La inceput este posibil ca metalul sa irite mucoasa bucala, insa dupa cateva saptamani apare obisnuinta si nu mai este nicio problema. Tratamentul este in general mai scurt,fiind un aparat puternic, ce rareori cedeaza.</p>"
                             }]
                        }, {
                            items:[{
                                cls: 'imag four'
                             }, {
                                 styleHtmlContent: 'true',
                                 html: "<h3>Lingual</h3><p>Acest tip de aparat arata aproximativ ca si cel clasic, doar ca bracketii sunt dispusi pe partea interioara a dintilor, astfel nefiind vizibili la exterior. Insa tocmai datorita acestei pozitionari, aparatul intra constant in contact cu limba, fapt ce poate produce inconfort, iritatii si dificultati de vorbire.</p>"
                             }]
                        }, { 
                            items:[{
                                cls: 'imag five'
                            }, {
                                styleHtmlContent: 'true',
                                html: "<h3>Mobilizabil</h3><p>Acest tip de aparat se adreseaza, in principal, copiilor cu varste cuprinse inre 6-7 ani cand apar primii dinti definitivi si 11-12 ani cand se inlocuiesc si ultimii dinti de lapte. Ele se realizeaza dintr-un plastic viu colorat pentru a le face cat mai atractive pentru cei mici.</p>"
                            }]
                        }
                    ]}
        ]
    }
});