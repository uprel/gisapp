/* 
 * 
 * Translations_cfg.js -- part of Quantum GIS Web Client 
 * 
 * Copyright (2010-2012), The QGIS Project All rights reserved. 
 * Quantum GIS Web Client is released under a BSD license. Please see 
 * https://github.com/qgis/qgis-web-client/blob/master/README 
 * for the full text of the license and the list of contributors. 
 * 
 */ 

var availableHelpLanguages = Array("en","es","de","hu","it","pl","fr","ro","sk","sv");
var availableLanguages = [];
availableLanguages["en"] = {names:[], translator:"Andreas Neumann"}; //a (dot) neumann (at) carto (dot) net
availableLanguages["es"] = {names:[], translator:"Samuel Mesa, Diana Galindo, Germán Carrillo, Ignacio Serrano Ayllón"}; // samuelmesa (at) gmail (dot) com , drgalindog (at) linuxmail (dot) org
availableLanguages["de"] = {names:[], translator:"Andreas Neumann"}; //a(dot)neumann(at)carto(dot)net
availableLanguages["fr"] = {names:[], translator:"Mayeul Kauffmann, Amandine Schloupt (Aguram)"}; //mayeul (dot) kauffmann (at) free (dot) fr, aschloupt (at) aguram (dot) org
availableLanguages["it"] = {names:[], translator:"Paolo Cavallini (Faunalia), Giovanni Allegri (Gis3W), Alessandro Pasotti (ItOpen)"}; //cavallini (at) faunalia (dot) it
availableLanguages["pt_PT"] = {names:[], translator:"Nelson Silva, Giovanni Manghi (Faunalia)"}; //nelson (dot) jgs (at) gmail (dot) com>, giovanni (dot) manghi (at) faunalia (dot) pt
availableLanguages["uk"] = {names:[], translator:"Pavlo Taranov"}; //taranov (dot) pavel (at) gmail (dot) com>
availableLanguages["hu"] = {names:[], translator:"Szilárd Lajcsik"}; //szilajinfo (at) gmail (dot) com>
availableLanguages["ro"] = {names:[], translator:"Tudor Bărăscu"}; //tudorbarascu (at) gmail (dot) com>
availableLanguages["ru"] = {names:[], translator:"Nikolay Zhigalov"}; //jederlacht1 (at) gmail (dot) com>
availableLanguages["sl"] = {names:[], translator:"Uroš Preložnik"};	//uros00 (at) gmail (dot) com
availableLanguages["nl"] = {names:[], translator:"Carl Defevere"}; //carl (dot) defevere (at) gmail (dot) com>
availableLanguages["pl"] = {names:[], translator:"Sławomir Bienias"}; //slawomir (dot) bienias (at) gmail (dot) com>
availableLanguages["sk"] = {names:[], translator:"Mrtin Baloga"}; //slawomir (dot) bienias (at) gmail (dot) com>
availableLanguages["sv"] = {names:[], translator:"Anders Wadell"}; //tillwadell (at) yahoo (dot) com>
availableLanguages["en"].names["en"] = "English";
var mapAppLoadingString = [];
mapAppLoadingString["sv"] = "Laddar kartverktyget...";
var mapLoadingString = [];
mapLoadingString["sv"] = "Laddar karta...";
var modeNavigationString = [];
modeNavigationString["sv"] = "Läge: navigation. Använd shift/rektangle eller musjulet för att zooma.";
var modeZoomRectangle = [];
modeZoomRectangle["sv"] = "Läge: zooma med rektangel. Rita en rektangel runt det område som du vill zooma till.";
var modeObjectIdentificationString = [];
modeObjectIdentificationString["sv"] = "Läge: Identifiera ett objekt. Klicka på objektet för att lista visa attribut.";
var modeMapTipsString = [];
modeMapTipsString["sv"] = "Läge: Karttips. Peka med musen för att får verktygstips.";
var modeMeasureDistanceString = [];
modeMeasureDistanceString["sv"] = "Läge: Mäta avstånd. Avsluta med ett dubbelklick.";
var modeMeasureAreaString = [];
modeMeasureAreaString["sv"] = "Läge: Mäta ytor. Avsluta med ett dubbelklick.";
var modeStreetViewString = [];
modeStreetViewString["sv"] = "Läge: GoogleStreetView. Klicka på en väg.";
var modePrintingString = [];
modePrintingString["sv"] = "Läge: utskrift. Flytta eller rotera kartan till önskat utsnitt. Skapa utskriften genom att trycka på 'Utskrift'-knappen.";
var printLoadingString = [];
printLoadingString["sv"] = "Utskrift påbörjad. Vänligen vänta...";
var leftPanelTitleString = [];
leftPanelTitleString["sv"] = "Innehåll och verktyg";
var searchPanelTitleString = [];
searchPanelTitleString["sv"] = "Sök";
var mapThemeButtonTitleString = [];
mapThemeButtonTitleString["sv"] = "Kartteman";
var themeSwitcherWindowTitleString = [];
themeSwitcherWindowTitleString["sv"] = "Val av karttema";
var themeSwitcherFilterLabelString = [];
themeSwitcherFilterLabelString["sv"] = "Filtrera utifrån karttitel: ";
var themeSwitcherAllThemesListViewString = [];
themeSwitcherAllThemesListViewString["sv"] = "Alla kartteman";
var themeSwitcherTooltipResponsibleString = [];
themeSwitcherTooltipResponsibleString["sv"] = "Ansvarig: ";
var themeSwitcherTooltipTagString = [];
themeSwitcherTooltipTagString["sv"] = "Etikett: ";
var themeSwitcherTooltipMapThemeString = [];
themeSwitcherTooltipMapThemeString["sv"] = "Karttema: ";
var themeSwitcherTooltipUpdateString = [];
themeSwitcherTooltipUpdateString["sv"] = "Uppdateringsintervall: ";
var themeSwitcherTooltipLastUpdateString = [];
themeSwitcherTooltipLastUpdateString["sv"] = "Senaste uppdatering: ";
var themeSwitcherTooltipPwProtectedString = [];
themeSwitcherTooltipPwProtectedString["sv"] = "lösenordsskyddad";
var emptyThemeSearchFieldString = [];
emptyThemeSearchFieldString["sv"] = "Lägg till söksträng";
var resetThemeSearchFieldTooltipString = [];
resetThemeSearchFieldTooltipString["sv"] = "Återställ sökfilter";
var mapPanelTitleString = [];
mapPanelTitleString["sv"] = "Karta";
var layerTreeTitleString = [];
layerTreeTitleString["sv"] = "Kartlager";
var backgroundLayerTitleString = [];
backgroundLayerTitleString["sv"] = "Bakgrundslager";
var externalLayerTitleString = [];
externalLayerTitleString["sv"] = "Externa lager";
var layerOrderPanelTitleString = [];
layerOrderPanelTitleString["sv"] = "Lagerordning";
var layerOrderPanelLayerSettingsTooltipString = [];
layerOrderPanelLayerSettingsTooltipString["sv"] = "Inställningar";
var layerOrderPanelVisibilityChangeTooltipString = [];
layerOrderPanelVisibilityChangeTooltipString["sv"] = "Ändra lagersynlighet";
var layerOrderPanelMoveLayerTextString = [];
layerOrderPanelMoveLayerTextString["sv"] = "Flytta lager";
var layerOrderPanelTransparencyTooltipString = [];
layerOrderPanelTransparencyTooltipString["sv"] = "Genomskinlighet {0}%";
var legendTabTitleString = [];
legendTabTitleString["sv"] = "Teckenförklaring";
var legendTabLoadingString = [];
legendTabLoadingString["sv"] = "Laddar teckenförklaring, vänligen vänta...";
var metadataTabTitleString = [];
metadataTabTitleString["sv"] = "Metadata";
var helpWindowTitleString = [];
helpWindowTitleString["sv"] = "Hjälp";
var legendMetadataWindowTitleString = [];
legendMetadataWindowTitleString["sv"] = "Teckenförklaring och metadata för lagret:";
var metadataSectionTitleString = [];
metadataSectionTitleString["sv"] = "Metadata för lager:";
var abstractString = [];
abstractString["sv"] = "Sammandrag:";
var layerQueryable = [];
layerQueryable["sv"] = "Frågeställning går att göra för detta lager: ";
var yesString = [];
yesString["sv"] = "ja";
var noString = [];
noString["sv"] = "nej";
var layerGroupString = [];
layerGroupString["sv"] = "Lagergrupp";
var displayFieldString = [];
displayFieldString["sv"] = "Fält";
var coordinateSystemsString = [];
coordinateSystemsString["sv"] = "Tillgängliga koordinatsystem";
var geographicExtentString = [];
geographicExtentString["sv"] = "Geografisk utbredning";
var westString = [];
westString["sv"] = "väst";
var eastString = [];
eastString["sv"] = "öst";
var northString = [];
northString["sv"] = "norr";
var southString = [];
southString["sv"] = "söder";
var attributesString = [];
attributesString["sv"] = "Attribut / Fält";
var attributeNameString = [];
attributeNameString["sv"] = "Attributnamn";
var attributeTypeString = [];
attributeTypeString["sv"] = "Typ";
var attributeCommentString = [];
attributeCommentString["sv"] = "Kommentar";
var attributeLengthString = [];
attributeLengthString["sv"] = "Längd";
var attributePrecisionString = [];
attributePrecisionString["sv"] = "Precision";
var objectIdentificationTextLabel = [];
objectIdentificationTextLabel["sv"] = "Identifiera objekt: ";
var coordinateTextLabel = [];
coordinateTextLabel["sv"] = "Koordinat:";
var searchFieldDefaultTextString = [];
searchFieldDefaultTextString["sv"] = "Sök (adress, spårnummer, namn, m.m.)";
var searchButtonString = [];
searchButtonString["sv"] = "Sök";
var resetButtonString = [];
resetButtonString["sv"] = "Rensa";
var pleaseWaitString = [];
pleaseWaitString["sv"] = "Vänligen vänta";
var searchResultString = [];
searchResultString["sv"] = "Sökresultat";
var networkErrorString = [];
networkErrorString["sv"] = "Nätverksfel";
var missingOrInvalidSearchParams = [];
missingOrInvalidSearchParams["sv"] = "Felaktiga eller saknade värden i sökformuläret";
var searchErrorString = [];
searchErrorString["sv"] = "Fel uppkom vid sökning";
var searchNoRecordsFoundString = [];
searchNoRecordsFoundString["sv"] = "Inget innehåll hittades"; 
var printSettingsToolbarTitleString = [];
printSettingsToolbarTitleString["sv"] = "Utskriftsinställningar";
var printSettingsRotationTextlabelString = [];
printSettingsRotationTextlabelString["sv"] = "Rotation: ";
var printButtonTextString = [];
printButtonTextString["sv"] = "Utskrift";
var printCancelButtonTextString = [];
printCancelButtonTextString["sv"] = "Ångra";
var objectIdentificationModeString = [];
objectIdentificationModeString["topMostHit"] = [];
objectIdentificationModeString["topMostHit"]["sv"] = "Toppträffar";
objectIdentificationModeString["allLayers"] = [];
objectIdentificationModeString["allLayers"]["sv"] = "Alla lager";
objectIdentificationModeString["activeLayers"] = [];
objectIdentificationModeString["activeLayers"]["sv"] = "Aktiva lager";
var measureDistanceResultPrefixString = [];
measureDistanceResultPrefixString["sv"] = "Avstånd";
var measureAreaResultPrefixString = [];
measureAreaResultPrefixString["sv"] = "Area";
var zoomRectangleTooltipString = [];
zoomRectangleTooltipString["sv"] = "Zooma med rektangel";
var zoomFullViewTooltipString = [];
zoomFullViewTooltipString["sv"] = "Visa hela kartans utbredning";
var navigationHistoryBackwardTooltipString = [];
navigationHistoryBackwardTooltipString["sv"] = "Navigationshistorik bakåt";
var navigationHistoryForwardTooltipString = [];
navigationHistoryForwardTooltipString["sv"] = "Navigationshistorik framåt";
var zoomInTooltipString = [];
zoomInTooltipString["sv"] = "Inzoomning";
var zoomOutTooltipString = [];
zoomOutTooltipString["sv"] = "Utzoomning";
var objIdentificationTooltipString = [];
objIdentificationTooltipString["sv"] = "Identifiera objekt (Visa attribut)";
var mapTipsTooltipString = [];
mapTipsTooltipString["sv"] = "Visa karttips (attribut data)";
var measureDistanceTooltipString = [];
measureDistanceTooltipString["sv"] = "Avståndsmätning";
var measureAreaTooltipString = [];
measureAreaTooltipString["sv"] = "Ytmätning";
var printMapTooltipString = [];
printMapTooltipString["sv"] = "Utskrift";
var printMapDisabledTooltipString = [];
printMapDisabledTooltipString["sv"] = "Utskrift avstängd, inga kartblad förberedda i projektet";
var sendPermalinkTooltipString = [];
sendPermalinkTooltipString["sv"] = "Skapa en direktlänk till nuvarande karta";
var sendPermalinkLinkFromString = [];
sendPermalinkLinkFromString["sv"] = "Länk till nuvarande karta";
var showHelpTooltipString = [];
showHelpTooltipString["sv"] = "Visa hjälp";
var showLocationTooltipString = [];
showLocationTooltipString["sv"] = "Visa plats";
var geonamesLoadingString = [];
geonamesLoadingString["sv"] = "Sök...";
var geonamesEmptyString = [];
geonamesEmptyString["sv"] = "Search location";
var resetSearchFieldTooltipString = [];
resetSearchFieldTooltipString["sv"] = "Rensa/töm sökfältet";
var printWindowTitleString = [];
printWindowTitleString["sv"] = "Systemet genererar en PDF. Vid utskrift, vänligen bocka ur 'Anpassa till sida' för att få korrekt skala.";
var printingObjectDataAlternativeString1 = [];
printingObjectDataAlternativeString1["sv"] = 'Din webbläsare kan inte direktöppna PDF filer. Vänligen <a href="';
var printingObjectDataAlternativeString2 = [];
printingObjectDataAlternativeString2["sv"] = '">ladda ner PDF filen här.</a>.</p></object>';
var printButtonTooltipString = [];
printButtonTooltipString["sv"] = "Utskrift (Generera PDF)";
var printCancelButtonTooltipString = [];
printCancelButtonTooltipString["sv"] = "Avbryt utskrift (Stäng)";
printCancelButtonTooltipString["sv"] = "Avbryt utskrift (Stäng)";
var mapThemeButtonTooltipString = [];
mapThemeButtonTooltipString["sv"] = "Klicka för att välja ett nytt karttema";
var tooltipLayerTreeLayerOutsideScale = [];
tooltipLayerTreeLayerOutsideScale["sv"] = "Synlig vid skala";
var clickPopupTitleString = [];
clickPopupTitleString["sv"] = "Resultat"; //FIXME
var contextZoomLayerExtent = [];
contextZoomLayerExtent["sv"] = "Zooma till lagrets utbredning";
var contextOpenTable = [];
contextOpenTable["sv"] = "Visa attributtabell";
var contextDataExport = [];
contextDataExport["sv"] = "Exportera lager till...";
var contextUseExtent = [];
contextUseExtent["sv"] = "Använd nuvarande kartutbredning";
var errMessageStartupMapParamString = [];
errMessageStartupMapParamString["sv"] = "Startparameter 'karta' saknas!";
var errMessageStartupNotAllParamsFoundString = [];
errMessageStartupNotAllParamsFoundString["sv"] = "Några viktiga parametrar saknas eller är felaktiga.";
var errMessageExtentParamWrongPart1 = [];
errMessageExtentParamWrongPart1["sv"] = "Startparameter '";
var errMessageExtentParamWrongPart2 = [];
errMessageExtentParamWrongPart2["sv"] = "' behöver vara i OpenLayers. Områdesformat: 'vänster,ner,höger,upp'.";
var errMessageInvalidLanguageCodeString1 = [];
errMessageInvalidLanguageCodeString1["sv"] = "Felaktig språkkod: ";
var errMessageInvalidLanguageCodeString2 = [];
errMessageInvalidLanguageCodeString2["sv"] = "Växlar till standard språk ";
var errMessageSearchComboNetworkRequestFailureTitleString = [];
errMessageSearchComboNetworkRequestFailureTitleString["sv"] = "Nätverksanrop misslyckades";
var errMessageSearchComboNetworkRequestFailureString = [];
errMessageSearchComboNetworkRequestFailureString["sv"] = "Sökresultatets nätverksanrop för geometri misslyckades:\n";