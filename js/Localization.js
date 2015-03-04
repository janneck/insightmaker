"use strict";
/*

Copyright 2010-2015 Scott Fortmann-Roe. All rights reserved.

This file may distributed and/or modified under the
terms of the Insight Maker Public License (https://InsightMaker.com/impl).

*/

var translations = {
	"Add Primitive" : "Element einfügen",
	"Add Stock" : "Lager einfügen",
	"Add Variable" : "Variable einfügen",
	"Add Converter" : "Umwandler einfügen",
	"Add Text Field" : "Text einfügen",
	"Add Picture" : "Bild einfügen",
	"Ghost Primitive" : "Alias erzeugen",
	"Make Folder" : "Gruppe erzeugen",

	"New Stock" : "Neues Lager",
	"New Variable" : "Neue Variable",
	"New Converter" : "Neuer Umwandler",

	"Flow" : "Fluss",
	"Flows" : "Flüsse",
	"Link" : "Verbindung",
	"Links" : "Verbindungen",

	"Settings" : "Simulationseinstellungen",
	"Simulation Time Settings" : "Simulationseinstellungen",
	"Simulation Start" : "Startzeit",
	"Simulation Length" : "Dauer",
	"Time Units" : "Zeiteinheit",
	"Seconds" : "Sekunden",
	"Minutes" : "Minuten",
	"Hours" : "Stunden",
	"Days" : "Tage",
	"Weeks" : "Wochen",
	"Months" : "Monate",
	"Years" : "Jahre",
	"Pause Interval" : "Pausenintervall",
	"No Pause" : "Keine Pause",
	"Analysis Algorithm" : "Rechenverfahren",
	"Fast (Euler)" : "Euler-Cauchy",
	"Accurate (RK4)" : "Runge-Kutta",
	"Simulation Time Step" : "Zeitschritt",

	"Simulate" : "Simulieren",
	"Simulation Results %s" : "Simulationsergebnisse %s",
	"Add Display" : "Neue Anzeige",
	"Delete Display" : "Anzeige löschen",
	"No chart or table to delete." : "Es gibt keine Anzeige zum Löschen.",
	"Move display to the left." : "Anzeige nach links verschieben.",
	"No chart or table to reorder." : "Es gibt keine Anzeige zum Verschieben.",
	"Move display to the right." : "Anzeige nach rechts verschieben",
	"Scratchpads can only be shown for charts with data." : "Der Schmierblock kann nur für Diagramme mit Daten angezeigt werden.",
	"Scratchpads can only be shown for charts." : "Der Schmierblock kann nur für Diagramme mit Daten angezeigt werden.",
	"Configure" : "Einstellungen",
	"Add a chart or table to configure it." : "Fügen Sie eine Anzeige hinzu, bevor sie die Einstellungen bearbeiten.",
	"Chart/Table Configuration" : "Anzeigeeinstellungen",
	"General Settings" : "Allgemein",
	"Title" : "Titel",
	"Type" : "Art",
	"Time Series" : "Zeitdiagramm",
	"Scatterplot" : "Streudiagramm",
	"Tabular" : "Tabelle",
	"Data" : "Daten",
	"Select which data to display" : " ",
	"Add newly created primitives to the data" : "Neue Elemente automatisch mit anzeigen",
	"Chart Settings" : "Diagramm",
	"Show Markers" : "Punkte",
	"Show Lines" : "Linien",
	"Use Areas" : "Flächen",
	"Legend Position" : "Legende anzeigen",
	"Automatic" : "Automatisch",
	"Top" : "Oben",
	"Right" : "Rechts",
	"Bottom" : "Unten",
	"Left" : "Links",
	"None" : "Keine",
	"X-Axis" : "x-Achse",
	"Label" : "Beschriftung",
	"Y-Axis" : "y-Achse",
	"Secondary Y-Axis" : "Zweite y-Achse",
	"The primitive list for the scatterplot has been truncated to two items. One for the x-Axis and one for the y-Axis." : "Die Datenliste für das Streudiagramm wurde auf zwei Elemente gekürzt: Eines für die x-Achse und eines für die y-Achse.",
	"You need two primitives to create a scatterplot. One for the x-Axis and one for the y-Axis." : "Für ein Streudiagramm werden zwei Datenreihen benötigt: Eine für die x-Achse und eine für die y-Achse.",
	"Correct the display configuration before applying." : "Die Anzeigeeinstellungen müssen vor dem Anwenden berichtigt werden.",
	"No data to display" : "Es liegen keine Daten vor.",
	"Press 'Configure' to select data" : "Wählen Sie 'Einstellungen' um Daten auszuwählen.",
	"Normal Speed" : "Normal",
	"Full Speed" : "Maximal",


	"Edit" : "Bearbeiten",
	"Undo" : "Widerrufen",
	"Redo" : "Wiederholen",
	"Cut" : "Ausschneiden",
	"Copy" : "Kopieren",
	"Paste" : "Einsetzen",
	"Delete" : "Löschen",
	"Find/Replace..." : "Suchen und Ersetzen …",
	"Find Next" : "Weitersuchen",
	"Zoom" : "Zoom",
	"Zoom In" : "Vergrößern",
	"Zoom Out" : "Verkleinern",
	"Actual Size" : "Originalgröße",
	"Fit Window" : "An Fenstergröße anpassen",
	"Layout Diagram" : "Diagramm anordnen",
	"Vertical Hierarchical Layout" : "Vertikal hierarchisch",
	"Horizontal Hierarchical Layout" : "Horizontal hierarchisch",
	"Organic Layout" : "Organisch",
	"Circle Layout" : "Kreisförmig",

	"Style" : "Formatieren",
	"Font Family..." : "Schriftart …",
	"Font Size..." : "Schriftgröße …",
	"Font Color" : "Schriftfarbe",
	"Custom Color..." : "Eigene Farbe …",
	"Line Style" : "Linienstil",
	"Fill Color" : "Figurenstil",
	"Bold" : "Fett",
	"Italic" : "Kursiv",
	"Underline" : "Unterstrichen",
	"Align" : "Ausrichten",
	"Order" : "Reihenfolge",
	"Primitive Picture" : "Bild zuweisen",
	"Use as Default Style" : "Als Standardstil verwenden",

	"Tools" : "Werkzeuge",
	"Scratchpad" : "Schmierblock",
	"Import Insight Maker File..." : "Datei öffnen …",
	"Export Insight Maker File" : "Datei speichern",
	"Print..." : "Drucken …",
	"Complete Equation List" : "Gleichungen anzeigen …",
	"Identify Loops..." : "Kreisläufe anzeigen …",
	"Sensitivity Testing..." : "Empfindlichkeit testen …",
	"Optimization & Goal Seek..." : "Modell optimieren …",
	"Macros & Variables..." : "Makros bearbeiten …",

	"Cancel" : "Abbrechen",
	"Apply" : "Anwenden"

};

function getText(src){
	if(translations[src]){
		src = translations[src];
	}

	for(var i = 1; i < arguments.length; i++){
		src = src.replace("%s", arguments[i]);
	}

	return src;
}
