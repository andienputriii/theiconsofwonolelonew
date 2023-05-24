var wms_layers = [];

var lyr_BaseMapFotoUdara_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Base Map Foto Udara",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BaseMapFotoUdara_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12294755.948746, -859876.103687, 12296071.599352, -858163.371172]
                            })
                        });
var format_TitikKoordinatIcon_1 = new ol.format.GeoJSON();
var features_TitikKoordinatIcon_1 = format_TitikKoordinatIcon_1.readFeatures(json_TitikKoordinatIcon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikKoordinatIcon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikKoordinatIcon_1.addFeatures(features_TitikKoordinatIcon_1);
var lyr_TitikKoordinatIcon_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikKoordinatIcon_1, 
                style: style_TitikKoordinatIcon_1,
                interactive: true,
                title: '<img src="styles/legend/TitikKoordinatIcon_1.png" /> Titik Koordinat Icon'
            });
var format_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2 = new ol.format.GeoJSON();
var features_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2 = format_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2.readFeatures(json_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2.addFeatures(features_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2);
var lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2, 
                style: style_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2,
                interactive: true,
                title: '<img src="styles/legend/RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2.png" /> Rute Masjid Ki Ageng Wonolelo dan Rumah Tiban (Roda 4)'
            });
var format_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3 = new ol.format.GeoJSON();
var features_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3 = format_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3.readFeatures(json_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3.addFeatures(features_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3);
var lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3, 
                style: style_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3,
                interactive: true,
                title: '<img src="styles/legend/RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3.png" /> Rute Masjid Ki Ageng Wonolelo dan Rumah Tiban (Roda 2)'
            });
var format_RuteMakamKiAgengWonolelo_4 = new ol.format.GeoJSON();
var features_RuteMakamKiAgengWonolelo_4 = format_RuteMakamKiAgengWonolelo_4.readFeatures(json_RuteMakamKiAgengWonolelo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteMakamKiAgengWonolelo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteMakamKiAgengWonolelo_4.addFeatures(features_RuteMakamKiAgengWonolelo_4);
var lyr_RuteMakamKiAgengWonolelo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RuteMakamKiAgengWonolelo_4, 
                style: style_RuteMakamKiAgengWonolelo_4,
                interactive: true,
                title: '<img src="styles/legend/RuteMakamKiAgengWonolelo_4.png" /> Rute Makam Ki Ageng Wonolelo'
            });
var format_RutePasarSaparan_5 = new ol.format.GeoJSON();
var features_RutePasarSaparan_5 = format_RutePasarSaparan_5.readFeatures(json_RutePasarSaparan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutePasarSaparan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RutePasarSaparan_5.addFeatures(features_RutePasarSaparan_5);
var lyr_RutePasarSaparan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RutePasarSaparan_5, 
                style: style_RutePasarSaparan_5,
                interactive: true,
                title: '<img src="styles/legend/RutePasarSaparan_5.png" /> Rute Pasar Saparan'
            });

lyr_BaseMapFotoUdara_0.setVisible(true);lyr_TitikKoordinatIcon_1.setVisible(true);lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2.setVisible(true);lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3.setVisible(true);lyr_RuteMakamKiAgengWonolelo_4.setVisible(true);lyr_RutePasarSaparan_5.setVisible(true);
var layersList = [lyr_BaseMapFotoUdara_0,lyr_TitikKoordinatIcon_1,lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2,lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3,lyr_RuteMakamKiAgengWonolelo_4,lyr_RutePasarSaparan_5];
lyr_TitikKoordinatIcon_1.set('fieldAliases', {'Icon': 'Icon', 'X': 'X', 'Y': 'Y', });
lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteMakamKiAgengWonolelo_4.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RutePasarSaparan_5.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_TitikKoordinatIcon_1.set('fieldImages', {'Icon': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2.set('fieldImages', {'fid': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3.set('fieldImages', {'fid': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteMakamKiAgengWonolelo_4.set('fieldImages', {'fid': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RutePasarSaparan_5.set('fieldImages', {'fid': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_TitikKoordinatIcon_1.set('fieldLabels', {'Icon': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_2.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_3.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_RuteMakamKiAgengWonolelo_4.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_RutePasarSaparan_5.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_RutePasarSaparan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});