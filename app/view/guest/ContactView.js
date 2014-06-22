Ext.define('Ortodont.view.guest.ContactView', {
    extend: 'Ext.Container',
    alias: 'widget.contactView',

    requires: [
        'Ext.TitleBar',
        'Ext.Button',
    ],
    config: {
    	layout: 'fit',
    	scrollable: true,
    	cls: 'contact-view',
    	items:[{
    		xtype: 'tabpanel',
            height: '100%',
            styleHtmlContent: true,
            items: [{
            		title: 'General',
                	itemId: 'general',
                	xtype: 'label',
                    html:
                    '<div class="contactContent">'+
                    			'<div class="img"><img src="resources/img/contact/doctor.jpg" alt="Smiley face" height="200" width="200"></div>'+
                                '<div class="tip">Nume si prenume:</div>'+ 
                                    '<div class ="info">Popescu Laura</div>'+
                                    '<div class ="info">Medic specialist ortodontie si ortopedie dento-faciala | Absolvent UMF Iuliu Hatieganu 2004Medic specialist din 2007 |</div>'+
                                '<div class="tip">Adresa de email: </div>'+
                                    '<div class="info">popescu.laura@gmail.com</div>'+
                                '<div class="tip">Tel: </div>'+
                                    '<div class="info">0723 387 794</div>'+
                                '<div class="tip">Ultimele cursuri absolvite, specializari si diplome acordate: </div>'+
                                    '<div class="info">28 Septembrie 2013 - Curs "Un zambet perfect. Fatetele de la conventional la no-prep" - Dr Juergen Wahlmann, Germania</div>'+
                                    '<div class="info">6-8 Iunie 2013 - Al IV-lea Congres International ARSW - Abordari moderne in terapia ortodontica - Iasi</div>'+
                                    '<div class="info">17-18 Mai 2013 - Curs Challenging cases - Smart solutions - Bucuresti </div>'+
                                    '<div class="info">17 Februarie 2013- Instructor la Curs Tehnica Standard Edegwise - Iasi</div>'+
                                    '<div class="info">5-7 Iul 2012 Instructor la cursul Principiile Tehnici Standard Edegwise- Cluj-Napoca</div>'+
                                    '<div class="info">13-14 Mai 2012 Cefalometria-Perfectiune si Control. Biomecanica Simplificata pentru Anomaliile de Clasa II, Prof.Dr. Gerard Samson, Bucuresti</div>'+
                                    '<div class="info">28 Apr 2012 Absolvire  Curs Postuniversitar de Radioprotectie, Bucuresti</div>'+
                                    '<div class="info">Aprilie 2012-octombrie 2011  Curs Protetica Dentara intre estetica si echilibru ocluzal, Dr Smaranda Buduru,Stomestet Cluj-Napoca</div>'+
                                    '<div class="info">21-22 Nov 2011 Curs Diagnosticul, Planificarea si Mecanica Tratamentului Ortodontic, Prof Dr Richard P. McLaughlin, Bucuresti</div>'+
                                    '<div class="info">4-5 Nov 2011 Curs Calitate, Eficienta si Estetica in Filozofia de Tratament Straight-Forward, Prof Dr. David Mirabella, Bucuresti</div>'+
                                    '<div class="info">7-8 Oct 2011 Abordarea Contemporana a Ortopediei Dentofaciale.Prof. Dr. Tiziano Baccetti, Bucuresti</div>'+
                                    '<div class="info">26-27 Nov 2010 "Systemized & Effective Orthodontic Care" by Dr. Richard Mclaughlin Munchen, Germania</div>'+
                                    '<div class="info">4-18 Sept 2008 Absolvire curs  The Teewd Course Differential Diagnosis Directional Force Systems Edgewise Mechanotherapy,  curs sustinut la Fundatia Tweed, Tucson , Arizona , USA</div>'+
 
                    '</div>'     
            }, {
            	title: 'Cluj',
	            itemId: 'adressCluj',
            	items:[{
                	xtype: 'label',
	                html:
	                '<div class="contactContent">'+
	                            '<div class="tip">Adresa cabinet Cluj:</div>'+ 
	                                '<div class ="info">Str Frederic Joliot Curie Nr 2,Cluj-Napoca, Romania, Cod Postal: 400106</div>'+
	                            '<div class="tip">Tel:</div>'+ 
	                                '<div class ="info">0765 898 098</div>'+
	                '</div>' 
            	}, {
            		xtype:'map',
                    margin: '20 20 20 20',
                    height: '60%',
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

            	}


            ]}, {
                title: 'Turda',
                itemId: 'adressTurda',
                items:[{
                	xtype: 'label',
	                html:
	                '<div class="contactContent">'+
	                            '<div class="tip">Adresa cabinet Turda:</div>'+ 
	                                '<div class ="info">Str. 1 Decembrie 1918, 2, Turda, Cluj</div>'+
	                            '<div class="tip">Tel:</div>'+ 
	                                '<div class ="info">0765 000 098</div>'+
	                '</div>' 
            	}, {
            		xtype:'map',
                    margin: '20 20 20 20',
                    height: '60%',
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

            	}
            ]}, {
                title: 'Satu Mare',
                itemId: 'adressSatuMare',
                items:[{
                	xtype: 'label',
	                html:
	                '<div class="contactContent">'+
	                            '<div class="tip">Adresa cabinet Satu Mare:</div>'+ 
	                                '<div class ="info">Satu Mare, jud Satu Mare, Str. Wolfenbuttel, Nr. 49</div>'+
	                            '<div class="tip">Tel:</div>'+ 
	                                '<div class ="info">0765 999 098</div>'+
	                '</div>' 
            	}, {
            		xtype:'map',
                    margin: '20 20 20 20',
                    height: '60%',
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

            	}
            ]
            } 
            ]

 
    	}]

    }//config

 });