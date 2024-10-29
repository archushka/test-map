var wms_layers = [];


        var lyr_K_0 = new ol.layer.Tile({
            'title': 'Kарта-подложка',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_C10_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Cумма температур почвы >10 градусов <br><img src= "legend.png" width= "100px">',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/C10_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5746288.299159, 7563682.738619, 6644734.517880, 8783582.262429]
                            })
                        });
var format_T_2 = new ol.format.GeoJSON();
var features_T_2 = format_T_2.readFeatures(json_T_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_2.addFeatures(features_T_2);
var lyr_T_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_T_2, 
                style: style_T_2,
                interactive: true,
    title: 'Tяжелые металлы в почвах<br />\
    <img src="styles/legend/T_2_0.png" /> Районы по которым <br>обследование почв <br>не проводилось<br />\
    <img src="styles/legend/T_2_1.png" /> Районы по которым <br> проведено обследование почв<br />'
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
    title: 'Распаханность почв<br />\
    <img src="styles/legend/_3_0.png" /> 0 - 5 (очень слабо распаханные)<br />\
    <img src="styles/legend/_3_1.png" /> 5 - 10 (слабо распаханные)<br />\
    <img src="styles/legend/_3_2.png" /> 10 - 15 (средне распаханные)<br />\
    <img src="styles/legend/_3_3.png" /> 15 - 20 (сильно распаханные<br />\
    <img src="styles/legend/_3_4.png" /> 20 - 24 (очень сильно распаханные)<br />'
        });

lyr_K_0.setVisible(true);lyr_C10_1.setVisible(false);lyr_T_2.setVisible(false);lyr__3.setVisible(true);
var layersList = [lyr_K_0,lyr_C10_1,lyr_T_2,lyr__3];
lyr_T_2.set('fieldAliases', {'name': 'название района', 'Co': 'Co, мг/кг', 'Cu': 'Cu, мг/кг', 'Zn': 'Zn, мг/кг', });
lyr__3.set('fieldAliases', {'name': 'название района', 'area': 'площадь, га', 'plow': 'площадь обрабатываемых <br> земель', });
lyr_T_2.set('fieldImages', {'name': 'TextEdit', 'Co': 'TextEdit', 'Cu': 'TextEdit', 'Zn': 'TextEdit', });
lyr__3.set('fieldImages', {'name': 'TextEdit', 'area': 'TextEdit', 'plow': 'TextEdit', });
lyr_T_2.set('fieldLabels', {'name': 'inline label', 'Co': 'inline label', 'Cu': 'inline label', 'Zn': 'inline label', });
lyr__3.set('fieldLabels', {'name': 'inline label', 'area': 'inline label', 'plow': 'inline label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});