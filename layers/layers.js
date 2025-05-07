var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1 = new ol.format.GeoJSON();
var features_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1 = format_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.readFeatures(json_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.addFeatures(features_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1);
var lyr_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1, 
                style: style_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1,
                popuplayertitle: 'Kommunegrænse_slagelse — kommuneinddeling_dagi_110000',
                interactive: false,
                title: '<img src="styles/legend/Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.png" /> Kommunegrænse_slagelse — kommuneinddeling_dagi_110000'
            });
var format_Kortlgges_feltID_2 = new ol.format.GeoJSON();
var features_Kortlgges_feltID_2 = format_Kortlgges_feltID_2.readFeatures(json_Kortlgges_feltID_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kortlgges_feltID_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kortlgges_feltID_2.addFeatures(features_Kortlgges_feltID_2);
var lyr_Kortlgges_feltID_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kortlgges_feltID_2, 
                style: style_Kortlgges_feltID_2,
                popuplayertitle: 'Kortlægges_feltID',
                interactive: true,
    title: 'Kortlægges_feltID<br />\
    <img src="styles/legend/Kortlgges_feltID_2_0.png" /> Hede<br />\
    <img src="styles/legend/Kortlgges_feltID_2_1.png" /> Mose<br />\
    <img src="styles/legend/Kortlgges_feltID_2_2.png" /> Strandeng<br />\
    <img src="styles/legend/Kortlgges_feltID_2_3.png" /> Eng<br />\
    <img src="styles/legend/Kortlgges_feltID_2_4.png" /> Overdrev<br />' });
var format_25mhjdekurveeksportdhm_kurve__25_m_wfs_3 = new ol.format.GeoJSON();
var features_25mhjdekurveeksportdhm_kurve__25_m_wfs_3 = format_25mhjdekurveeksportdhm_kurve__25_m_wfs_3.readFeatures(json_25mhjdekurveeksportdhm_kurve__25_m_wfs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_25mhjdekurveeksportdhm_kurve__25_m_wfs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_25mhjdekurveeksportdhm_kurve__25_m_wfs_3.addFeatures(features_25mhjdekurveeksportdhm_kurve__25_m_wfs_3);
var lyr_25mhjdekurveeksportdhm_kurve__25_m_wfs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_25mhjdekurveeksportdhm_kurve__25_m_wfs_3, 
                style: style_25mhjdekurveeksportdhm_kurve__25_m_wfs_3,
                popuplayertitle: '2.5m højdekurve eksport — dhm_kurve__25_m_wfs',
                interactive: false,
                title: '<img src="styles/legend/25mhjdekurveeksportdhm_kurve__25_m_wfs_3.png" /> 2.5m højdekurve eksport — dhm_kurve__25_m_wfs'
            });
var format_Vandlbsmidte_slagelse_sydvandlbsmidte_4 = new ol.format.GeoJSON();
var features_Vandlbsmidte_slagelse_sydvandlbsmidte_4 = format_Vandlbsmidte_slagelse_sydvandlbsmidte_4.readFeatures(json_Vandlbsmidte_slagelse_sydvandlbsmidte_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlbsmidte_slagelse_sydvandlbsmidte_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlbsmidte_slagelse_sydvandlbsmidte_4.addFeatures(features_Vandlbsmidte_slagelse_sydvandlbsmidte_4);
var lyr_Vandlbsmidte_slagelse_sydvandlbsmidte_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlbsmidte_slagelse_sydvandlbsmidte_4,
maxResolution:28004.466152261964,
 
                style: style_Vandlbsmidte_slagelse_sydvandlbsmidte_4,
                popuplayertitle: 'Vandløbsmidte_slagelse_syd — vandlbsmidte',
                interactive: false,
                title: '<img src="styles/legend/Vandlbsmidte_slagelse_sydvandlbsmidte_4.png" /> Vandløbsmidte_slagelse_syd — vandlbsmidte'
            });
var group_FremsendtdobbeltmaterialefraSlagelse = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Fremsendt dobbelt materiale fra Slagelse'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.setVisible(true);lyr_Kortlgges_feltID_2.setVisible(true);lyr_25mhjdekurveeksportdhm_kurve__25_m_wfs_3.setVisible(true);lyr_Vandlbsmidte_slagelse_sydvandlbsmidte_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1,lyr_Kortlgges_feltID_2,lyr_25mhjdekurveeksportdhm_kurve__25_m_wfs_3,lyr_Vandlbsmidte_slagelse_sydvandlbsmidte_4];
lyr_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'status': 'status', 'geometristatus': 'geometristatus', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'virkningsaktoer': 'virkningsaktoer', 'forretningshaendelse': 'forretningshaendelse', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'registreringsaktoer': 'registreringsaktoer', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'dagiid': 'dagiid', 'navn': 'navn', 'redigeringsret': 'redigeringsret', 'dataspecifikation': 'dataspecifikation', 'landekode': 'landekode', 'skala': 'skala', 'udtraeksdato': 'udtraeksdato', 'kommunekode': 'kommunekode', 'lau1vaerdi': 'lau1vaerdi', 'udenforkommuneinddeling': 'udenforkommuneinddeling', 'regionskode': 'regionskode', 'regionslokalid': 'regionslokalid', 'region_owns': 'region_owns', 'region_href': 'region_href', 'region_title': 'region_title', 'region_nilreason': 'region_nilreason', });
lyr_Kortlgges_feltID_2.set('fieldAliases', {'Objekt_id': 'DMP objekt_ID', 'Natyp_navn': 'Naturtype', 'StedNavn': 'Slagelse ID', 'Orden': 'Afstand fra ref.punkt', 'Polygon_name': 'FeltID', });
lyr_25mhjdekurveeksportdhm_kurve__25_m_wfs_3.set('fieldAliases', {'fid': 'fid', 'kurveId': 'kurveId', 'objektnavn': 'objektnavn', 'hjaelpekurve': 'hjaelpekurve', 'hoejde': 'hoejde', });
lyr_Vandlbsmidte_slagelse_sydvandlbsmidte_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'tempid': 'tempid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', });
lyr_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'virkningfra': 'DateTime', 'virkningtil': 'DateTime', 'virkningsaktoer': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'registreringfra': 'DateTime', 'registreringtil': 'DateTime', 'registreringsaktoer': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'dagiid': 'TextEdit', 'navn': 'TextEdit', 'redigeringsret': 'TextEdit', 'dataspecifikation': 'TextEdit', 'landekode': 'TextEdit', 'skala': 'TextEdit', 'udtraeksdato': 'DateTime', 'kommunekode': 'TextEdit', 'lau1vaerdi': 'TextEdit', 'udenforkommuneinddeling': 'CheckBox', 'regionskode': 'TextEdit', 'regionslokalid': 'TextEdit', 'region_owns': 'CheckBox', 'region_href': 'TextEdit', 'region_title': 'TextEdit', 'region_nilreason': 'TextEdit', });
lyr_Kortlgges_feltID_2.set('fieldImages', {'Objekt_id': 'TextEdit', 'Natyp_navn': 'TextEdit', 'StedNavn': 'TextEdit', 'Orden': 'TextEdit', 'Polygon_name': 'TextEdit', });
lyr_25mhjdekurveeksportdhm_kurve__25_m_wfs_3.set('fieldImages', {'fid': 'TextEdit', 'kurveId': 'TextEdit', 'objektnavn': 'TextEdit', 'hjaelpekurve': 'CheckBox', 'hoejde': 'TextEdit', });
lyr_Vandlbsmidte_slagelse_sydvandlbsmidte_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'tempid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'DateTime', 'registreringtil': 'DateTime', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'DateTime', 'virkningtil': 'DateTime', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'CheckBox', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'CheckBox', 'link': 'TextEdit', });
lyr_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'virkningsaktoer': 'no label', 'forretningshaendelse': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'registreringsaktoer': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'dagiid': 'no label', 'navn': 'no label', 'redigeringsret': 'no label', 'dataspecifikation': 'no label', 'landekode': 'no label', 'skala': 'no label', 'udtraeksdato': 'no label', 'kommunekode': 'no label', 'lau1vaerdi': 'no label', 'udenforkommuneinddeling': 'no label', 'regionskode': 'no label', 'regionslokalid': 'no label', 'region_owns': 'no label', 'region_href': 'no label', 'region_title': 'no label', 'region_nilreason': 'no label', });
lyr_Kortlgges_feltID_2.set('fieldLabels', {'Objekt_id': 'inline label - always visible', 'Natyp_navn': 'inline label - visible with data', 'StedNavn': 'inline label - always visible', 'Orden': 'hidden field', 'Polygon_name': 'inline label - always visible', });
lyr_25mhjdekurveeksportdhm_kurve__25_m_wfs_3.set('fieldLabels', {'fid': 'no label', 'kurveId': 'no label', 'objektnavn': 'no label', 'hjaelpekurve': 'no label', 'hoejde': 'no label', });
lyr_Vandlbsmidte_slagelse_sydvandlbsmidte_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'tempid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', });
lyr_Vandlbsmidte_slagelse_sydvandlbsmidte_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});