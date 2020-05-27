
 
   
    $(document).ready(function () {

        ymaps.ready(function () {
            var myMap = new ymaps.Map('YMapsID' , {
                center: [40.38, 49.87],
                zoom: 12,

            controls: []
        });

            var myPlacemark = new ymaps.Placemark([
                40.38, 49.87
            ], {
                balloonContentBody: [
                    '<address>',
                    '<strong>SEÇİLƏN ÜNVAN </strong>',
                    '<br/>',
                    'Address: ABBAS SƏHƏT KÜÇƏSİ 142 dalan 3',
                    '<br/>',
                    'For more information, see: <a href="https://gocreative.com.tr"</a>',
                    '</address>'
                ].join('')
            }, {
                preset: 'islands#redDotIcon'
            });

           /*  var myPlacemark2 = new ymaps.Placemark([
                40.40, 49.85
            ], {
                balloonContentBody: [
                    '<address>',
                    '<strong>Baku Binagadi 200</strong>',
                    '<br/>',
                    'Address: 1000, Baku, Azadliq Avenue, 16',
                    '<br/>',
                    'For more information, see: <a href="https://gocreative.com.tr"</a>',
                    '</address>'
                ].join('')
            }, {
                preset: 'islands#redDotIcon'
            }); */

            myMap.geoObjects.add(myPlacemark);
           // myMap.geoObjects.add(myPlacemark2);
        });
    });

    $(document).ready(function () {

        ymaps.ready(function () {
            var myMap = new ymaps.Map('YMapsID2' , {
                center: [40.38, 49.87],
                zoom: 12,

            controls: []
        });

            var myPlacemark = new ymaps.Placemark([
                40.38, 49.87
            ], {
                balloonContentBody: [
                    '<address>',
                    '<strong>SEÇİLƏN ÜNVAN </strong>',
                    '<br/>',
                    'Address: ABBAS SƏHƏT KÜÇƏSİ 142 dalan 3',
                    '<br/>',
                    'For more information, see: <a href="https://gocreative.com.tr"</a>',
                    '</address>'
                ].join('')
            }, {
                preset: 'islands#redDotIcon'
            });

           /*  var myPlacemark2 = new ymaps.Placemark([
                40.40, 49.85
            ], {
                balloonContentBody: [
                    '<address>',
                    '<strong>Baku Binagadi 200</strong>',
                    '<br/>',
                    'Address: 1000, Baku, Azadliq Avenue, 16',
                    '<br/>',
                    'For more information, see: <a href="https://gocreative.com.tr"</a>',
                    '</address>'
                ].join('')
            }, {
                preset: 'islands#redDotIcon'
            }); */

            myMap.geoObjects.add(myPlacemark);
           // myMap.geoObjects.add(myPlacemark2);
        });
    });



