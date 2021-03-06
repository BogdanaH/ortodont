Ext.define('Ortodont.store.PriceStore', {
    extend: 'Ext.data.Store',


    requires: [
        'Ortodont.model.PriceModel'
    ],

    config: {
        data: [
            {
                id: 1,
                name: 'Consultatie ortodontica initiala',
                price: '70 Lei'
            },
            {
                id: 2,
                name: 'Prezentarea planului de tratament',
                price: '60 Lei'
            },
            {
                id: 3,
                name: 'Consultatie ortodontica de urgenta',
                price: '100 Lei'
            },
            {
                id: 4,
                name: 'Consultatie ortodontica lunara',
                price: '100 - 200 Lei'
            },
            {
                id: 5,
                name: 'Control + activare aparat mobilizabil',
                price: '60 Lei'
            },
            {
                id: 6,
                name: 'Control + activare aparat fix metalic',
                price: '100 Lei'
            },
            {
                id: 7,
                name: 'Control + activare aparat fix ceramic',
                price: '130 Lei'
            },
            {
                id: 8,
                name: 'Control + activare aparat lingual fix 2D',
                price: '150 Lei'
            },
            {
                id: 9,
                name: 'Consultatie post-tratament',
                price: '50 Lei'
            },
            {
                id: 10,
                name: 'Amprenta + model',
                price: '80 Lei'
            },
            {
                id: 11,
                name: 'Analiza teleradiografie',
                price: '50 Lei'
            },
            {
                id: 12,
                name: 'Aparat Lingual fix 2D pe o arcada',
                price: '4.000 Lei'
            },
            {
                id: 13,
                name: 'Aparat fix Safir Ice',
                price: '3.500 Lei'
            },
            {
                id: 14,
                name: 'Aparat mobilizabil',
                price: '800 - 1.000 Lei'
            },
            {
                id: 15,
                name: 'Aparat fix metalic pentru o arcada',
                price: '2.000 Lei'
            },
            {
                id: 16,
                name: 'Aparat fix metalic Damon pentru o arcada',
                price: '3.000 Lei'
            },
            {
                id: 17,
                name: 'Aparat fix ceramic pentru o arcada',
                price: '2.500 Lei'
            },
            {
                id: 18,
                name: 'Aparat fix ceramic cu slot metalic pentru o arcada',
                price: '3.000 Lei'
            },
            {
                id: 19,
                name: 'Aparat fix ceramic Damon pentru o arcada',
                price: '3.500 Lei'
            },
            {
                id: 21,
                name: 'Gutiera acrilica',
                price: '150 Lei'
            },
            {
                id: 22,
                name: 'Modificare aparat',
                price: '200 Lei'
            },
            {
                id: 23,
                name: 'Modele intermediare',
                price: '50 Lei'
            },
            {
                id: 24,
                name: 'Colare bracket nou metalic',
                price: '40 Lei'
            },
            {
                id: 25,
                name: 'Colare bracket nou ceramic',
                price: '100 Lei'
            }
        ],
        model: 'Ortodont.model.PriceModel',
        storeId: 'PriceStore'
    }
});