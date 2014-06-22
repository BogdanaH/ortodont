Ext.define('Ortodont.view.ContactView', {
    extend: 'Ext.Container',
    alias: 'widget.contactView',

    requires: [
        'Ext.TitleBar',
        'Ext.Button',
    ],
    config: {
       layout: 'fit',
       cls: 'contact-view',
       items: [{
                    xtype: 'label',
                    html:
                    '<div class="contactContent">'+
                                '<div class="tip">Adresa de e-mail:</div>'+ 
                                    '<div class ="info">sugestii@ctpcj.ro</div>'+
                                '<div class="tip">Adresa: </div>'+
                                    '<div class="info">Compania de Transport Public Cluj Napoca SA, B-dul 21 Decembrie 1989, Nr. 128-130, Cluj-Napoca - 400604, ROMANIA</div>'+
                                '<div class="tip">Tel: </div>'+
                                    '<div class="info">0264-430917, 430919 </div>'+
                                '<div class="tip">Fax: </div>'+
                                    '<div class="info">0264-430931</div>'+
                                '<div class="tip">Dispecerat central (24 din 24):</div>'+
                                    '<div class="info">0264-430874</div>'+
                    '</div>'           
                },{
                    xtype:'map',
                    margin: '20 20 20 20',
                    height: '50%',
                    docked: 'bottom',
                    mapOptions : {
                        center : new google.maps.LatLng(46.7750551, 23.6063093),  //nearby sediul RATUC
                        zoom : 14,
                        mapTypeId : google.maps.MapTypeId.ROADMAP,
                        navigationControl: true,
                        navigationControlOptions: {
                            style: google.maps.NavigationControlStyle.DEFAULT
                        }
                    },
                    listeners: {
                        maprender: function(comp, map) {
                            var pos = new google.maps.LatLng(46.7750551, 23.6063093),
                                markerSR = new google.maps.Marker({
                                    position: new google.maps.LatLng(46.7750551, 23.6063093), // Sediul RATUC
                                    title : 'Sediul RATUC',
                                    map: map
                                }),
                                markerBA = new google.maps.Marker({
                                    position: new google.maps.LatLng(46.7764171, 23.6057428), // Birourile de abonamente si amenzi
                                    title : 'Birourile de abonamente si amenzi',
                                    map: map
                                }),
                                infowindowSR = new google.maps.InfoWindow({
                                    content: '<div id="content"><h3>Sediul RATUC</h3></div>'
                        
                                });
                                infowindowBA = new google.maps.InfoWindow({
                                    content: '<div id="content"><h3>Birourile de abonamente si amenzi</h3></div>'
                        
                                });
                                google.maps.event.addListener(markerSR, 'click', function() {
                                    infowindowSR.open(map, markerSR);
                                });
                                google.maps.event.addListener(markerBA, 'click', function() {
                                    infowindowBA.open(map, markerBA);
                                });
                        }//function
                    }//listeners
                }]
    }       
});